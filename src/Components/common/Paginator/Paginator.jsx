import React, {useState} from 'react';
import css from "./Paginator.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faForward} from "@fortawesome/free-solid-svg-icons";


let Paginator = (props) => {
    let pageCount = Math.ceil(props.totalMoviesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let numberCount = (window.innerWidth < 700) ? 1 : 5;
    let portionCount = Math.ceil(pageCount / numberCount);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * numberCount + 1;
    let rightPortionPageNumber = portionNumber * numberCount;

    return <div className={css.paginator}>
        {(window.innerWidth > 700 && portionNumber > 1) && <button tabIndex={11} className={css.button} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>{props.language==="en-US"?"Prev":"Пред"}</button>}
        {props.currentPage > 1 && <button tabIndex={12} className={css.button} onClick={() => {
            props.onPageChange(props.currentPage - 1);
            props.currentPage - 1 < leftPortionPageNumber && setPortionNumber(portionNumber - 1);

        }}><FontAwesomeIcon icon={faBackward}/></button>}
        {
            pages
                .filter((p) => {
                    return p >= leftPortionPageNumber && p <= rightPortionPageNumber
                })
                .map((page) => {
                        return <span tabIndex={13}
                                     className={props.currentPage === page ? css.selectedPageNumber : css.pageNumber}
                                     key={page}
                                     onClick={(e) => {
                                         props.onPageChange(page);
                                     }}>{page}</span>
                    }
                )
        }

        {props.currentPage < pages.length && <button tabIndex={14} className={css.button} onClick={() => {
            props.onPageChange(props.currentPage + 1);
            props.currentPage + 1 > rightPortionPageNumber && setPortionNumber(portionNumber + 1);

        }}><FontAwesomeIcon icon={faForward}/></button>}
        {(window.innerWidth > 700 && portionCount > portionNumber) &&
        <button tabIndex={15} className={css.button} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>{props.language === "en-US" ? "Next" : "След"}</button>}
    </div>
};
export default Paginator;