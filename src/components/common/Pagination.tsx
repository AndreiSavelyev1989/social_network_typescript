import React, {useState} from "react";
import styles from "../Users/Users.module.css";
import {Button} from "@material-ui/core";

type PaginationPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onCurrentPage: (pageNumber: any) => void
    portionSize: number
}

export function Pagination(props: PaginationPropsType) {
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
                {portionNumber > 1 && <Button
                    onClick={() => setPortionNumber(portionNumber - 1)}
                    variant={"outlined"}
                    color={"primary"}
                    size={"small"}
                >Prev</Button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <Button key={p} onClick={() => props.onCurrentPage(p)}
                                      variant={props.currentPage === p
                                          ? "outlined"
                                          : "text"}
                                      size={"small"}
                                      color={props.currentPage === p
                                          ? "secondary"
                                          : "primary"}
                                      className={props.currentPage === p
                                          ? styles.currentPage
                                          : ""}>{p} </Button>)}
                {portionCount > portionNumber && <Button
                    onClick={() => setPortionNumber(portionNumber + 1)}
                    variant={"outlined"}
                    color={"primary"}
                    size={"small"}
                >Next</Button>}
            </div>
        )
}