"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const ContactPage = () => {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Contact Us
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    We&apos;re here to help with any questions about our courses,
                    admissions, or programs. Reach out and start your musical journey today.
                </p>
                <div className="relative z-10 mt-12 bg-neutral-950/50 backdrop-blur-xl p-8 rounded-2xl border border-neutral-800 shadow-2xl">
                    <form className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4 text-neutral-300 focus:outline-hidden"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Your message"
                                rows={5}
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4 text-neutral-300 focus:outline-hidden"
                            />
                        </div>
                        <button className="w-full px-6 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
};

export default ContactPage;
