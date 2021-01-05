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
    messages: Array<string>
    data: D
}

type AuthMeType = {
    id: number
    email: string
    login: string
}

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<AuthMeType>>(`auth/me`)
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    }
}