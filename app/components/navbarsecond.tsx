import Image from "next/image";
import Link from "next/link";
const navitems = [
    { lable: "Notion", href: "https://www.youtube.com/" },
    { lable: "Mail", href: "#" },
    { lable: "Calendar", href: "#" },
    { lable: "AI", href: "#" },
    { lable: "EnterPrise", href: "#" },
    { lable: "Pricing", href: "#" },
    { lable: "Explore", href: "/" },
    { lable: "Request A Demo", href: "#" },
];
const navitemsright = [
    { lable: "Log In", href: "#", className: "hover:bg-gray-500 px-2 py-2 items-center " },
    { lable: "get notion calendar for free", href: "#", sixseven: "px-2 bg-black text-white py-2 rounded-md items-center hover:bg-red-600" },
];
const navitemsleft = {
    image: { src: "/nlogo.png", alt: "logo" }
}
const Navbarsecond = () => {
    return (
        <nav className="px-4 py-2 sticky top-0 justify-between backdrop-blur-3xl  max-h-14 items-center w-full ">
            <div className="grid md:grid-cols-3">
                <div className="flex md:justify-self-start px-1 py-2">
                    <Link href="/">
                        <Image className=""
                            src={navitemsleft.image.src}
                            width={50}
                            height={50}
                            alt={navitemsleft.image.alt}
                        >
                        </Image>
                    </Link>
                </div>
                <div className="md:flex gap-5 overflow-hidden w-[1000px] items-center">
                    {navitems.map((items, index) => (
                        <Link
                            className="hover:bg-gray-500 rounded-md px-1 py-1"
                            key={index}
                            href={items.href}
                        >
                            {items.lable}
                        </Link>
                    ))}
                </div>
                <div className="justify-self-end py-2 flex gap-6 items-center ">
                    {navitemsright.map((items, index,) => (

                        <Link
                            className={items.sixseven}
                            key={index}
                            href={items.href}>
                            {items.lable}
                        </Link>
                    ))}
                </div>
            </div>
        </nav >
    );
};
export default Navbarsecond;