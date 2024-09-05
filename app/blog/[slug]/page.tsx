import { notFound } from "next/navigation";
import { fetchBlogPostBySlug, BlogPost } from "@/lib/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from "next/image";
import Head from "next/head";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

const options = {
  renderMark: {
    [MARKS.CODE]: (text : string) => {
      return <pre><code className="bg-gray-100 p-1 rounded-md">{text}</code></pre>;
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return <p>{children}</p>;
    },
  },
};

export async function generateMetadata({ params }: BlogDetailProps) {
  const post: BlogPost | null = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Blog - Elif Chorghay`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post?.media?.url
        ? [
            {
              url: post.media.url,
              width: 1200,
              height: 630,
              alt: post.media.title,
            },
          ]
        : [],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const post: BlogPost | null = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Head>
        <title>{post.title} - Elif Chorghay</title>
        <meta name="description" content={post.description} />  
      </Head>
      <div className="contain mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">{post.title}</h1>
        <p className="text-gray-600 mb-4">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        {post?.media?.url && post?.media?.contentType?.startsWith("image/") && (
              <Image
                src={post.media.url}
                alt={post.media.title}
                width={400}
                height={200}
              />
            )}
        <div className="text-mdgray">
          <div className="rich-text">
          {post.content?.json
            ? documentToReactComponents(post.content.json, options)
            : <p>No content available.</p>}
          </div>
        </div>
      </div>
    </>
  );
}
