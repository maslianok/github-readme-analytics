import Image from "next/image";
import Link from "next/link";

import Octobiwan from "@/../public/octobiwan.svg";

const NotFound = () => {
  return (
    <div>
      <Image src={Octobiwan} alt="Github Octocat" width={200} />

      <h2 className="mx-auto max-w-4xl text-5xl font-bold text-slate-900 sm:text-7xl tracking-tight">
        Not Found
      </h2>
      <p>Could not find profile with given username</p>

      <Link href="/">Go to main page</Link>
    </div>
  );
};

export default NotFound;
