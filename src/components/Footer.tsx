import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Footer = () => (
  <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 flex-none">
    <div>Made with ❤️ @ 2023</div>

    <div className="flex space-x-4 pb-4 sm:pb-0">
      <Link
        href="https://github.com/maslianok/github-readme-analytics"
        className="group"
        aria-label="TaxPal on GitHub"
      >
        <BsGithub
          aria-hidden="true"
          className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
        />
      </Link>
    </div>
  </footer>
);

export default Footer;
