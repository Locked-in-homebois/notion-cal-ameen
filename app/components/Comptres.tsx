import Image from "next/image";
const Comptres = () => {
    return (
        <main className="flex flex-col  items-center justify-center">
            <div className=" grid   w-[1000px] mt-8  text-left gap-4 grid-cols-2  ">
                <div className="bg-zinc-100 w-full h-[490px] rounded-2xl px-5 py-7 ">
                    <Image
                        src="time-outline.svg"
                        width={30}
                        height={30}
                        className=""
                        alt="clock top left"
                    />
                    <h1 className="font-bold w-70 mt-4 ">
                        Built-in scheduling
                    </h1>
                    <p>
                        Send your availability and scheduling link to let others book time with you. No separate app.
                    </p>
                    <Image
                        src="/topleftamk.png"
                        width={430}
                        height={460}
                        alt="yappa yappa"
                        className="rounded-md mt-5 mb-4"
                    />
                </div>
                <div className="bg-zinc-100 w-full h-[490px] rounded-3xl px-4 py-2 grid gap-1">
                    <Image
                        src="/toprighticon.png"
                        width={30}
                        height={30}
                        alt="yappa yappa"
                        className="w-7 h-auto  mt-5"
                    />
                    <h1 className="font-bold  mt-4" >
                        Work across time zones
                    </h1>
                    <p className=" mt-2 w-[390px]" >
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
                <div className="bg-zinc-100 w-full h-[490px] rounded-3xl px-8 py-4 grid gap-4">
                    <Image
                        src="/bottomlefticon.png"
                        width={1100}
                        height={1100}
                        alt="yappa yappa"
                        className="w-10 h-auto "
                    />
                    <h1 className="font-bold  ">
                        Modern design </h1>
                    <p className="  w-64">
                        Use command menu and shortcuts for efficient workflows.</p>
                    <Image
                        src="/bottomleftamk.png"
                        width={1100}
                        height={1100}
                        className="w-[490px] h-[280px] rounded-2xl"
                        alt="yappa yappa"
                    />
                </div>
                <div className="bg-zinc-100 w-full rounded-3xl grid gap-2 px-4 py-1">
                    <Image
                        src="/bottomlefticon.png"
                        width={1100}
                        height={1100}
                        alt="yappa yappa"
                        className="w-10 h-auto  mt-5"
                    />
                    <h1 className="font-bold  mt-4">
                        Available in 12 languages </h1>
                    <p className=" mt-2 w-100">
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
            <div className="flex items-center text-center justify-center ">
                <h1 className="mt-36 text-5xl font-bold  w-[700px]" >
                    Fully integrated with your Notion workspace.
                </h1>
            </div>
        </main >
    )
}
export default Comptres


