import { Search } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="flex items-start justify-between mb-4 flex-wrap">
      {/* Left: Title + Filters */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-gray-800">Companies</h2>
        <p className="text-sm text-gray-500">Manage your legal entities here.</p>

        {/* Filters */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {/* Search Box */}
          <div className="relative w-[370px]"> {/* You can change w-72 to w-80 or w-[300px] if needed */}
  <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
  <input
    type="text"
    placeholder="Company Name"
    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


          {/* Domicile Filter */}
          <select 
          defaultValue=""
          className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled>Filter by Domicile</option>
            <option>USA</option>
            <option>India</option>
            <option>UK</option>
          </select>

          {/* Business Structure Filter */}
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filter by Business Structure</option>
            <option>LLC</option>
            <option>Private Ltd</option>
            <option>Partnership</option>
          </select>

          {/* Filter Button */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm text-gray-400 hover:bg-blue-700">
            Filter
          </button>

          {/* Clear Filter Button */}
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded-md text-sm hover:bg-gray-100">
            Clear Filter
          </button>
        </div>
      </div>

      {/* Right: Add New Company */}
      <div className="mt-1">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm flex items-center gap-1 hover:bg-blue-700">
          <span className="text-lg">+</span> Add new company
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
