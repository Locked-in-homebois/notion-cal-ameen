import Image from "next/image";
const Comp2 = () => {
    return (
        <main className="flex flex-col text-center items-center justify-center">
            <p className="font-bold mt-10 text-5xl ">
                Time management, simplified.
            </p>
            <div className=" flex flex-col justify-start bg-zinc-100 w-[1000px] h-auto mt-24 text-left rounded-md">
                <div className="px-5">
                    <Image
                        src="/calendar-clear-outline.svg"
                        width={50}
                        height={50}
                        className="w-10 h-auto mb-5 mt-5"
                        alt="icon first background"
                    />
                    <h1 className="font-bold text-left text-[16px]">
                        See your schedule at a glance
                    </h1>
                    <p className=" mt-5 text[15px] w-[480px] ">
                        Join meetings directly from the menu bar so you can stay focused on the work that matters.
                    </p>
                </div>
                <Image className="mt-16"
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
