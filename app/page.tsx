import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col text-center items-center justify-center mt-32">
      <Image
        src="/notion cal logo.png"
        width={260}
        height={260}
        className="w-[105px] h-auto"
        alt="calendar logo"
      />
      <p className="mt-6 text-[15px] font-semibold">Notion Calendar</p>
      <p className="mt-1 text-[70px] font-bold tracking-tight rounded-3xl">It’s time.</p>
      <p className="text-[20px] font-semibold w-[490px]   ">All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.      </p>
      <div className="bg-black mt-4 rounded-[8px] w-[250] h-auto">
        <Link className="bg-black text-white " href="https://www.youtube.com/">
          Get Notion Calendar For Free

        </Link>

      </div>

      <div className="  bg-zinc-100 w-[1000px] h-200 mt-24 rounded-2xl text-center flex flex-col items-center justify-center font-bold text-[100px]">
        this should be a video




      </div>


      <p className="font-bold text-center rounded-b-4xl mt-10 text-5xl ">
        Time management, simplified.
      </p>

      <div className="bg-zinc-100 w-[1000px] h-200 mt-24 rounded-2xl text-left">

        <Image
          src="/calendar-clear-outline.svg"
          width={50}
          height={50}
          className="w-[40px] h-auto rounded-2xl mb-5 mt-5 ml-5"
          alt="icon first background"
        />
        <p className="font-bold text-left ml-5 text-[16px]">
          See your schedule at a glance
        </p>
        <p className="ml-5 mt-5 text[15px] ">
          Join meetings directly from the menu bar so you can stay focused


        </p>
        <p className="ml-5  text[15px] ">
          on the work that matters.


        </p>




      </div>












    </main>


  );
}
