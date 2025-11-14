import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ page, setPage, next, prev }) {
  // Generate array of page numbers (up to 5 centered around current page)
  const getPageNumbers = () => {
    const pages = [];
    let start = Math.max(page - 2, 1);
    let end = start + 4;

    if (!next) end = page;
    if (end < 5) start = 1;
    if (end - start < 4) end = start + 4;

    for (let i = start; i <= end; i++) {
      if (i > page && !next) break;
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center gap-2 p-4">
      {/* Previous button */}
      <button
        className="
          bg-gray-700/40 px-3 py-2 rounded-full disabled:opacity-50 
          flex items-center justify-center 
          cursor-pointer transition-transform duration-200 
          hover:-translate-x-1
        "
        disabled={!prev}
        onClick={() => setPage(page - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* Page numbers */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`
            px-3 py-2 rounded-full cursor-pointer transition-transform duration-200
            hover:-translate-y-1
            ${num === page
              ? "bg-blue-700/40 text-white"
              : "bg-gray-800 text-gray-200"
            }
          `}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}

      {/* Next button */}
      <button
        className="
          bg-gray-700/40 px-3 py-2 rounded-full disabled:opacity-50 
          flex items-center justify-center 
          cursor-pointer transition-transform duration-200 
          hover:translate-x-1
        "
        disabled={!next}
        onClick={() => setPage(page + 1)}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

export default Pagination;
