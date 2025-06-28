function FilterTabs() {
  return (
    <div className="sticky z-40 bg-white border-b border-gray-200 top-16">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center space-x-8 overflow-x-auto">
          <button className="py-4 text-sm font-medium text-gray-900 border-b-2 border-gray-900 whitespace-nowrap">
            Latest
          </button>
          <button className="py-4 text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
            Top
          </button>
          <button className="py-4 text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
            Featured
          </button>
          <button className="py-4 text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap">
            Writers
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterTabs;
