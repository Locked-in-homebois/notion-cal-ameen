import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <main>
            <div className="grid grid-cols-3">
                <div className="items-start">
                    <Link className="" href={"https://www.linux.org/pages/download/"}>
                        <Image className="py-4 px-2"
                            src="/nlogo.png"
                            alt="corner thing"
                            width={70}
                            height={70}
                        />
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link className="" href={"/"}>


                    </Link>
                </div>
                <div className="">
                    c
                </div>

            </div>
        </main>

    );
};
export default Navbar;