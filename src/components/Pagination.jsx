import '../css/pagination.css';

export default function Pagination({ page, setPage, hasMore }) {
  return (
    <div className="pagination-container">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span className="page-number">Page {page}</span>
      <button onClick={() => setPage(page + 1)} disabled={!hasMore}>
        Next
      </button>
    </div>
  );
}