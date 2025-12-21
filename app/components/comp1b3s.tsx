import Image from "next/image";
const Comp1b3s = () => {
    return (
        <main className="flex flex-col items-center justify-center ">
            <div className="max-w-[1000px]">

                <h1 className=" font-bold  place-self-center mt-10 text-4xl">
                    Work and life, playing nice. </h1>

                <div className="bg-zinc-100  rounded-2xl mt-10 px-2 py-4 grid gap-4 ">
                    <Image
                        src="/iconcall.png"
                        width={50}
                        height={50}
                        alt="yappa yappa"
                    />
                    <h1 className=" font-bold ">
                        See all your commitments in the same place </h1>

                    <p>
                        No more accidental conflicts between work and personal events.
                    </p>
                    <Image
                        src="/toptop.png"
                        width={1000}
                        height={1000}
                        alt="yappa yappa"
                        className="w-[1000px] h-fit rounded-2xl mt-10" />

                </div>



                <div className=" grid grid-cols-3 mt-8 rounded-3xl text-left gap-10    ">

                    <div className="bg-zinc-100 rounded-2xl px-3 py-2  ">
                        <Image
                            src="/iconcall.png"
                            width={1110}
                            height={1110}
                            alt="yappa yappa"
                            className=" w-[50px] h-auto" />
                        <h1 className="  font-bold">
                            Connect multiple calendars
                        </h1>
                        <p className="">
                            Easily sync work and personal calendars.
                        </p>

                    </div>

                    <div className="bg-zinc-100 rounded-2xl h-40 px-3 py-2 ">
                        <Image
                            src="/iconcall.png"
                            width={1110}
                            height={1110}
                            alt="yappa yappa"
                            className=" w-[50px] h-auto" />

                        <h1 className="  font-bold">
                            No more double bookings
                        </h1>
                        <p className="">
                            Auto-block busy slots across all your calendars.
                        </p>
                    </div >
                    <div className="bg-zinc-100  rounded-2xl h-40 px-3 py-2 ">
                        <Image
                            src="/iconcall.png"
                            width={1110}
                            height={1110}
                            alt="yappa yappa"
                            className=" w-[50px] h-auto" />
                        <h1 className="  font-bold">
                            Easy-to-use mobile app
                        </h1>
                        <p className="">
                            View your schedule at a glance
                            and add events quickly with iOS
                            and Android widgets.
                        </p>
                    </div>
                </div>
            </div>






        </main>
    );
};
export default Comp1b3s;