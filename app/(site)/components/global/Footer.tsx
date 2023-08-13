import {
  BiEnvelope,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
  BiLogoGithub,
} from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="border-t border-dashed border-secondary">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 py-10 text-secondary-bright">
        <small className="duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>
        <small>
          <a
            href="https://github.com/Danylosokol"
            target="_blank"
            rel="noreferer noopener"
          >
            Developed by{" "}
            <span className="hover:text-accent-right duration-500">
              Danylo Sokol
            </span>
          </a>
        </small>
        <div className="flex gap-3 text-xl">
          <a
            href="mailto:danylo.sokol2504@gmail.com"
            rel="noreferer noopener"
            className="hover:text-white"
          >
            <BiEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/danylo-sokol/"
            target="_blank"
            rel="noreferer noopener"
            className="hover:text-white duration-500"
          >
            <BiLogoLinkedinSquare />
          </a>
          <a
            href="https://github.com/Danylosokol"
            target="_blank"
            rel="noreferer noopener"
            className="hover:text-white duration-500"
          >
            <BiLogoGithub />
          </a>
          <a
            href="https://facebook.com/danylo.sokol.5/"
            target="_blank"
            rel="noreferer noopener"
            className="hover:text-white duration-500"
          >
            <BiLogoFacebookSquare />
          </a>
        </div>
      </div>
    </footer>
  );
}
