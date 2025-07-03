import Link from "next/link";

function TopicsBar({ topics }) {
  return (
    <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
      <div className="px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center space-x-8 overflow-x-auto">
          <span className="text-sm text-gray-600 whitespace-nowrap">
            Popular topics:
          </span>
          {topics?.slice(0, 6).map((topic) => (
            <Link
              key={topic.id}
              href={`topics/${topic.slug}`}
              className="text-sm text-gray-800 hover:text-black whitespace-nowrap"
            >
              {topic.title}
            </Link>
          ))}
          <a
            href="#"
            className="text-sm text-green-600 hover:text-green-700 whitespace-nowrap"
          >
            See all topics
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopicsBar;
