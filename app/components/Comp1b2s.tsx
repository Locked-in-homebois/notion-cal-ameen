import Image from "next/image";
const Comp1b2s = () => {
    return (
        <main className=" flex flex-col justify-center items-center w-max-[1000px] ">

            <div className=" grid gap-4 bg-zinc-100 w-[1000px] h-auto rounded-2xl mt-10 px-4 py-2 ">
                <Image
                    src="/iconcall.png"
                    width={50}
                    height={50}
                    alt="yappa yappa"
                    className=" " />
                <h1 className="font-bold text-[18px]  ">
                    Manage your time and work, together.</h1>
                <p className="w-[500px] ">
                    See deadlines and project timelines alongside your calendar events
                    so you know where to focus your efforts.</p >
                <Image
                    src="/2&1top.png"
                    width={1000}
                    height={600}
                    alt="yappa yappa"
                    className=" rounded-2xl " />
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-[1000px] mt-8 text-left h-auto rounded-md  " >

                <div className="bg-zinc-100 max-w-[500px] h-auto px-4 py-2 rounded-md grid gap-2  ">
                    <Image
                        src="/2&1lefticon.png"
                        width={50}
                        height={50}
                        alt="yappa yappa"
                        className=" " />
                    <h1 className="font-bold   ">
                        Connect and create Notion docs
                    </h1>
                    <p className="max-w-[400px]  ">
                        With info from Notion right in your calendar, you’ll always
                        have full context for every meeting.
                    </p>
                    <Image
                        src="/2&1lefta.png"
                        width={1000}
                        height={1000}
                        alt="yappa yappa"
                        className="w-[490] h-auto rounded-2xl" />
                </div>



                <div className="bg-zinc-100 px-4 py-2 rounded-md">
                    <Image
                        src="/2&1righticon.png"
                        width={50}
                        height={50}
                        alt="yappa yappa"
                        className=" " />


                    <h1 className="font-bold   ">
                        Connect and create Notion docs
                    </h1>
                    <p className="max-w-[400px]  mt-3">
                        Just drag and drop to edit Notion database items with-
                        out leaving your calendar.
                    </p>
                    <Image
                        src="/2&1right.png"
                        width={1000}
                        height={1000}
                        alt="yappa yappa"
                        className="w-[490] h-[270px] rounded-2xl mt-10" />




                </div>
            </div>
        </main>
    )

}
export default Comp1b2s;
