import Link from "next/link";

function TopicHeroSection({ topic, posts }) {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div className="mb-4">
            <Link href="/" className="text-sm text-gray-600 hover:text-black">
              ← Back to home
            </Link>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            {topic.title}
          </h1>
          <p className="max-w-2xl mb-8 text-xl text-gray-600">
            Discover stories, thinking, and expertise from writers on{" "}
            {topic.title.toLowerCase()}.
          </p>
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 text-sm text-white bg-green-600 rounded-full hover:bg-green-700">
              Follow
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>1.2M followers</span>
              <span>·</span>
              <span>{posts.length} stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopicHeroSection;
