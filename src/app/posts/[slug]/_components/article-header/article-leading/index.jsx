function ArticleLeading({ post }) {
  return (
    <>
      <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
        {post.title}
      </h1>

      <div className="flex items-center mb-8 space-x-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
          <span className="text-lg font-medium text-white">
            {(post.author || "A").charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-1 space-x-2">
            <span className="font-medium text-gray-900">
              {post.author || "Anonymous"}
            </span>
            <button className="text-sm text-green-600 hover:text-green-700">
              Follow
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "December 25, 2023"}
            </span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleLeading;
