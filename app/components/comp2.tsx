import Image from "next/image";
const Comp2 = () => {
    return (
        <main className="flex flex-col text-center items-center justify-center">
            <p className="font-bold mt-10 text-5xl ">
                Time management, simplified.
            </p>
            <div className=" text-left bg-zinc-100 max-w-[1000px] h-auto mt-24 rounded-md  ">
                <div className=" md:px-2 px-6 py-2 grid gap-1">
                    <Image
                        src="/calendar-clear-outline.svg"
                        width={50}
                        height={50}
                        className=""
                        alt="icon first background"
                    />
                    <h1 className="font-bold text-left ">
                        See your schedule at a glance
                    </h1>
                    <p className="max-w-[480px] ">
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
