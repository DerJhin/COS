import axios from "axios";

export const CaseService = {
    async getCaseData(caseName) {
        try {
            const response = await axios.get('http://localhost:8080/case/getSkins/' + caseName)
            return response.data
        } catch (error) {
            console.error('Error:', error)
        }
    },

    async openCase(caseName) {
        try {
            const response = await axios.get('http://localhost:8080/case/openCase/' + caseName)
            return response.data
        } catch (error) {
            console.error('Error:', error)
        }
    }
}
