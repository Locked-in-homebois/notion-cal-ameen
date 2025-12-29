"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
const linkElements = [
	{
		href: "/",
		lable: "Notion",
	},
	{
		href: "/",
		lable: "Notion",
	},
	{
		href: "/",
		lable: "Notion",
	},
	{
		href: "/",
		lable: "Notion",
	},
	{
		href: "/",
		lable: "Notion",
	},
	{
		href: "/",
		lable: "Notion",
	},
	{
		href: "/",
		lable: "Notion",
	},
	{
		href: "/",
		lable: "Notion",
	},
];
const Navbar = () => {
	const linksProps = "hover:bg-red-300 hover:rounded-md px-3 py-2";
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen((prev) => !prev);

	return (
		<main className="">
			<div className="grid grid-cols-3 sticky top-0">
				<div className=" flex items-start font-extrabold px-3  py-2">
					<Link
						className=""
						href={"https://www.linux.org/pages/download/"}
					>
						<Image
							className="py-4 px-2"
							src="/nlogo.png"
							alt="corner thing"
							width={70}
							height={70}
						/>
					</Link>
				</div>
				<div className="hidden md:flex items-center justify-center gap-3.5 max-w-[1000px]">
					{linkElements.map((item, index) => (
						<Link
							className={linksProps}
							key={index}
							href={item.href}
						>
							{item.lable}
						</Link>
					))}
				</div>
				<div className="flex justify-end px-4 items-center gap-5 ">
					<Link
						className="hover:bg-zinc-300 hover:rounded-md px-2.5 py-4 "
						href="/"
					>
						Log In
					</Link>
					<Link
						className="bg-black text-white rounded-md px-2  py-1 hover:bg-red-500 "
						href="/"
					>
						get notion calendar for free
					</Link>
					<div>
						<MenuIcon
							onClick={toggleMenu}
							className={`transition-transform duration-300 ${
								isOpen ? "rotate-90" : "rotate-0"
							}`}
						/>
					</div>
				</div>
			</div>
		</main>
	);
};
export default Navbar;
