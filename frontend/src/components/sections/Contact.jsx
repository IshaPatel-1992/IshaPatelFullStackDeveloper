import React, { useMemo, useState } from "react";
import Section from "../common/Section";
import Button from "../common/Button";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = useMemo(() => {
    const to = profile?.email || "";
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [profile?.email, form]);

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Make it easy for someone to reach you in under 10 seconds."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: CTA */}
        <div className="rounded-3xl border border-[#1C4D87]/15 bg-[#1C4D87]/10 backdrop-blur-md p-6 shadow-sm shadow-slate-900/5">
          <div className="font-semibold text-lg text-slate-900">
            Let’s talk
          </div>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Email me for website/app projects, redesigns, integrations, or ongoing support.
            I usually reply within 24–48 hours.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={`mailto:${profile?.email || ""}`}>Email Me</Button>

            {profile?.socials?.linkedin ? (
              <Button href={profile.socials.linkedin} variant="secondary">
                LinkedIn
              </Button>
            ) : null}
          </div>

          <div className="mt-4 text-xs text-slate-500">
            Prefer a quick message? Use the form — it will open your email app with everything filled in.
          </div>
        </div>

        {/* Right: Form (mailto fallback, no backend) */}
        <form
          className="rounded-3xl border border-[#1C4D87]/15 bg-[#1C4D87]/10 backdrop-blur-md p-6 shadow-sm shadow-slate-900/5"
          action={mailtoHref}
          method="get"
          onSubmit={(e) => {
            if (!profile?.email) e.preventDefault();
          }}
        >
          <div className="font-semibold text-lg text-slate-900">
            Quick message
          </div>

          <div className="mt-4 grid gap-3">
            <div>
              <label className="sr-only" htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                className="
                  w-full rounded-xl
                  border border-slate-200
                  bg-white/70
                  px-4 py-3
                  text-sm text-slate-900
                  placeholder:text-slate-400
                  focus:outline-none focus:ring-2 focus:ring-[#1C4D87]/30
                "
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="
                  w-full rounded-xl
                  border border-slate-200
                  bg-white/70
                  px-4 py-3
                  text-sm text-slate-900
                  placeholder:text-slate-400
                  focus:outline-none focus:ring-2 focus:ring-[#1C4D87]/30
                "
                placeholder="Your email"
                required
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="
                  w-full min-h-28 rounded-xl
                  border border-slate-200
                  bg-white/70
                  px-4 py-3
                  text-sm text-slate-900
                  placeholder:text-slate-400
                  focus:outline-none focus:ring-2 focus:ring-[#1C4D87]/30
                "
                placeholder="Message"
                required
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              />
            </div>

            {/* Mailto button */}
            <Button href={mailtoHref}>Send</Button>

            {!profile?.email ? (
              <p className="text-xs text-red-600">
                Add your email in profile data to enable sending.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </Section>
  );
}