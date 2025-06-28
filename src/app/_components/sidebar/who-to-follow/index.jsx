function WhoToFollow() {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">
        Who to follow
      </h3>
      <div className="space-y-4">
        {["Sarah Chen", "David Kim", "Alex Rodriguez"].map((author, index) => (
          <div key={author} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 bg-gradient-to-br ${
                  index === 0
                    ? "from-pink-400 to-red-500"
                    : index === 1
                    ? "from-blue-400 to-indigo-500"
                    : "from-yellow-400 to-orange-500"
                } rounded-full flex items-center justify-center`}
              >
                <span className="text-xs font-medium text-white">
                  {author.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {author}
                </div>
                <div className="text-xs text-gray-500">
                  Tech writer & developer
                </div>
              </div>
            </div>
            <button className="px-3 py-1 text-sm text-green-600 border border-green-600 rounded-full hover:bg-green-50">
              Follow
            </button>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="inline-block mt-3 text-sm text-green-600 hover:text-green-700"
      >
        See more suggestions
      </a>
    </div>
  );
}

export default WhoToFollow;
