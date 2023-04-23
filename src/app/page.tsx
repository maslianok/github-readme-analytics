import LoginInput from "@/components/LoginInput";

const geadient = `bg-clip-text text-transparent bg-gradient-to-r from-[#20BF55] to-[#01BAEF]`;

const Home = () => (
  <main className="flex w-full flex-col items-center justify-center text-center">
    <a
      href="https://twitter.com/nutlope/status/1626074563481051136"
      target="_blank"
      rel="noreferrer"
      className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
    >
      Simple and Slick analytics widget
    </a>

    <h1 className="mx-auto max-w-4xl text-5xl font-bold text-slate-900 sm:text-7xl">
      Flex Your <span className={geadient}>Github</span> Profile Stats and{" "}
      <span className={geadient}>Analytics</span> ✨
    </h1>

    <p className="mx-auto mt-6 sm:mt-12 max-w-xl text-lg text-slate-700 leading-7">
      Want to make your Github profile stand out? Customize your appearance with
      our free custom personalized analytics widget.
    </p>

    <LoginInput />
  </main>
);

export default Home;
