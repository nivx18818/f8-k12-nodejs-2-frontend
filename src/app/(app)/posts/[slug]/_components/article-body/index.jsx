function ArticleBody({ post }) {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Featured Image */}
      <div className="mb-12">
        <div className="w-full rounded-lg h-96 bg-gradient-to-br from-blue-400 to-purple-500"></div>
      </div>

      {/* Article Content */}
      <div className="space-y-6 leading-relaxed text-gray-900">
        <p className="text-xl font-light leading-relaxed text-gray-700">
          {post.excerpt ||
            "In the rapidly evolving world of technology, staying ahead of the curve requires continuous learning and adaptation. This comprehensive guide explores the latest trends and best practices that are shaping the future of development."}
        </p>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default ArticleBody;
