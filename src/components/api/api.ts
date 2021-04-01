import axios from 'axios'
import {ProfileType} from "../../redux-state/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2d811067-9a69-4553-9e1d-72dd0da27699'
    }
})

type ResponseType<D = {}> = {
    resultCode: number
    fieldsErrors: Array<string>
    messages: Array<string>
    data: D
}

type AuthMeType = {
    id: number
    email: string
    login: string
}

type UsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export type UserPhotosType = {
    small: null | string
    large: null | string
}

type UserType = {
    id: number
    name: string
    photos: UserPhotosType
    status: null | string
    followed: boolean
}

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<AuthMeType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType<{userId: string}>>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
    },
    saveProfilePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return instance.put<ResponseType<{photos: UserPhotosType}>>(`profile/photo`, formData, config)
    }
}

export const usersAPI = {
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    getUsers(pageSize: number, currentPage: number) {
        return instance.get<UsersType>(`users?count=${pageSize}&page=${currentPage}`)
    }
}