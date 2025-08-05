// components/CopyLinkButton.tsx
'use client';

import { useState } from 'react';
import { Clipboard, ClipboardPaste, Share2 } from 'lucide-react';
import { cn, toast } from '@heroui/theme';
import { addToast, ToastProvider } from '@heroui/react';

export default function ShareButton({ url }: { url: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            addToast({
                title: "Link Copied!",
                icon: <Clipboard className="w-6 h-6" />,
                variant: "bordered",
                color:"success",
                classNames: {base:  cn(["bg-emerald-950 border border-emerald-700 text-white p-4 max-w-sm rounded-lg mx-auto shadow-lg text-emerald-500"]), icon: "w-6 h-6 mr-3 ",},
            });
            setTimeout(() => setCopied(false), 2000);

        } catch (err) {
            console.error('Copy failed:', err);
        }
    };

    return (
        <button key={"something"}  onClick={handleCopy} className="flex items-center gap-2 text-sm">
            <Share2 className="w-4 h-4 md:w-6 md:h-6" />
        </button>
    );
}
