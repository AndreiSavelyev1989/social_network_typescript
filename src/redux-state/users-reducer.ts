export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type PhotosType = {
    small: string
    large: string
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    portionSize: number
    isFetching: boolean
}

export type UsersActionsType =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof toogleIsFetching>

const initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 10,
    isFetching: false,
}

export const follow = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollow = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
}) as const
export const setCurrentPage = (page: number) => ({type: "SET_CURRENT_PAGE", page}) as const
export const toogleIsFetching = (isFetching: boolean) => ({type: "TOOGLE_IS_FETCHING", isFetching}) as const

export const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {
                ...state, users: action.users
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.page
            }
        case "TOOGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}