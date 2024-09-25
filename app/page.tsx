import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>さこみちょがぞう</p>
        <img
          className="dark:invert"
          src="icon190101futari1sdm.jpg"
          alt="eriちゃん"
          width="100%"
          height="100%"
        />
      </main>
    </div>
  );
}
