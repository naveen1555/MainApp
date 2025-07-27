import React from "react";
import "./Pagination.css";

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="pagination">
            <button className="pagination-button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button className="pagination-button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}
