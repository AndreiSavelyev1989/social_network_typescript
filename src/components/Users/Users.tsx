import React from "react";
import {User} from "./User/User";
import {UserType} from "../../redux-state/users-reducer";
import * as axios from "axios"
import styles from "./Users.module.css"
import {Pagination} from "@material-ui/lab";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (page: number) => void
}

// export function Users(props: UsersPropsType) {
//     if (props.users.length === 0 && props.totalUsersCount === 0) {
//         // @ts-ignore
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.pageSize}&count=${props.totalUsersCount}`)
//             .then((response: { data: { items: UserType[]; totalCount: number; }; }) => {
//                 props.setUsers(response.data.items)
//                 props.setTotalUsersCount(response.data.totalCount)
//             })
//
//     }
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
//
//     let pages = []
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//
//     return (
//         <div>
//             <div>
//                 {pages.map(p => <span
//                     className={props.currentPage === p
//                         ? styles.currentPage
//                         : ""}>{p}</span>)}
//             </div>
//             {props.users.map(u => <User
//                 key={u.id}
//                 id={u.id}
//                 userPhoto={u.photos}
//                 followed={u.followed}
//                 fullName={u.name}
//                 status={u.status}
//                 follow={props.follow}
//                 unfollow={props.unfollow}
//             />)}
//         </div>
//     )
// }

export class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount(): void {
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response: { data: { items: UserType[]; totalCount: number; }; }) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onCurrentPage = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then((response: { data: { items: UserType[]}; }) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <Pagination
                    count={pagesCount}
                    variant="outlined"
                    color="secondary"
                    // onClick={}
                />
                <div className={styles.pagination}>
                    {pages.map(p => <span key={p} onClick={() => this.onCurrentPage(p)}
                                          className={this.props.currentPage === p
                                              ? styles.currentPage
                                              : ""}>{p} </span>)}
                </div>
                {this.props.users.map(u => <User
                    key={u.id}
                    id={u.id}
                    userPhoto={u.photos}
                    followed={u.followed}
                    fullName={u.name}
                    status={u.status}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />)}
            </div>
        )
    }
}