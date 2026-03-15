import React from "react";
import Section from "../common/Section";
import Button from "../common/Button";

export default function Projects({ profile }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10">
        <Section
          id="projects"
          title="Featured Projects"
          subtitle="Client work focused on performance, usability, and real outcomes."
        >
          <div className="grid md:grid-cols-3 gap-6">
            {profile?.projects?.map((p) => (
              <article
                key={p.title}
                className="
                  group rounded-3xl
                  border border-[#1C4D87]/15
                  bg-[#1C4D87]/10
                  backdrop-blur-md
                  p-6 flex flex-col
                  transition
                  hover:bg-[#1C4D87]/12 hover:shadow-sm
                "
              >
                {/* Preview */}
                <div className="mb-5 rounded-2xl bg-white/70 border border-slate-200 h-36 flex items-center justify-center text-xs text-slate-500">
                  Project Preview
                </div>

                <h3 className="font-semibold text-lg text-slate-900">{p.title}</h3>

                {p.outcome && (
                  <p className="mt-1 text-xs text-slate-500">{p.outcome}</p>
                )}

                <p className="mt-3 text-sm text-slate-600 flex-1 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack?.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-white/70 border border-slate-200 text-slate-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Client-facing CTAs */}
                <div className="mt-5 flex gap-3">
                  {p.live && (
                    <Button href={p.live} variant="secondary">
                      Live Site
                    </Button>
                  )}

                  {p.caseStudy && (
                    <Button href={p.caseStudy} variant="secondary">
                      Case Study
                    </Button>
                  )}

                  {!p.caseStudy && (
                    <Button href="#contact" variant="secondary">
                      Build Similar
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}