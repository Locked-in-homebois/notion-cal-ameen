import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <main>
            <div className="grid grid-cols-3">
                <div className=" flex items-start font-extrabold">
                    <Link className="" href={"https://www.linux.org/pages/download/"}>
                        <Image className="py-4 px-2"
                            src="/nlogo.png"
                            alt="corner thing"
                            width={70}
                            height={70}
                        />
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-3.5  ">
                    <Link className="hover:bg-zinc-300 hover:rounded-md px-" href={"https://easypersian.com/"}>
                        Notion
                    </Link>
                    <Link className="hover:bg-zinc-300 hover:rounded-md px-2.5" href={"https://easypersian.com/"}>
                        Mail
                    </Link>
                    <Link className="hover:bg-zinc-300 hover:rounded-md px-2.5" href={"https://easypersian.com/"}>
                        Calendar
                    </Link>
                    <Link className="hover:bg-zinc-300 hover:rounded-md px-2.5" href={"https://easypersian.com/"}>
                        AI
                    </Link>
                    <Link className="hover:bg-zinc-300 hover:rounded-md px-2.5" href={"https://easypersian.com/"}>
                        EnterPrise
                    </Link>
                    <Link className="hover:bg-zinc-300 hover:rounded-md px-2.5" href={"https://easypersian.com/"}>
                        Pricing
                    </Link>
                    <Link className="hover:bg-zinc-300 hover:rounded-md px-2.5" href={"https://easypersian.com/"}>
                        Explore
                    </Link>
                    <Link className="  hover:bg-zinc-300 hover:rounded-md px-2.5 whitespace-nowrap  " href={"/"}>
                        Request A Demo
                    </Link>
                </div>
                <div className="flex justify-end px-5 py-5 gap-4">

                </div>
            </div>
        </main >

    );
};
export default Navbar;