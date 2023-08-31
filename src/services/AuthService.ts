import { IUserRegister, IUserLogin, IUser, IPassword, IForgotPassword, IChangePassword, ILogin, IResetPassword, IConfirmResetPassword } from '@/interfaces'
import BaseService from "./BaseService"

const servicePrefix = "/auth"

const Auth = (token: string) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const apiRegister = (data: IUserRegister) => {
    return BaseService.post(`${servicePrefix}/register`, JSON.stringify(data))
}


export const apiLogin =  (data: IUserLogin) => {
    return BaseService.post<ILogin>(`${servicePrefix}/login`, data)
}

export const apiResetPassword =  (data: IResetPassword) => {
    return BaseService.post(`${servicePrefix}/reset-password`, data)
}

export const apiConfirmResetPassword =  (data: IConfirmResetPassword) => {
    return BaseService.post(`${servicePrefix}/reset`, data)
}

export const apiGetUser =  ({ id }: { id: string }) => {
    return BaseService.get<IUser>(`/users/${id}`)
}

export const apiUpdateUser =  (data: Partial<IUser>, { id }: { id: string }) => {
    return BaseService.patch<Partial<IUser>>(`/users/${id}`, data)
}


export const apiChangePassword =  (data: IChangePassword, { id }: { id: string }) => {
    return BaseService.patch(`/users/${id}/change_password`, data)
}


export const apiHomeData =  () => {
    return fetch(`../dictionaries/home.json`)
}





export const apiRefreshToken =  (data: { refresh: string }) => {
    return BaseService.post(`${servicePrefix}/token/refresh`, data)
}

export const apiForgotPassword =  (data: IForgotPassword) => {
    return BaseService.post(`${servicePrefix}/password/reset`, data)
}








export const apiVerifyFace =  (data: FormData, token?: string) => {
    // const formData = new FormData()
    // Object.keys(data).forEach(key => formData.append(key, data[key as keyof FormData]))

    return BaseService.post(`${servicePrefix}/face/verify`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    })
}

export const apiUpdateProfileImage =  (data: FormData, token?: string) => {

    return BaseService.patch<IUser>(`${servicePrefix}/user`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            "Accept": "*/*"
        }
    })
}

export const apiUpdatePassword =  (data: IPassword, token?: string) => {
    return BaseService.patch(`${servicePrefix}/password/change`, data, Auth(token!))
}