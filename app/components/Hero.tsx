import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <main className="flex flex-col text-center items-center justify-center mt-6 gap-1.5 font-bold   ">
            <Image
                src="/notion cal logo.png"
                width={260}
                height={260}
                className="w-[105px] h-auto"
                alt="calendar logo"
            />
            <h1 className=" text-[15px] ">Notion Calendar
            </h1>
            <h1 className="text-7xl">
                It’s time.
            </h1>
            <p className="max-w-[450px] text-2xl tracking-tight">
                All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.
            </p>

            <Link className=" text-white bg-black mt-4 rounded-lg w-[250px] h-auto hover:bg-red-700 px-1 py-1   
            " href="https://www.youtube.com/ ">
                Get Notion Calendar For Free
            </Link>

        </main>

    )
}
export default Hero;
