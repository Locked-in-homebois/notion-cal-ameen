import Image from "next/image";
import Link from "next/link";
const Comp2buttons = () => {
    return (
        <main className="flex flex-col items-center justify-center  text-start ">
            <div className="max-w-[1000px]">
                <h1 className="font-bold mt-10 text-4xl ">
                    Get Notion Calendar for free. </h1>
                <p className="mt-3.5">
                    Unlock a better way to manage your time and life.
                </p>

                <Link className="text-blue-600 mt-4 hover:text-black hover:underline" href="https://www.youtube.com/watch?v=rb0bjyt1OD0">
                    Get Notion Calendar free →
                </Link>


                <div className="grid grid-cols-2 max-w-[1000px] w-full gap-5 mt-6  ">

                    <div className="bg-zinc-100 rounded-2xl w-full h-auto py-10 px-5 items-start ">
                        <h1 className="px-5">
                            Desktop App </h1>
                        <Image className=" w-full h-auto mt-4"
                            src="/2buttonsleft.png"
                            width={1000}
                            height={200}
                            alt="yappa yappa" />

                        <div className="flex items-start px-3 rounded-2xl mt-5 gap-5 ">
                            <Link className="flex  bg-blue-600 text-black rounded-2xl px-5 " href="https://www.youtube.com/watch?v=19GUNqBsqo0">
                                <Image className="py-0.5"
                                    src="/6small.png"
                                    width={25}
                                    height={25}
                                    alt="yappa yappa"
                                />

                                <h1>Mac os </h1>
                            </Link>
                            <Link className="flex  bg-blue-600 text-black rounded-2xl px-5 " href="https://www.youtube.com/watch?v=19GUNqBsqo0">
                                <Image className="py-0.5"
                                    src="/6small.png"
                                    width={25}
                                    height={25}
                                    alt="yappa yappa"
                                />

                                <h1>windows </h1>
                            </Link>

                        </div>


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
                        <div className="flex items-start px-3 rounded-2xl mt-5 gap-5 ">
                            <Link className="flex  bg-blue-600 text-black rounded-2xl px-5 " href="https://www.youtube.com/watch?v=19GUNqBsqo0">
                                <Image className="py-0.5"
                                    src="/6small.png"
                                    width={25}
                                    height={25}
                                    alt="yappa yappa"
                                />

                                <h1>Mac os </h1>
                            </Link>
                            <Link className="flex  bg-blue-600 text-black rounded-2xl px-5 " href="https://www.youtube.com/watch?v=19GUNqBsqo0">
                                <Image className="py-0.5"
                                    src="/6small.png"
                                    width={25}
                                    height={25}
                                    alt="yappa yappa"
                                />

                                <h1>windows </h1>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Comp2buttons;