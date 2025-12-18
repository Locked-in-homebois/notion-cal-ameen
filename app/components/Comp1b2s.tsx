import Image from "next/image";
const Comp1b2s = () => {
    return (
        <main className="text-left">

            <div className="bg-zinc-100 w-[1000px] h-[763px] rounded-2xl mt-10 ">
                <Image
                    src="/iconcall.png"
                    width={1110}
                    height={1110}
                    alt="yappa yappa"
                    className="ml-5 w-[50px] h-auto" />
                <h1 className="font-bold text-[22px] ml-5 ">
                    Manage your time and work, together.</h1>
                <p className="w-[500px]">
                    See deadlines and project timelines alongside your calendar events
                    so you know where to focus your efforts.</p >
                <Image
                    src="/2&1top.png"
                    width={1000}
                    height={1000}
                    alt="yappa yappa"
                    className="w-[1000px] h-[600px] rounded-2xl mt-10" />
            </div>
            <div className="grid w-[1000px] mt-8 rounded-3xl text-left gap-4 grid-cols-2 h-auto " >

                <div className="bg-zinc-100 w-[500px] h-[450px] ">
                    <Image
                        src="/2&1lefticon.png"
                        width={1110}
                        height={1110}
                        alt="yappa yappa"
                        className="ml-5 w-[45px] h-auto mt-5" />
                    <h1 className="font-bold text-[22px] ml-5 ">
                        Connect and create Notion docs
                    </h1>
                    <p className="w-[400px] ml-5 mt-3">
                        With info from Notion right in your calendar, you’ll always
                        have full context for every meeting.
                    </p>
                    <Image
                        src="/2&1lefta.png"
                        width={1000}
                        height={1000}
                        alt="yappa yappa"
                        className="w-[490] h-[230px] rounded-2xl mt-10" />
                </div>



                <div className="bg-zinc-100">
                    <Image
                        src="/2&1righticon.png"
                        width={1110}
                        height={1110}
                        alt="yappa yappa"
                        className="ml-5 w-[45px] h-auto mt-5" />


                    <h1 className="font-bold text-[17px] ml-5 ">
                        Connect and create Notion docs
                    </h1>
                    <p className="w-[400px] ml-5 mt-3">
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