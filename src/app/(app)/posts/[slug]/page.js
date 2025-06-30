"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import ArticleHeader from "./_components/article-header";
import ArticleBody from "./_components/article-body";
import ArticleFooter from "./_components/article-footer";
import { Slide, ToastContainer } from "react-toastify";
import DeletePostModal from "./_components/delete-post-modal";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeletePost = (status) => {
    setIsDeleting(status);
  };

  useEffect(() => {
    const fetchPostBySlug = async (slug) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${slug}`
        );
        const res = await response.json();
        if (res.success) return res.data;
        throw new Error(res.message ?? "An error occurred");
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    const fetchedPost = fetchPostBySlug(slug);
    setPost(fetchedPost);
  }, [slug]);

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
        <ArticleHeader post={post} handleDeletePost={handleDeletePost} />
        <ArticleBody post={post} />
        <ArticleFooter post={post} />
      </article>

      {isDeleting && <DeletePostModal handleDeletePost={handleDeletePost} />}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={2}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
        className="text-sm select-none"
        icon={({ type }) => {
          if (type === "error") {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            );
          }
          return null;
        }}
      />
    </div>
  );
}

export default PostDetail;
