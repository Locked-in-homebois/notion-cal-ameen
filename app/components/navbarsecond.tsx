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
    { lable: "get notion calendar for free", href: "#" },
    { lable: "tester one", href: "/" }
];
const Navbarsecond = () => {
    return (
        <div className="flex justify-between max-w-[1440px] px-3 py-2 items-center">

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

    );
};
export default Navbarsecond;