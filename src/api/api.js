import axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5680f66d-318e-4b8b-bb34-89a51fb51202'
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
