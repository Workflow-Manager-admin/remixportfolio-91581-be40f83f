import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";

// PUBLIC_INTERFACE
export const meta: MetaFunction = () => ([
  { title: "Projects - My Portfolio" },
  { name: "description", content: "A showcase of notable work and side projects." }
]);

const projects = [
  {
    title: "Remix Blog Platform",
    description: "A full-featured blogging platform built with Remix, featuring user authentication, CMS, and markdown support.",
    link: "https://github.com/",
  },
  {
    title: "Minimalist Portfolio",
    description: "Open source Remix template for modern, dark-themed portfolios.",
    link: "https://github.com/",
  },
  {
    title: "React Component Toolkit",
    description: "A library of customizable UI components for rapid development.",
    link: "#",
  },
  {
    title: "API Analytics Dashboard",
    description: "A data visualization dashboard for API usage stats, using D3.js.",
    link: "#",
  }
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-7">Projects</h1>
      <div className="text-gray-300 mb-8">
        <p>
          Here are some of my featured projects, spanning web applications, open source toolkits, and data visualizations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p) => (
          <Card key={p.title} title={p.title} description={p.description} link={p.link} />
        ))}
      </div>
    </section>
  );
}
