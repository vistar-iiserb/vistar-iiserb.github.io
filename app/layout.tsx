import type {Metadata} from "next";
import "./globals.css";
import {HeroUIProvider} from "@heroui/system";
import {ThemeProvider} from "@/components/ThemeProvider";
import {ToastProvider} from "@heroui/react";
import {Inter} from 'next/font/google'
import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
    title: "Vistar AI Cell, IISER Bhopal",
};

const inter = Inter({subsets: ['latin']});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" suppressHydrationWarning>
        <body className={'bg-white'}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <HeroUIProvider>
                <ToastProvider placement={"top-center"} toastOffset={60}/>
                <NavbarWrapper />
                {children}
                <Footer/>
            </HeroUIProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
