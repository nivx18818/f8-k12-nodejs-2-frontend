import Link from "next/link";

function RecommendedTopics({ topics }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        Recommended topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics?.slice(0, 8).map((topic) => (
          <Link
            key={topic.id}
            href={`/topics/${topic.slug}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            {topic.title}
          </Link>
        ))}
      </div>
      <a
        href="#"
        className="inline-block mt-3 text-sm text-green-600 hover:text-green-700"
      >
        See more topics
      </a>
    </div>
  );
}

export default RecommendedTopics;
