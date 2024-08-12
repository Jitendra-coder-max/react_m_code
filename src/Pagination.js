import React, { useState } from 'react';

const Pagination = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const renderData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex).map((item, index) => (
            <div key={index}>
                {/* Render your data here */}
                <p>{item}</p>
            </div>
        ));
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={i === currentPage ? 'active' : ''}>
                    <button onClick={() => handleClick(i)}>{i}</button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <div>
            <div>{renderData()}</div>
            <ul className="pagination">{renderPageNumbers()}</ul>
        </div>
    );
};

export default Pagination;
