import Image from "next/image";
import Link from "next/link";
import React from "react";

const courses = [
    {
        id: 1,
        title: "Before they sold out readymade gluten",
        description1:
            "From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.",
        description2:
            "We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.",
        author: "ROSHAN",
        organization: "GSIHM",
        imageUrl: "https://dummyimage.com/720x600",
        profileImage:
            "https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png",
    },
    {
        id: 2,
        title: "Before they sold out readymade gluten",
        description1:
            "From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.",
        description2:
            "We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.",
        author: "ROSHAN",
        organization: "GSIHM",
        imageUrl: "https://dummyimage.com/720x600",
        profileImage:
            "https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png",
    },
    {
        id: 3,
        title: "Before they sold out readymade gluten",
        description1:
            "From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.",
        description2:
            "We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.",
        author: "ROSHAN",
        organization: "GSIHM",
        imageUrl: "https://dummyimage.com/720x600",
        profileImage:
            "https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png",
    },
];

const Courses = () => {
    return (
        <>
            <div className="bg-primary text-white h-32 px-6 md:px-32 flex flex-col justify-center">
                <h1 className="text-2xl font-bold">Home / Courses</h1>
            </div>

            {courses.map((course) => (
                <section key={course.id} className="p-5 bg-gray-900">
                    <Link href="coursedet">
                        <div className="mx-auto flex flex-col md:flex-row items-center jobcard">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center">
                                <figure>
                                    <div className="pt-10 px-2 sm:px-6">
                                        <span className="inline-block py-1 px-2 rounded-full bg-green-600 text-xs font-bold tracking-widest mb-2">
                                            Featured Courses
                                        </span>
                                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                                            {course.title}
                                        </h1>
                                        <p className="text-indigo-200 text-base pb-6">
                                            {course.description1}
                                        </p>
                                        <p className="text-indigo-200 text-base pb-8">
                                            {course.description2}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center pb-12">
                                                <div className="h-12 w-12">
                                                    <Image
                                                        src={
                                                            course.profileImage
                                                        }
                                                        className="h-full w-full object-cover overflow-hidden rounded-full"
                                                        alt=""
                                                        width={200}
                                                        height={200}
                                                    />
                                                </div>
                                                <p className="text-indigo-200 font-bold ml-3">
                                                    {course.author} <br />
                                                    <span className="text-indigo-200 text-base font-light">
                                                        {course.organization}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:block hidden">
                                <Image
                                    className="object-cover object-center rounded"
                                    alt="hero"
                                    src={course.imageUrl}
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                    </Link>
                </section>
            ))}
        </>
    );
};

export default Courses;
