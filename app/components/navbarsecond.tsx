import Image from "next/image";
import Link from "next/link";
const navitems = [
    { lable: "Notion", href: "https://www.youtube.com/" },
    { lable: "Mail", href: "#" },
    { lable: "Calendar", href: "#" },
    { lable: "AI", href: "#" },
    { lable: "EnterPrise", href: "#" },
    { lable: "Pricing", href: "#" },
    { lable: "Request A Demo", href: "#" },
    { lable: "Log In", href: "#" },

];
const navitemsright = [

    { lable: "get notion calendar for free", href: "#" },
    { lable: "tester one", href: "/" }
]
const navitemsleft = {
    image: { src: "/nlogo.png", alt: "logo" }
}




const Navbarsecond = () => {
    return (
        <nav className="px-4 py-2 sticky top-0 ">
            <div className="grid grid-cols-3">
                <div className="items">
                    <Image className=""
                        src={navitemsleft.image}
                        width={ }
                        height={ }
                        alt=""
                    >

                    </Image>

                </div>
                {navitems.map((items, index) => (

                    <div>
                        <Link
                            className="hover:bg-gray-500 rounded-md px-1 py-1"
                            key={index}
                            href={items.href}

                        >
                            {items.lable}
                        </Link>
                    </div>
                ))}
            </div>
        </nav >

    );
};
export default Navbarsecond;