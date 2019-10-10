import React, {useState} from 'react';
import css from "./Paginator.module.css";


let Paginator = (props) => {
    let pageCount = Math.ceil(props.totalMoviesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pageCount / 5);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * 5 + 1;
    let rightPortionPageNumber = portionNumber * 5;

    return <div className={css.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Prev</button>}
        {
            pages
                .filter((p)=>{return p >= leftPortionPageNumber && p <= rightPortionPageNumber})
                .map((page) => {
                        return <span className={props.currentPage === page ? css.selectedPageNumber : css.pageNumber}
                                     key={page}
                                     onClick={(e) => {
                                         props.onPageChange(page);
                                     }}>{page}</span>
                    }
                )
        }

        {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>Next</button>}
    </div>


};
export default Paginator;