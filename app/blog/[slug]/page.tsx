import { notFound } from "next/navigation";
import { fetchBlogPostBySlug, BlogPost } from "@/lib/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from "next/image";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const post: BlogPost | null = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  console.log('post', post);

  return (
    <div className="contain mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">{post.title}</h1>
      <p className="text-gray-600 mb-4">
        {new Date(post.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>
      {post?.media?.contentType.startsWith("image/") && (
            <img
              src={post.media.url}
              alt={post.media.title}
              className="w-full h-auto"
            />
          )}
      <div className="text-mdgray">
        <p className="break-words">{post.description}</p>
        <div>
        {post.content?.json
          ? documentToReactComponents(post.content.json)
          : <p>No content available.</p>}
        </div>
      </div>
    </div>
  );
}
