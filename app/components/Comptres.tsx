import Image from "next/image";
const Comptres = () => {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className=" md:grid grid-cols-2 gap-4 max-w-[1000px] mt-10 text-left">
                <div className="bg-zinc-100 rounded-2xl md:px-0 px-6 py-3 grid md:gap-4">
                    <Image
                        src="time-outline.svg"
                        width={30}
                        height={30}
                        className=""
                        alt="clock top left"
                    />
                    <h1 className="font-bold">
                        Built-in scheduling
                    </h1>
                    <p>
                        Send your availability and scheduling link to let others book time with you. No separate app.
                    </p>
                    <Image
                        src="/topleftamk.png"
                        width={500}
                        height={500}
                        alt="yappa yappa"
                        className="rounded-md"
                    />
                </div>
                <div className="bg-zinc-100 w-full h-auto rounded-2xl px-6 py-3 grid gap-4  ">
                    <Image
                        src="/toprighticon.png"
                        width={30}
                        height={30}
                        alt="yappa yappa"
                        className=""
                    />
                    <h1 className="font-bold" >
                        Work across time zones
                    </h1>
                    <p>
                        Thoughtfully collaborate with global teams as you visualize your day across time zones.
                    </p>
                    <Image
                        src="/toprightamk.png"
                        width={500}
                        height={500}
                        alt="yappa yappa"
                        className="rounded-2xl"
                    />
                </div>
                <div className="bg-zinc-100 w-full h-auto rounded-3xl px-8 py-4 grid gap-4">
                    <Image
                        src="/bottomlefticon.png"
                        width={30}
                        height={30}
                        alt="yappa yappa"
                    />
                    <h1 className="font-bold">
                        Modern design
                    </h1>
                    <p className="  max-w-64">
                        Use command menu and shortcuts for efficient workflows.</p>
                    <Image
                        src="/bottomleftamk.png"
                        width={500}
                        height={500}
                        alt="yappa yappa"
                    />
                </div>
                <div className="bg-zinc-100 w-full h-auto rounded-2xl px-6 py-3 grid gap-4">
                    <Image
                        src="/bottomlefticon.png"
                        width={30}
                        height={30}
                        alt="yappa yappa"
                    />
                    <h1 className="font-bold">
                        Available in 12 languages </h1>
                    <p>
                        Supports English, Japanese, Korean, French, German, Spanish, Portuguese, Danish, Dutch, Finnish,
                        Norwegian, and Swedish… with more on the way!
                    </p>
                    <Image
                        src="/bottomrightamk.png"
                        width={500}
                        height={500}
                        alt="yappa yappa"
                        className=""
                    />
                </div>
            </div>
            <h1 className=" text-center mt-36 text-5xl font-bold max-w-[580px] " >
                Fully integrated with your Notion workspace.
            </h1>
        </main >
    )
}
export default Comptres


