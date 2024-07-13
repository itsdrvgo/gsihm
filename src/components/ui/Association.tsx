"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-card";
import { Button } from "./button";
import { FaPhone } from "react-icons/fa";

export function Assosciations() {
    return (
        <>
            <div className="rounded-md flex flex-col text-black  items-center justify-center relative overflow-hidden">
                <h1 className="text-2xl text-primary font-bold my-3 text-center">
                    Our Airline Associations
                </h1>
                <InfiniteMovingCards
                    items={items}
                    direction="left"
                    speed="normal"
                    pauseOnHover={false}
                    className="custom-class"
                />
            </div>

            <div className="rounded-md flex flex-col text-black antialiased items-center justify-center relative overflow-hidden">
                <h1 className="text-2xl text-primary font-bold my-3 text-center">
                    Our Hotel line Associations
                </h1>
                <InfiniteMovingCards
                    items={items}
                    direction="right"
                    speed="normal"
                    pauseOnHover={false}
                    className="custom-class"
                />
            </div>

            <div className="rounded-md flex flex-col text-black antialiased items-center justify-center relative overflow-hidden">
                <h1 className="text-2xl text-primary font-bold my-3 text-center">
                    Our Cruise line Associations
                </h1>
                <InfiniteMovingCards
                    items={items}
                    direction="left"
                    speed="normal"
                    pauseOnHover={false}
                    className="custom-class"
                />
            </div>
            <div className="flex flex-col items-center justify-center md:my-4 my-6 ">
                <Button size={"lg"} className="space-x-3">
                    <span>Contact us</span>
                    <FaPhone size={20} />
                </Button>
            </div>
        </>
    );
}

const items = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    },
];
