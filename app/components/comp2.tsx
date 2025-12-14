import Image from "next/image";
const Comp2 = () => {
    return (
        <main>
            <p className="font-bold text-center rounded-b-4xl mt-10 text-5xl ">
                Time management, simplified.
            </p>
            <div className="bg-zinc-100 w-[1000px] h-200 mt-24 rounded-2xl text-left">
                <Image
                    src="/calendar-clear-outline.svg"
                    width={50}
                    height={50}
                    className="w-10 h-auto rounded-2xl mb-5 mt-5 ml-5"
                    alt="icon first background" />
                <p className="font-bold text-left ml-5 text-[16px]">
                    See your schedule at a glance
                </p>
                <p className="ml-5 mt-5 text[15px] ">
                    Join meetings directly from the menu bar so you can stay focused
                </p>
                <p className="ml-5  text[15px] ">
                    on the work that matters.
                </p>
                <Image className=" w-[1000px] h-auto rounded-2xl mt-12"
                    src="/2ndcomp.png"
                    width={1000}
                    height={1000}
                    alt="2nd comp2 image"

                />
            </div>


        </main>
    )
}
export default Comp2;
