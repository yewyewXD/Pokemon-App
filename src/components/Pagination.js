import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="buttons bg-dark mt-4 py-5">
      {gotoPrevPage && (
        <button
          className="btn btn-secondary btn-lg py-1 mx-md-3 mx-1"
          onClick={gotoPrevPage}
        >
          Previous Page
        </button>
      )}
      {gotoNextPage && (
        <button
          className="btn btn-primary btn-lg py-1 mx-md-3 mx-1"
          onClick={gotoNextPage}
        >
          Next Page
        </button>
      )}
    </div>
  );
}
