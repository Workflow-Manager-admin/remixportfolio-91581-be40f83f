import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// PUBLIC_INTERFACE
export default function Footer() {
  return (
    <footer className="w-full mt-12 border-t border-gray-800 bg-gray-950 py-4">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</span>
        <div className="flex space-x-5 text-xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-accent transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-accent transition" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-accent transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
