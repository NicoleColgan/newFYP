import axios from "axios"

//define base url - the one you call in post man - its defined in the backend
const LOG_API_URL = "http://localhost:8080/api/v2/logs"

class LogService {

    saveLog(newLog){
        return axios.post(LOG_API_URL, newLog);
    }
}
