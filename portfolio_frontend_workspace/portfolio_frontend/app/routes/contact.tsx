import type { MetaFunction } from "@remix-run/node";
import ContactForm from "~/components/ContactForm";

// PUBLIC_INTERFACE
export const meta: MetaFunction = () => ([
  { title: "Contact - My Portfolio" },
  { name: "description", content: "Get in touch via email or the contact form." }
]);

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Contact</h1>
      <p className="text-gray-300 mb-8">
        I’m currently open to new projects and opportunities. Send me a message using the form below and I’ll respond as soon as possible!
      </p>
      <ContactForm />
    </section>
  );
}
