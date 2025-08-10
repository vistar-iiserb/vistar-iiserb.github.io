"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
    const pathname = usePathname();
    if (pathname === "/") return null;
    return<div className={'w-[80%] mx-auto '}>
    <Navbar />;
    </div>
}
