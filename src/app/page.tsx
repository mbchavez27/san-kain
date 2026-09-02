import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full flex justify-center items-center">
          <Image
            src="/lscs-logo.png"
            alt="LSCS logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">san-kain</h1>
        <p className="text-gray-500 text-center sm:text-left">
          A LSCS project
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} LSCS
        </span>
      </footer>
    </div>
  );
}
