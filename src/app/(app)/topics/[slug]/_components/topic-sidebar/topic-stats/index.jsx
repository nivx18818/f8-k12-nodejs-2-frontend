function TopicStats({ topic, posts }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        About {topic.title}
      </h3>
      <div className="p-4 rounded-lg bg-gray-50">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Stories</span>
            <span className="font-medium text-gray-900">{posts.length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Followers</span>
            <span className="font-medium text-gray-900">1.2M</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Writers</span>
            <span className="font-medium text-gray-900">15.3K</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicStats;
