import React from 'react';
import { Link } from 'gatsby';

const Pager = ({ currentPage, numPages, categoryLink }) => {
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    console.log(currentPage, numPages, categoryLink)
    console.log(previousPage, nextPage)
    console.log(previousPage === 0 ? 'true' : 'false')
    return (
        <nav className='pagination'>
            <div className='pagination-container'>{previousPage > 0 && (
                <Link to={`${categoryLink}/${previousPage}/`} className={`btn-pagination`}>← Назад</Link>
            )}
            </div>
            {(previousPage > 0 || nextPage <= numPages) && (<p className='pagination-text'>Страница {currentPage} из {numPages}</p>)}
            <div className='pagination-container'>{nextPage <= numPages && (
                <Link to={`${categoryLink}/${nextPage}/`} className={`btn-pagination`}>Далее →</Link>
            )}
            </div>
        </nav>
    )
}
export default Pager