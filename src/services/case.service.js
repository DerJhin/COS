import axios from "axios";

export const CaseService = {
    async getCaseData(caseName) {
        try {
            const response = await axios.get('http://localhost:8080/case/getSkinsForCase/' + caseName)
            return response.data
        } catch (error) {
            console.error('Error:', error)
        }
    },

    async openCase(caseName) {
        const userId = JSON.parse(localStorage.getItem('user')).id
        try {
            const response = await axios.get('http://localhost:8080/case/openCase/' + caseName + '/' + userId)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.error('Error:', error)
        }
    },

    async register(user) {
        try {
            const response = await axios.post('http://localhost:8080/benutzer/createBenutzer', user)
            localStorage.setItem('user', JSON.stringify(response.data))
            return response.data
        } catch (error) {
            console.error('Error:', error)
        }
    },

    async login(user) {
        try {
            const response = await axios.post('http://localhost:8080/login', user)
            localStorage.setItem('user', JSON.stringify(response.data))
            return response.data
        } catch (error) {
            console.error('Error:', error)
        }
    },

    async getInventory() {
        const userId = JSON.parse(localStorage.getItem('user')).id
        try {
            const response = await axios.get('http://localhost:8080/benutzer/' + userId + '/inventory');
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },

    async getCases() {
        try {
            const response = await axios.get('http://localhost:8080/case/getAllCases')
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },

    async getFriends() {
        const userId = JSON.parse(localStorage.getItem('user')).id
        try {
            const response = await axios.get('http://localhost:8080/friends/' + userId)
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
