function AuthorBio({ post }) {
  return (
    <div className="p-6 rounded-lg bg-gray-50">
      <div className="flex items-start space-x-4">
        <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400">
          <span className="text-xl font-medium text-white">
            {(post.author || "A").charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-2 space-x-3">
            <h3 className="text-lg font-semibold text-gray-900">
              {post.author || "Anonymous"}
            </h3>
            <button className="px-4 py-1 text-sm text-white bg-green-600 rounded-full hover:bg-green-700">
              Follow
            </button>
          </div>
          <p className="mb-3 text-gray-600">
            Senior Developer and Tech Writer passionate about sharing knowledge
            and exploring the latest innovations in software development.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>42 Followers</span>
            <span>·</span>
            <a href="#" className="text-green-600 hover:text-green-700">
              View all posts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorBio;
