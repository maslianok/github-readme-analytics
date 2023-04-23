"use client";

import { useCallback } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const LoginInput = () => {
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      let username = (form.username.value as string) || "";
      username = username.trim().toLowerCase();

      if (!username) return;

      router.push(`/${username}`);
    },
    [router]
  );

  return (
    <form className="flex justify-center space-x-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
        placeholder="Your GitHub Username"
        required
      />

      <button
        type="submit"
        className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80 flex items-center gap-1"
      >
        Generate Analytics
        <HiChevronRight size={20} />
      </button>
    </form>
  );
};

export default LoginInput;
