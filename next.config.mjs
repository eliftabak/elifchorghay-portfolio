/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
			},
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				port: '',
				pathname: '/**',
			  },
		],
	},
};

export default nextConfig;
