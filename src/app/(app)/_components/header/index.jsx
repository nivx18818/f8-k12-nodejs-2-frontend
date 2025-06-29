import Link from "next/link";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-black">Medium</h1>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Our story
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Membership
              </a>
              <Link href="/posts/create" className="text-sm text-gray-600 hover:text-black">
                Write
              </Link>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Sign in
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800">
              Get started
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
