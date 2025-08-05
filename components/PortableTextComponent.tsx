import { PortableTextComponents } from "@portabletext/react";
import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import py from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import html from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import { urlFor } from "@/sanity/lib/image"; // ⬅️ adjust the import path if needed
// Add this import at the top
import LatexBlock from "@/components/LatexBlock"; // adjust path if necessary

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("python", py);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("xml", html);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("bash", bash);

export const portableTextComponents: PortableTextComponents = {
    block: {
        h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-semibold my-4">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-semibold my-3">{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-semibold my-2">{children}</h4>,
        normal: ({ children }) => <p className="text-base leading-7 mb-4">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4">
                {children}
            </blockquote>
        ),
    },
    types: {
        myCodeField: ({ value }: any) => (
            <div className="my-6 code">
                <SyntaxHighlighter
                    language={value.language}
                    style={atomOneDark}
                    customStyle={{
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        fontFamily: "JetBrains Mono",
                    }}
                >
                    {value.code}
                </SyntaxHighlighter>
            </div>
        ),
        image: ({ value }) => {
            const imageUrl = urlFor(value.asset).width(800).url();
            const alt = value.alt || 'Sanity Image';
            const caption = value.caption;

            return (
                <div className="my-6">
                    <img
                        src={imageUrl}
                        alt={value.alt || 'Sanity Image'}
                        className="rounded-lg shadow-md max-w-full h-auto mx-auto"
                    />
                    {caption && (
                        <p className="mt-3 mx-auto text-sm text-gray-500 dark:text-gray-400 italic">
                            {caption}
                        </p>
                    )}
                </div>
            );
        },
        Latex: LatexBlock, // ✅ This is what renders your LaTeX!
    },
};
