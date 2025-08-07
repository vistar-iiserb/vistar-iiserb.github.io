// utils/cn.ts or lib/utils.ts (depending on your structure)

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine Tailwind class names with proper merging of conflicting classes.
 *
 * @param inputs - any number of class name values
 * @returns merged class name string
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
