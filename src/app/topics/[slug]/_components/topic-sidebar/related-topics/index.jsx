import Link from "next/link";

function RelatedTopics({ topic, topics }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        Related topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics.map(
          (top) =>
            top.id !== topic.id && (
              <Link
                key={top.id}
                href={`/topics/${top.slug}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                {top.title}
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default RelatedTopics;
