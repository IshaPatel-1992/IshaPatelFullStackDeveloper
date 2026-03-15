import React from "react";
import Section from "../common/Section";
import Chip from "../common/Chip";

const groupDescriptions = {
  Frontend: "User experience, accessibility, and performance",
  Backend: "APIs, authentication, and data handling",
  Performance: "Speed, Lighthouse, and Core Web Vitals",
  SEO: "Technical and local optimization",
  Tools: "Deployment, hosting, and workflows",
};

export default function Skills({ profile }) {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I use to ship fast, reliable products."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(profile.skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {group}
            </h3>

            {groupDescriptions[group] && (
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {groupDescriptions[group]}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((it) => (
                <Chip key={it}>{it}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
