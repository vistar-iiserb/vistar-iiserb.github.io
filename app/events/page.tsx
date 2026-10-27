import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";

type Event = {
    title: string;
    description: string;
    date: string;
    time?: string;
    location?: string;
    registrationUrl?: string;
    timelineUrl?: string;
    moreInfoUrl?: string;
    isCurrent?: boolean;
};

/*
 * Add events here as they are announced. Keeping this list in one place makes
 * the page usable without a CMS while leaving room to connect one later.
 */
const events: Event[] = [
    {
        title: "AI Safety Hackathon",
        description: "Can we trust AI with critical decisions? As AI becomes more capable and autonomous, ensuring that it behaves reliably, follows human intentions, and remains under control becomes increasingly important. Join us to tackle real-world AI safety challenges in red-teaming, reliability, interpretability, and AI control!",
        date: "2026-10-22",
        registrationUrl: "/hackathon",
        timelineUrl: "/timeline.jpeg",
        moreInfoUrl: "https://www.canva.com/design/DAHYow1GDEU/se9zRFqxypVOgjJVmOxwbQ/view",
        isCurrent: true,
    },
];

function EventCard({ event }: { event: Event }) {
    return (
        <article className="group rounded-2xl border border-neutral-800 bg-[#191815] p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-600">
            <div className="mb-6 flex items-start justify-between gap-4">
                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-400">
                    Event
                </span>
                {event.registrationUrl && (
                    <Link
                        href={event.registrationUrl}
                        className="flex items-center gap-1 text-sm text-[#ffffe3] transition group-hover:text-white"
                    >
                        View teams <ArrowUpRight size={16} />
                    </Link>
                )}
            </div>
            <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-[#ffffe3]">
                {event.registrationUrl ? (
                    <Link href={event.registrationUrl} className="hover:underline">
                        {event.title}
                    </Link>
                ) : event.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-400">{event.description}</p>
            {(event.timelineUrl || event.moreInfoUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                    {event.timelineUrl && (
                        <Link
                            href={event.timelineUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-neutral-700 px-4 py-2 text-sm text-neutral-300 transition hover:border-neutral-500 hover:text-[#ffffe3]"
                        >
                            View timeline
                        </Link>
                    )}
                    {event.moreInfoUrl && (
                        <a
                            href={event.moreInfoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl bg-[#ffffe3] px-4 py-2 text-sm text-[#10100e] transition hover:bg-white"
                        >
                            View more info
                        </a>
                    )}
                </div>
            )}
            <div className="mt-6 grid gap-3 text-sm text-neutral-300 sm:grid-cols-3">
                <span className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-neutral-500" /> {event.date}
                </span>
                {event.time && (
                    <span className="flex items-center gap-2">
                        <Clock3 size={16} className="text-neutral-500" /> {event.time}
                    </span>
                )}
                {event.location && (
                    <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-neutral-500" /> {event.location}
                    </span>
                )}
            </div>
        </article>
    );
}

function EventSection({
    title,
    items,
    emptyMessage,
}: {
    title: string;
    items: Event[];
    emptyMessage: string;
}) {
    return (
        <section className="mt-16">
            <div className="mb-6 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-[#ffffe3]">{title}</h2>
                <span className="text-sm text-neutral-500">{items.length} {items.length === 1 ? "event" : "events"}</span>
            </div>
            {items.length > 0 ? (
                <div className="grid gap-5">{items.map((event) => <EventCard key={`${event.title}-${event.date}`} event={event} />)}</div>
            ) : (
                <div className="rounded-2xl border border-dashed border-neutral-800 px-6 py-10 text-center">
                    <CalendarDays className="mx-auto mb-4 text-neutral-600" size={28} />
                    <p className="text-sm text-neutral-400">{emptyMessage}</p>
                </div>
            )}
        </section>
    );
}

export default function EventsPage() {
    const today = new Date().toISOString().slice(0, 10);
    const ongoingEvents = events.filter((event) => event.isCurrent || event.date >= today);
    const pastEvents = events.filter((event) => !event.isCurrent && event.date < today);

    return (
        <main className="min-h-screen bg-[#10100e] px-4 pb-24 pt-16 text-white md:px-8 md:pt-24">
            <div className="mx-auto max-w-5xl">
                <header className="border-b border-neutral-800 pb-12">
                    <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">VISTAR · IISER Bhopal</p>
                    <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.04em] text-[#ffffe3] md:text-7xl">Events</h1>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
                        Workshops, talks, reading groups, and other activities from our AI research cell.
                        Check back here for the latest updates.
                    </p>
                </header>

                <EventSection title="Ongoing events" items={ongoingEvents} emptyMessage="No ongoing events right now." />
                <EventSection title="Past events" items={pastEvents} emptyMessage="Our past events will appear here." />
            </div>
        </main>
    );
}
