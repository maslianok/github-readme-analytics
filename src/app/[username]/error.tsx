"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronRight, HiOutlineArrowPath } from "react-icons/hi2";

import Octobiwan from "@/../public/octobiwan.svg";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-md flex flex-col items-center justify-center">
      <Image
        className="mb-6"
        src={Octobiwan}
        alt="Github Octocat"
        width={200}
      />

      <h2 className="text-2xl font-bold sm:text-4xl tracking-tight mb-2">
        Well, this is awkward
      </h2>

      <p>
        Looks like the app has crashed unexpectedly...
        <br />
        Please try again later, a team of capybara engineers are already working
        on this problem.
      </p>

      <div className="flex items-stretch justify-center flex-col sm:flex-row sm:items-center mt-6 gap-2">
        <button
          type="button"
          className="bg-transparent border rounded-xl text-black font-medium px-6 py-3 hover:bg-black/10 flex items-center justify-center gap-1 transition"
          onClick={reset}
        >
          Try Again
          <HiOutlineArrowPath size={20} />
        </button>
        <Link
          href="/"
          className="bg-black rounded-xl text-white font-medium px-6 py-3 hover:bg-black/80 flex items-center justify-center gap-1 transition"
        >
          Go Home
          <HiChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
}

export default Error;
