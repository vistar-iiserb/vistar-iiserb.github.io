import HackathonBoard from "@/components/HackathonBoard";

export default function HackathonPage() {
    return (
        <main className="min-h-screen bg-[#10100e] px-4 pb-24 pt-16 text-white md:px-8 md:pt-24">
            <div className="mx-auto max-w-5xl">
                <header className="border-b border-[#30302b] pb-12">
                    <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">VISTAR · IISER Bhopal</p>
                    <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.04em] text-[#ffffe3] md:text-7xl">AI Safety Hackathon- Teams</h1>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
                        Explore the teams building across this hackathon.
                    </p>
                </header>
                <div className="mt-12">
                    <HackathonBoard />
                </div>
            </div>
        </main>
    );
}
