import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";

export default function Navbar(){
  return (
    <header className="fixed left-0 top-0 w-full py-6 md:px-16 px-6 border-b border-dashed border-secondary z-30 bg-primary">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="#">
          <Image src={Logo} className="object-cover-cover h-10 w-10" width={50} height={50} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="#expertise"
                className="hover:text-secondary-bright duration-500"
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-secondary-bright duration-500"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}