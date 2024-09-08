import { notFound } from "next/navigation";
import { fetchBlogPostBySlug, BlogPost } from "@/lib/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from "next/image";
import Head from "next/head";
import { ReactNode } from 'react';

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

const renderInlineCode = (text: ReactNode) => {
  return <code className="bg-gray-100 p-1 rounded-md">{text}</code>;
};


const renderCodeBlock = (text: string) => (
  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
    <code>{text}</code>
  </pre>
);

const renderParagraph = (node: any, children: ReactNode) => {
  const isCodeParagraph = node.content.some(
    (child: any) => child.marks?.some((mark: any) => mark.type === 'code')
  );

  if (isCodeParagraph) {
    return renderCodeBlock(children as string);
  }

  return <p>{children}</p>;
};


const options = {
  renderMark: {
    [MARKS.CODE]: renderInlineCode, // Handles inline code
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: renderParagraph, // Handles paragraphs and code blocks
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
