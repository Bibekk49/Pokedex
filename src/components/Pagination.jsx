import React from 'react';
import '../css/pagination.css';

export default function Pagination({ page, setPage, total, limit }) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pagination-container">
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <span className="page-number">Page {page} of {totalPages}</span>
      <button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
}
