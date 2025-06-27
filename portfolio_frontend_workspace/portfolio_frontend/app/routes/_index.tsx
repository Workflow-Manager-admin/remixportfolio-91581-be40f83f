import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";

export const meta: MetaFunction = () => ([
  { title: "My Portfolio" },
  { name: "description", content: "Personal Portfolio Home" }
]);

const skills = [
  { title: "React & Remix", description: "Modern web apps, fast and scalable." },
  { title: "TypeScript", description: "Type safety for large scale apps." },
  { title: "Tailwind CSS", description: "Utility-first and beautiful UIs." },
  { title: "Node.js", description: "Backend APIs and full-stack experience." },
];

const featuredProjects = [
  {
    title: "Project Alpha",
    description: "A cutting-edge web application built with Remix.",
    link: "https://github.com/",
  },
  {
    title: "Design System",
    description: "Reusable UI components for multiple client projects.",
    link: "#"
  }
];

// PUBLIC_INTERFACE
export default function Index() {
  return (
    <section className="w-full flex flex-col items-center px-4">
      <section className="max-w-4xl mt-16 mb-20 text-center items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-primary">John Doe</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Software Engineer &mdash; <span className="text-secondary">Full Stack Developer</span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 text-lg mb-8">
          Welcome to my portfolio! I build modern, scalable web applications and design elegant user experiences.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="inline-block py-2 px-6 font-semibold rounded-md bg-primary text-white hover:bg-secondary transition text-base shadow"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="inline-block py-2 px-6 font-semibold rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition text-base"
          >
            Contact Me
          </a>
        </div>
      </section>
      <section className="w-full max-w-5xl mb-20">
        <h3 className="text-2xl font-bold text-primary mb-5 text-center">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} title={skill.title} description={skill.description} />
          ))}
        </div>
      </section>
      <section className="w-full max-w-5xl">
        <h3 className="text-2xl font-bold text-primary mb-5 text-center">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((proj) => (
            <Card key={proj.title} title={proj.title} description={proj.description} link={proj.link} />
          ))}
        </div>
      </section>
    </section>
  );
}
