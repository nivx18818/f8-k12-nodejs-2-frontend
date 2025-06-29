import Link from "next/link";
import ArticleHeader from "./_components/article-header";
import ArticleBody from "./_components/article-body";
import ArticleFooter from "./_components/article-footer";

const fetchPostBySlug = async (slug) => {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/posts/${slug}`);
    const res = await response.json();
    if (res.success) return res.data;
    throw new Error(res.message ?? "An error occurred");
  } catch (error) {
    console.error(error);
    return null;
  }
};

async function PostDetail({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            Post not found
          </h1>
          <p className="text-gray-600">
            The post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block mt-4 text-green-600 hover:text-green-700"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl px-6 py-12 mx-auto">
        <ArticleHeader post={post} />
        <ArticleBody post={post} />
        <ArticleFooter post={post} />
      </article>
    </div>
  );
}

export default PostDetail;
