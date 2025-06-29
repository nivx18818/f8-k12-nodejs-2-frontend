import Link from "next/link";

function PostFormHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-black">
              Medium
            </Link>
            <div className="items-center hidden space-x-2 text-sm text-gray-600 md:flex">
              <span>Draft in</span>
              <span className="font-medium">Anonymous</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-sm text-green-600 hover:text-green-700"
            >
              Save draft
            </button>
            <button
              type="submit"
              form="post-form"
              className="px-6 py-2 text-sm text-white bg-green-600 rounded-full hover:bg-green-700"
            >
              Publish
            </button>
            <button className="p-2 text-gray-600 hover:text-black">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PostFormHeader;
