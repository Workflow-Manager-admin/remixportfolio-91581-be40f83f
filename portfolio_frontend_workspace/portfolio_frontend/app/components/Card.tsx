import { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  link?: string;
};

// PUBLIC_INTERFACE
export default function Card({ title, description, children, link }: CardProps) {
  const inner = (
    <div className="rounded-xl bg-gray-900 border border-gray-800 hover:border-primary hover:shadow-lg transition text-gray-200 p-6 flex flex-col gap-2">
      <h3 className="font-semibold text-lg text-primary mb-1">{title}</h3>
      {description && <p className="text-gray-400 text-base">{description}</p>}
      {children}
    </div>
  );
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group hover:scale-[1.02] transition">
        {inner}
      </a>
    );
  }
  return inner;
}
