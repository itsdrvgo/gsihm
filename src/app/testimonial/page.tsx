import Image from "next/image";
import React from "react";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Daniella Doe",
            avatar: "https://randomuser.me/api/portraits/women/12.jpg",
            role: "Mobile dev",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        },
        {
            name: "Jane Doe",
            avatar: "https://randomuser.me/api/portraits/women/14.jpg",
            role: "Marketing",
            content:
                "Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        },
        {
            name: "Yanick Doe",
            avatar: "https://randomuser.me/api/portraits/women/18.jpg",
            role: "Developer",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        },
        {
            name: "Jane Doe",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            role: "Mobile dev",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        },
        {
            name: "Andy Doe",
            avatar: "https://randomuser.me/api/portraits/women/62.jpg",
            role: "Manager",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        },
        {
            name: "Yanndy Doe",
            avatar: "https://randomuser.me/api/portraits/women/19.jpg",
            role: "Mobile dev",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        },
    ];

    return (
        <div
            className="text-gray-600 dark:text-gray-300 py-10 dark:bg-gray-900"
            id="reviews"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-10 bg-primary space-y-4 py-10 rounded-md px-6 md:px-0">
                    <h2 className="text-4xl px-5 font-bold  text-white">
                        Wall of love
                    </h2>
                </div>

                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
                        >
                            <div className="flex gap-4">
                                <Image
                                    className="w-12 h-12 rounded-full"
                                    src={testimonial.avatar}
                                    alt="user avatar"
                                    loading="lazy"
                                    width={300}
                                    height={300}
                                />
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                                        {testimonial.name}
                                    </h6>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-8">{testimonial.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
