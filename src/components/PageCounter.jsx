import React from "react";

export default function PageCounter({ page, number }) {
  return (
    <div className="page-counter">
      {page} | <strong> Page {number}</strong>
    </div>
  );
}
