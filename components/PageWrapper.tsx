"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Router } from "next/router";

export const PageWrapper = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={classNames("min-h-screenHeightWithoutHeader", className)}
        >
            {children}
        </motion.div>
    </>
);