import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="buttons">
      {gotoPrevPage && (
        <button className="btn" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="btn" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
