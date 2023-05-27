import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "92e42b1a-9c6c-405e-ad44-73ba793511a6"
    }
})

export const usersAPI = {
    getUsers(usersPerPage: number, pageNumber: number = 1) {
        const requestUrl = 'users?count=' + usersPerPage
            + '&page=' + pageNumber
        return instance.get(requestUrl)
            .then(response => response.data)
    },
    //need follow / unFollow user
    unFollow(userId: number) {
        const requestUrl = 'follow/' + userId
        return instance.delete(requestUrl)
            .then(response => response.data)
    },
    follow(userId: number) {
        const requestUrl = 'follow/' + userId
        return instance.post(requestUrl)
            .then(response => response.data)
    }
}