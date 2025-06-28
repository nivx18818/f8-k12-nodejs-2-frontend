function PostList({ posts }) {
  return (
    <div className="space-y-8">
      {posts?.map((post, index) => (
        <article key={post.id} className="group cursor-pointer">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {(post.author || "A").charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-gray-900">
                  {post.author || "Anonymous"}
                </span>
                <span className="text-sm text-gray-500">·</span>
                <span className="text-sm text-gray-500">
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    : "recently"}
                </span>
              </div>
              <div
                className={`grid ${
                  index % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-1"
                } gap-6`}
              >
                <div className={index % 3 === 0 ? "lg:col-span-2" : ""}>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt ||
                      "Exploring the latest trends in technology and development, from AI breakthroughs to innovative coding practices that are shaping the future."}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                        Technology
                      </span>
                      <span className="text-sm text-gray-500">5 min read</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                          />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {index % 3 === 0 && (
                  <div className="flex-shrink-0">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PostList;
