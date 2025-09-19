import { useState } from "react";
import companies from "../data/companies.json";
import { ChevronDown, ChevronRight } from "lucide-react";

const CompaniesList = ({ onSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const totalPages = Math.ceil(companies.length / pageSize);
  const paginated = companies.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="w-full max-w-md bg-white rounded shadow-sm border border-gray-200 p-4">
      {/* Header */}
      <div className="text-md font-semibold text-gray-800 mb-2">
        Companies <span className="text-blue-600 text-sm">({companies.length})</span>
      </div>

      {/* Sort Bar */}
      <div className="flex justify-between items-center text-sm text-gray-600 border-b border-gray-200 pb-2 mb-2">
        <div className="flex items-center gap-1">
          Name <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Company List */}
      <ul className="divide-y divide-gray-200">
        {paginated.map((company) => (
          <li
            key={company.id}
            onClick={() => onSelect(company)}
            className="py-3 px-1 flex justify-between items-start hover:bg-gray-50 cursor-pointer"
          >
            {/* Left content: name + structure */}
            <div>
              <div className="font-medium text-sm text-gray-800">{company.name}</div>
              <div className="text-xs text-gray-500">{company.structure}</div>
            </div>

            {/* Right content: Domicile + arrow */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                {company.domicile}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Section */}
      <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center text-sm">
        {/* Static grey buttons side-by-side */}
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 rounded border border-gray-300 text-gray-600"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1 rounded border border-gray-300  text-gray-600"
          >
            Next
          </button>
        </div>

        {/* Pagination Info */}
        <span className=" text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default CompaniesList;
