export type UserType = {
    id: string
    userPhotoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

export type UserLocationType = {
    countryName: string
    cityName: string
}

export type UsersType = {
    users: Array<UserType>
}

export type UsersActionsType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

const initialState: UsersType = {
    users: []
}

export const followAC = (userId: string) => ({type: "FOLLOW", userId}) as const
export const unfollowAC = (userId: string) => ({type: "UNFOLLOW", userId}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: "SET_USERS", users}) as const

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
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}