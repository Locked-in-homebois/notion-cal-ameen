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
      <div className="bg-grey-200 w-[200px] mt-6]">    
      </div>












    </main>


  );
}
