"use client";

import { useCallback, useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { useParams, useRouter } from "next/navigation";

const LoginInput = () => {
  const router = useRouter();
  const params = useParams();

  const [username, setUsername] = useState(params.username || "");

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
    <form
      className="flex items-stretch justify-center flex-col sm:flex-row sm:items-center mt-6 gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="username"
        className="bg-white rounded-xl text-black font-medium px-4 py-3 hover:bg-gray-100 border flex-auto"
        placeholder="Your GitHub Username"
        required
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />

      <button
        type="submit"
        className="bg-black rounded-xl text-white font-medium px-4 py-3 hover:bg-black/80 flex items-center justify-center gap-1 whitespace-nowrap flex-auto"
      >
        Generate Analytics
        <HiChevronRight size={20} />
      </button>
    </form>
  );
};

export default LoginInput;
