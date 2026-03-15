import React from "react";
import Section from "../common/Section";

export default function About({ profile }) {
  const services = [
    { title: "Websites & Web Apps", desc: "Modern, responsive builds for businesses, clinics, and service brands." },
    { title: "UI Customization", desc: "Match brand colors, improve layout, and refine UX for conversions." },
    { title: "Tool & Plugin Integration", desc: "Bookings, forms, payments, CRM, email automation, and third-party tools." },
    { title: "Ongoing Maintenance", desc: "Updates, fixes, performance improvements, backups, and monthly content changes." },
    { title: "Performance & SEO", desc: "Speed optimization, technical SEO structure, and Core Web Vitals." },
    { title: "Client Handoff", desc: "Clean structure, documentation, and an easy-to-manage content setup." },
  ];

  const chips = ["Websites", "Web Apps", "UI Redesign", "Integrations", "Maintenance", "SEO", "Performance"];

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10">
        <Section
          id="about"
          title="About"
          subtitle="Client-focused delivery — websites, apps, improvements, and ongoing support."
        >
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Main card */}
            <div
              className="
  lg:col-span-2
  h-full flex flex-col
  rounded-3xl
  border border-[#1C4D87]/15
  bg-[#1C4D87]/10
  backdrop-blur-md
  p-8
  shadow-sm shadow-slate-900/5
"
            >
              <p className="text-slate-700 leading-relaxed text-base">
                {profile?.about ??
                  "I help businesses build and maintain websites and web applications that look premium, load fast, and are easy to manage. From redesigns and custom features to integrations and monthly updates — I keep things running smoothly."}
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                <div>• Client-ready UI & layouts</div>
                <div>• Custom pages & components</div>
                <div>• Tool integrations & automations</div>
                <div>• Ongoing updates & maintenance</div>
              </div>

              {/* Chips */}
              <div className="mt-7 flex flex-wrap gap-2">
                {chips.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white/70 border border-slate-200 text-slate-600"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Services grid */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {services.map((item) => (
                  <div
                    key={item.title}
                    className="
                      rounded-2xl
                      border border-slate-200
                      bg-white/70
                      p-5
                      hover:bg-white
                      hover:shadow-sm
                      transition
                    "
                  >
                    <div className="font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side card */}
            <div
              className="
  h-full flex flex-col
  rounded-3xl
  border border-[#1C4D87]/15
  bg-[#1C4D87]/10
  backdrop-blur-md
  p-8
  shadow-sm shadow-slate-900/5
"
            >
              <div className="text-xs uppercase tracking-widest text-slate-500">
                How I work
              </div>

              <div className="mt-4 space-y-3 text-sm">
                {[
                  { t: "Scope & Plan", d: "Clear requirements, timeline, and deliverables." },
                  { t: "Design & Build", d: "Premium UI, responsive layout, and clean structure." },
                  { t: "Launch & Support", d: "Deployment, fixes, and ongoing maintenance if needed." },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl bg-white/70 border border-slate-200 p-4 hover:bg-white transition"
                  >
                    <div className="font-semibold text-slate-900">{x.t}</div>
                    <div className="mt-1 text-slate-600">{x.d}</div>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href={`mailto:${profile?.email ?? "hello@example.com"}`}
                  className="
                  mt-6 inline-flex w-full items-center justify-center
                  rounded-xl
                  bg-[#1C4D87] text-white
                  px-5 py-3
                  font-semibold text-sm
                  hover:bg-[#163d6c]
                  transition
                "
                >
                  Let’s Discuss Your Project <span className="ml-2 opacity-90">↗</span>
                </a> </div>

              <div className="mt-3 text-xs text-slate-500 text-center">
                {profile?.email ?? "hello@example.com"}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}