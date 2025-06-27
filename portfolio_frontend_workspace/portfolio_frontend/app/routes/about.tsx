import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";

// PUBLIC_INTERFACE
export const meta: MetaFunction = () => ([
  { title: "About - My Portfolio" },
  { name: "description", content: "More about the person behind this site." }
]);

const experiences = [
  {
    title: "Senior Developer at Acme Corp",
    description: "Led the development of critical business apps using React, TypeScript, and Node.js."
  },
  {
    title: "UI/UX Enthusiast",
    description: "Passionate about minimalism and highly usable, accessible web interfaces."
  },
  {
    title: "Open Source Contributor",
    description: "Maintainer and contributor to several open source frontend projects."
  },
];

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-5">About Me</h1>
      <div className="text-gray-300 mb-10">
        <p>
          Hi, I&apos;m <span className="text-accent font-bold">John Doe</span>, a software engineer with a passion for modern web development and a focus on elegant, maintainable products. I enjoy using <span className="text-secondary">Remix</span> and <span className="text-secondary">React</span> to craft performant front-end experiences, and like to dabble in backend APIs.
        </p>
        <p className="mt-2">
          My interests include UI/UX design, accessibility, and open source technology. I thrive in collaborative teams and remote work settings.
        </p>
      </div>
      <h2 className="text-xl font-bold text-secondary mb-4">Experience & Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp) => (
          <Card key={exp.title} title={exp.title} description={exp.description} />
        ))}
      </div>
    </section>
  );
}
