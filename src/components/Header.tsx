import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/logo.png";

const Header = () => (
  <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2 flex-none">
    <Link href="/" className="flex space-x-2">
      <Image
        alt="header text"
        src={logo}
        priority
        className="sm:w-12 sm:h-12 w-7 h-7"
        width={80}
        height={80}
      />
      <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
        ithub.app
      </h1>
    </Link>
  </header>
);

export default Header;
