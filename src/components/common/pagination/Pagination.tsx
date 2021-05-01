import React, {useState} from "react";
import styles from "./Pagination.module.scss";
import {UniversalButton} from "../universal-button/UniversalButton";

type PaginationPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onCurrentPage: (pageNumber: any) => void
    portionSize: number
    isFetching: boolean
}

export const Pagination = React.memo((props: PaginationPropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={styles.pagination}>
            {portionNumber > 1 && <UniversalButton
                callback={() => setPortionNumber(portionNumber - 1)}
                type={"button"}
                title={"Prev"}
                disabled={props.isFetching}
            />}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <button
                    key={p}
                    className={props.currentPage === p
                        ? styles.selectedButton
                        : styles.paginationButton}
                    onClick={() => props.onCurrentPage(p)}
                    disabled={props.isFetching}
                >{p} </button>)}
            {portionCount > portionNumber && <UniversalButton
                callback={() => setPortionNumber(portionNumber + 1)}
                disabled={props.isFetching}
                type={"button"}
                title={"Next"}/>}
        </div>
    )
});