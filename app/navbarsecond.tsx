import Link from "next/link";
import { useState } from "react";
const navitems = [
    { lable: "Notion", href: "#" },
    { lable: "Mail", href: "#" },
    { lable: "Calendar", href: "#" }
    { lable: "AI", href: "#" }
    { lable: "EnterPrise", href: "#" }
    { lable: "Pricing", href: "#" }
    { lable: "Explore", href: "#" }
    { lable: "Request A Demo", href: "#" }
    { lable: "Log In", href: "#" }
    { lable: "get notion calendar for free", href: "#" }
];
const Navbarsecond = () => {
    return (
        {
            navitems.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                >
                    {item.label}
                </Link>
            ))
        }
    );
};
export default Navbarsecond;