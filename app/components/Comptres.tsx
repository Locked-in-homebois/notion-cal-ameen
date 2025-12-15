import Image from "next/image";
const Comptres = () => {
    return (
        <main>
            <div className=" grid   w-[1000px] mt-8 rounded-3xl text-left gap-4 grid-cols-2  ">
                <div className="bg-zinc-100 w-full h-[480px] rounded-2xl ">
                    <Image
                        src="time-outline.svg"
                        width={20}
                        height={20}
                        className="w-7 h-auto ml-8 mt-5 "
                        alt="clock top left"
                    />
                    <h1 className="font-bold ml-10 w-70 mt-4">
                        Built-in scheduling
                    </h1>
                    <p className="ml-8 mt-2">
                        Send your availability and scheduling link to let others book time with you. No separate app.
                    </p>
                    <Image
                        src="/topleftamk.png"
                        width={430}
                        height={560}
                        alt="yappa yappa"
                        className="rounded-3xl ml-9"
                    />
                </div>
                <div className="bg-zinc-100 w-full h-[480px] rounded-3xl">
                    <Image
                        src="/toprighticon.png"
                        width={30}
                        height={30}
                        alt="yappa yappa"
                        className="w-7 h-auto ml-8 mt-5"
                    />
                    <h1 className="font-bold ml-8 mt-4" >
                        Work across time zones
                    </h1>
                    <p className="ml-8 mt-2 w-[390px]" >
                        Thoughtfully collaborate with global teams as you visualize your day across time zones.
                    </p>
                    <Image
                        src="/toprightamk.png"
                        width={450}
                        height={460}
                        alt="yappa yappa"
                        className="w-[480px] h-80 rounded-2xl  "
                    />
                </div>

                <div className="bg-zinc-100 w-full h-[460px] rounded-3xl">
                    <Image
                        src="/bottomlefticon.png"
                        width={1100}
                        height={1100}
                        alt="yappa yappa"
                        className="w-10 h-auto ml-8 mt-5"
                    />
                    <h1 className="font-bold ml-8 mt-4">
                        Modern design </h1>
                    <p className="ml-5 mt-5 w-64">
                        Use command menu and shortcuts for efficient workflows.</p>
                    <Image
                        src="/bottomleftamk.png"
                        width={1100}
                        height={1100}
                        className="w-[490px] h-[280px] rounded-2xl"
                        alt="yappa yappa"
                    />


                </div>

                <div className="bg-zinc-100 w-full rounded-3xl">
                    <Image
                        src="/bottomlefticon.png"
                        width={1100}
                        height={1100}
                        alt="yappa yappa"
                        className="w-10 h-auto ml-8 mt-5"
                    />
                    <h1 className="font-bold ml-8 mt-4">
                        Available in 12 languages </h1>
                    <p className="ml-5 mt-2 w-100">
                        Supports English, Japanese, Korean, French, German, Spanish, Portuguese, Danish, Dutch, Finnish, Norwegian, and Swedish… with more on the way!
                    </p>
                    <Image
                        src="/bottomrightamk.png"
                        width={1100}
                        height={1100}
                        className="w-[490px] h-[280px] rounded-2xl"
                        alt="yappa yappa"
                    />
                </div>




            </div>


            <div className="flex items-center justify-center">
                <h1 className=" flex text-center items-center  mt-36 text-5xl font-bold rounded-2xl w-[700px] " >
                    Fully integrated with your Notion workspace.

                </h1>

            </div>


        </main >

    )
}
export default Comptres


