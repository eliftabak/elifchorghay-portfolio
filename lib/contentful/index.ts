export interface BlogPost {
	sys: {
		id: string;
	};
	title: string;
	description: string;
	slug: string;
	thumbnail: {
		url: string;
		title: string;
	};
	media?: {
		url: string;
		title: string;
		description?: string;
		contentType: string;
	};
	date: string;
	content: any;
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
	const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
	const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

	const query = `
    {
      blogsCollection(order: date_DESC) {
        items {
          sys {
            id
          }
          title
          slug
          thumbnail {
            url
            title
          }
          media {
            url
            title
            description
            contentType
          }
          content {
            json
          }
          description
          date
        }
      }
    }
  `;

	const response = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ query }),
		}
	);

	if (!response.ok) {
		const errorDetails = await response.json();
		console.error("Error details:", errorDetails);
		throw new Error("Failed to fetch data from Contentful");
	}

	const { data } = await response.json();
	console.log("data", data?.blogsCollection.items);

	return data?.blogsCollection.items || [];
};

export const fetchBlogPostBySlug = async (
	slug: string
): Promise<BlogPost | null> => {
	const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
	const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

	const query = `
    query GetArticleBySlug($slug: String!) {
      blogsCollection(where: { slug: $slug }, limit: 1) {
        items {
          sys {
            id
          }
          title
          slug
          thumbnail {
            url
            title
          }
          description
          date
          content {
            json
          }
          media {
            url
            title
            description
            contentType
          }
        }
      }
    }
  `;

	const response = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ query, variables: { slug } }),
		}
	);

	if (!response.ok) {
		const errorDetails = await response.json();
		console.error("Error details:", errorDetails);
		throw new Error("Failed to fetch data from Contentful");
	}

	const { data } = await response.json();
	return data?.blogsCollection.items?.[0] || null;
};
