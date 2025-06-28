function ReadingList({ posts }) {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Reading list</h3>
      <div className="space-y-3">
        {posts?.slice(3, 6).map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <h4 className="text-sm font-medium text-gray-900 group-hover:text-gray-700 line-clamp-2">
              {post.title}
            </h4>
            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
              <span>{post.author || "Anonymous"}</span>
              <span>·</span>
              <span>
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  : "Dec 25"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="inline-block mt-3 text-sm text-green-600 hover:text-green-700"
      >
        See all (12)
      </a>
    </div>
  );
}

export default ReadingList;
