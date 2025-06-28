function StaffPicks({ posts }) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Staff Picks</h3>
      <div className="space-y-6">
        {posts?.slice(0, 3).map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-white">
                  {(post.author || "A").charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    {post.author || "Anonymous"}
                  </span>
                  <span className="text-sm text-gray-500">in</span>
                  <span className="text-sm font-medium text-gray-900">
                    Technology
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : "Dec 25"}
                  </span>
                  <span>·</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaffPicks;
