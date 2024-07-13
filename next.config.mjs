/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
            },
            {
                protocol: "https",
                hostname: "tuk-cdn.s3.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "dummyimage.com",
            },
            {
                protocol: "https",
                hostname: "randomuser.me",
            },
            {
                protocol: "https",
                hostname: "flowbite.s3.amazonaws.com",
            },
        ],
    },
};
export default nextConfig;
