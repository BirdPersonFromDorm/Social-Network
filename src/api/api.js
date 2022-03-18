import axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ba9851bb-c7d9-4b3e-8fd8-eee62d5c06dc '
    }
})

export const usersApi = {
    getUsers(currentPage = 1 ,pageSize = 5){
        return (instans.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data));
    },
    deleteFollow(id) {
        return (instans.delete(`follow/${id}`).then(response => response.data));
    },
    postFollow(id){
        return (instans.post(`follow/${id}`).then(response => response.data));
    }
}
export const profileApi = {

    getProfile(userId){
        return (instans.get(`profile/${userId}`));
    },
    getStatus(userId){
        return (instans.get(`profile/status/${userId}`));
    },
    updateStatus(status){
        return (instans.put(`profile/status`, {status: status}));
    }
}
export const authApi ={
    me(){
        return instans.get(`auth/me`).then(response => response.data)
    },
    login(email,password, rememberMe){
        return instans.post(`auth/login`, {email,password, rememberMe}).then(response => response.data)
    },
    logout(){
        return instans.delete(`auth/login`).then(response => response.data)
    }

}
