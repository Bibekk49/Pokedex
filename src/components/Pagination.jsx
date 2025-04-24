import React from 'react';

export default function Pagination({ page, setPage }) {
  return (
    <div>
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <span> Page {page} </span>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}