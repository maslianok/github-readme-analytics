import Image from "next/image";
import LoginInput from "@/components/LoginInput";

import Octobiwan from "@/../public/octobiwan.svg";

const NotFound = () => (
  <div className="mx-auto max-w-md flex flex-col items-center justify-center">
    <Image className="mb-6" src={Octobiwan} alt="Github Octocat" width={200} />

    <h2 className="text-2xl font-bold sm:text-4xl tracking-tight mb-2">
      User not Found
    </h2>

    <p>
      No user with this username was found. Check the entered username for
      typos, possibly.
    </p>

    <LoginInput />
  </div>
);

export default NotFound;
