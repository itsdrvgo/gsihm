import Image from "next/image";
import React from "react";

const Gallery = () => {
    return (
        <>
            <div className="bg-primary text-white h-32 px-6 md:px-32 flex flex-col justify-center">
                <h1 className="text-2xl font-bold">Home / Gallery</h1>
            </div>

            <div className="px-6 md:px-32 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
