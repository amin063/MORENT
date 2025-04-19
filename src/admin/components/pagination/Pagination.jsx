import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const generatePages = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 4) {
                pages.push(1, 2, 3, 4, 5, "...", totalPages);
            } else if (currentPage >= totalPages - 3) {
                pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pages;
    };

    const handleClick = (page) => {
        if (page === "...") return;
        setCurrentPage(page);
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="flex justify-center items-center flex-wrap gap-2 my-8">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
                ← Prev
            </button>

            {generatePages().map((page, index) =>
                page === "..." ? (
                    <span
                        key={index}
                        className="px-3 py-2 text-gray-400 text-sm select-none"
                    >
                        ...
                    </span>
                ) : (
                    <button
                        key={index}
                        onClick={() => handleClick(page)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200
                            ${page === currentPage
                                ? "bg-blue-600 text-white shadow-lg scale-105"
                                : "bg-white text-gray-700 hover:bg-blue-50 border-gray-300"}
                        `}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
                Next →
            </button>
        </div>
    );
};

export default Pagination;
