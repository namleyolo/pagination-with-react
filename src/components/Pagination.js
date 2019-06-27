import React from 'react'

const Pagination = ({postsPerPage,totalPosts, paginate}) => {
    const pageNumber = [];
    for (let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++)
    {
        pageNumber.push(i);
    }
    console.log("page Number : ",pageNumber);
    return (
        <div className="pagination grid-20"> 
            {pageNumber.map(number => (
                <div onClick={() =>paginate(number)} key={number} className='page-item'>
                      <a href="!#" className= 'page-link'> {number} </a>
                </div>
            ))}
        </div>
    )
}

export default Pagination