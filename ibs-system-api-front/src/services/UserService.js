import axios from "axios"


//define base url - the one you call in post man - its defined in the backend
const USER_API_URL = "http://localhost:8080/api/v1/users"

class UserService {

    saveUser(newUser){
        //post request to url to save entire user
        return axios.post(USER_API_URL, newUser);
    }

    async checkUserExists(email,history) {
      
        try {
          const response = await axios.get(USER_API_URL + "/email/" + email);
          if (response.status === 200) {
            console.log("User already in db");
            return true;
          } else if (response.status === 400) {
            console.log("User not found in db");
            return false;
          } else {
            console.log("Some other error occured: ", response.status);
            return false;
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      }

      async authenticateUser (email, password,navigate){
        try {
            const response = await axios.get(USER_API_URL + "/auth/email/" + email+"/password/"+ password);
            if (response.status === 200) {
              console.log("Authenticated");
              const {token} = await response.data;
              localStorage.setItem("token",token);
              navigate("/logging");
              return true;
            } else {
              console.log("Some other error occured: ", response.status);
              return false;
            }
          } catch (error) {
            console.error(error);
            return false;
          }
      }
      
    getUsers(){
        return axios.get(USER_API_URL);
    }
}
export default new UserService();