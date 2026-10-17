"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { eventTypes, site } from "@/lib/content";

type Fields = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSent(false);
  }

  function validate() {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) next.name = "Add meg a neved.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = "Érvényes e-mail cím kell.";
    }
    if (!fields.eventType) next.eventType = "Válaszd ki az esemény típusát.";
    if (fields.message.trim().length < 12) {
      next.message = "Írj néhány mondatot az eseményről.";
    }
    return next;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = `Fotózás érdeklődés – ${fields.eventType}`;
    const body = [
      `Név: ${fields.name.trim()}`,
      `E-mail: ${fields.email.trim()}`,
      fields.phone.trim() ? `Telefon: ${fields.phone.trim()}` : null,
      `Esemény: ${fields.eventType}`,
      fields.date ? `Dátum: ${fields.date}` : null,
      "",
      fields.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Név" error={errors.name} htmlFor="nev">
          <Input
            id="nev"
            name="name"
            autoComplete="name"
            value={fields.name}
            aria-invalid={Boolean(errors.name)}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field label="E-mail" error={errors.email} htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            aria-invalid={Boolean(errors.email)}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefon" htmlFor="telefon" optional>
          <Input
            id="telefon"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field label="Esemény típusa" error={errors.eventType} htmlFor="tipus">
          <select
            id="tipus"
            name="eventType"
            value={fields.eventType}
            aria-invalid={Boolean(errors.eventType)}
            onChange={(event) => update("eventType", event.target.value)}
            className="flex h-12 w-full rounded-2xl border border-line bg-white px-4 text-base text-ink outline-none focus-visible:border-blue focus-visible:ring-2 focus-visible:ring-blue/30"
          >
            <option value="">Válassz típust</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Dátum" htmlFor="datum" optional>
        <Input
          id="datum"
          name="date"
          type="date"
          value={fields.date}
          onChange={(event) => update("date", event.target.value)}
        />
      </Field>

      <Field label="Üzenet" error={errors.message} htmlFor="uzenet">
        <Textarea
          id="uzenet"
          name="message"
          placeholder="Hol lesz a fellépés, milyen a helyszín, mire kellenek a képek?"
          value={fields.message}
          aria-invalid={Boolean(errors.message)}
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Üzenet küldése
        </Button>
        <p className="text-sm text-muted">
          A gomb megnyitja a leveleződet, a címzett {site.email}.
        </p>
      </div>

      {sent ? (
        <p className="rounded-2xl border border-blue/20 bg-mist px-4 py-3 text-sm leading-6 text-navy" role="status">
          Az üzenetvázlat megnyílt a leveleződben. Ha nem jelenik meg, írj közvetlenül a{" "}
          <a className="font-semibold text-blue" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          címre.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <Label htmlFor={htmlFor}>{label}</Label>
        {optional ? <span className="text-xs text-muted">nem kötelező</span> : null}
      </div>
      {children}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
