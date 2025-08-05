"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@heroui/button"
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
} from "@heroui/dropdown"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <Dropdown >
            <DropdownTrigger>
                <Button className=" bg-white dark:bg-black">
                    <Sun className="  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute   rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu >
                <DropdownItem key={"light"} onClick={() => setTheme("light")}>
                    Light
                </DropdownItem>
                <DropdownItem key={"dark"} onClick={() => setTheme("dark")}>
                    Dark
                </DropdownItem>
                <DropdownItem key={"system"} onClick={() => setTheme("system")}>
                    System
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
