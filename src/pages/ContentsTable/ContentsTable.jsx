import "./contentsTable.css"

export default function ContentsTable() {
  return (
    <div className="page contents_table">
      <h2 className="title">Table of Contents</h2>
      <div className="contents_details">
        <div className="contents_page">
          <p className="page_title">Proposal</p>
          <p className="page_no">04</p>
        </div>
        <div className="contents_page">
          <p className="page_title">Project Investment</p>
          <p className="page_no">09</p>
        </div>
        <div className="contents_page">
          <p className="page_title">About Us</p>
          <p className="page_no">12</p>
        </div>
      </div>
    </div>
  );
}
