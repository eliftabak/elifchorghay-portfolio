import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Web Dev Insights by Elif Chorghay | Frontend, JavaScript, and React",
	description:
		"Discover articles on web development, JavaScript, React, and more.",
};

export default function Home() {
	return (
		<section className="contain mb-32 md:mb-24 md:mt-20">
			<div className="inline-block bg-green-100 rounded px-4 py-2 mb-8 shadow-inner">
					<div className="flex items-center">
						<div className="h-2 w-2 bg-green-500 rounded-full mr-4" />
						<span className="text-sm md:text-base text-green-500">
							Open to new opportunities.
						</span>
					</div>
				</div>
			<h1 className="text-3xl md:text-5xl">
				Elif Chorghay &mdash; Web Developer based in Karlsruhe, Germany.
			</h1>
			<p className="text-mdgray my-8 md:text-lg max-w-2xl">
				Experienced Web Developer Specializing in Fintech and E-commerce
				Solutions &mdash; Creating Intuitive, High-Performance Web Applications.
			</p>
			<div className="text-mdgray my-6 flex items-baseline">
				<Link
					className="mr-4"
					href="https://github.com/eliftabak"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={"images/socials/github-mark.svg"}
						width={30}
						height={30}
						alt="github-logo"
					/>
				</Link>
				<Link
					href="https://www.linkedin.com/in/elifchorghay/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={"images/socials/linkedin.svg"}
						width={33}
						height={33}
						alt="linkedin-logo"
					/>
				</Link>
			</div>
			<div>
				<Link className="link md:text-lg" href="/about">
					Learn more about me <span className="arrow">&rarr;</span>
				</Link>
			</div>
		</section>
	);
}
