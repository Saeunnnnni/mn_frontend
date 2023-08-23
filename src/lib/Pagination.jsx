import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = ({ pageCount, handlePageChange }) => {
  
  return (
    <div>
      {/* 페이징 컴포넌트 추가 */}
      <ReactPaginate
        pageCount={pageCount}  // 전체 페이지 수
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        breakLabel="..."
        nextLabel={<Next />}
        previousLabel={<Prev />}
        onPageChange={handlePageChange}  // 페이지 변경 처리 함수
        className="paginate"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="np"
        nextLinkClassName="np"
      />
    </div>
  );
};

// 페이징 처리에서 next function
function Next() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#909090"
        d="M15.8 43.9L13 41.05L30.15 23.9L13 6.75002L15.8 3.90002L35.8 23.9L15.8 43.9Z"
      />
    </svg>
  );
}

// 페이징 처리에서 prev function
function Prev() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#909090"
        d="M33 44L13 24L33 4L35.8 6.85L18.65 24L35.8 41.15L33 44Z"
      />
    </svg>
  );
}

export default Pagination