"use client";

import { useEffect } from "react";
import Image from "next/image";

import Octobiwan from "@/../public/octobiwan.svg";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <Image src={Octobiwan} alt="Github Octocat" width={200} />

      <h2 className="mx-auto max-w-4xl text-5xl font-bold text-slate-900 sm:text-7xl tracking-tight">
        Something went wrong!
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Go to main page
      </button>
    </div>
  );
}

export default Error;
