/** @type {import('next').NextConfig} */
const withSvgr = require('next-plugin-svgr');

const nextConfig = {

}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.googleusercontent.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "*assets.algoexpert.io",
                port: "",
                pathname: "**",
            },
        ],
    },
    ...withSvgr()
}
