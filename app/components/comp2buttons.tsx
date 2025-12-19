import Image from "next/image";
import Link from "next/link";
const Comp2buttons = () => {
    return (
        <main className="flex flex-col items-center justify-center max-w-[1000px] text-start">
            <h1 className="font-bold mt-10 text-4xl ">
                Get Notion Calendar for free. </h1>
            <p className="mt-3.5">
                Unlock a better way to manage your time and life.
            </p>

            <Link className="text-blue-600 mt-4 hover:text-black hover:underline" href="https://www.youtube.com/watch?v=rb0bjyt1OD0">
                Get Notion Calendar free →
            </Link>


            <div className="grid grid-cols-2 max-w-[1000px] w-full gap-5 mt-6  ">

                <div className="bg-zinc-100 rounded-2xl w-full h-auto py-10 px-5">
                    <h1 className="px-5">
                        Desktop App </h1>
                    <Image className=" w-full h-auto mt-4"
                        src="/2buttonsleft.png"
                        width={1000}
                        height={200}
                        alt="yappa yappa"
                    />

                    <Link className=" bg-amber-500 text-black" href="https://www.youtube.com/watch?v=19GUNqBsqo0">
                        <Image className=""
                            src="/6small.png"
                            width={35}
                            height={35}
                            alt="yappa yappa"
                        />

                        macos

                    </Link>



                </div>
                <div className="bg-zinc-100 rounded-2xl w-full h-auto items-center py-10">
                    <h1 className="px-5">
                        Mobile App </h1>
                    <Image className=" flex w-[70%] h-auto justify-self-center mt-5 "
                        src="/callmaphone.png"
                        width={1000}
                        height={1000}
                        alt="yappa yappa"
                    />
                </div>
            </div>
        </main>
    );
};
export default Comp2buttons;