import axios from "axios"

//define base url - the one you call in post man - its defined in the backend
const USER_API_URL = "http://localhost:8080/api/v1/users"

class UserService {

    saveUser(newUser){
        //post request to url to save entire user
        return axios.post(USER_API_URL, newUser);
    }
}
export default new UserService();