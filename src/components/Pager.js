import React from 'react';
import { Link } from 'gatsby';

const Pager = ({ currentPage, numPages, categoryLink }) => {
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    return (
        <nav className='pagination'>
            <div className='pagination-container'>{previousPage > 0 && (
                <Link to={`${categoryLink}/${previousPage}/`} className={`btn-pagination`}>← <span className='pagination_span'>Назад</span></Link>
            )}
            </div>
            {(previousPage > 0 || nextPage <= numPages) && (<p className='pagination-text'><span className='pagination_span'>Страница</span>  {currentPage} из {numPages}</p>)}
            <div className='pagination-container'>{nextPage <= numPages && (
                <Link to={`${categoryLink}/${nextPage}/`} className={`btn-pagination`}><span className='pagination_span'>Далее</span> →</Link>
            )}
            </div>
        </nav>
    )
}
export default Pager