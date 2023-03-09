import axios from "axios"

//define base url - the one you call in post man - its defined in the backend
const LOG_API_URL = "http://localhost:8080/api/v2/logs"
const LOGDATA_API_URL = "http://localhost:8080/api/v3/logDatas"

class LogService {

    saveLog(newLog){
        return axios.post(LOG_API_URL, newLog);
    }

    saveLogData(newLogData){
        return axios.post(LOGDATA_API_URL,newLogData);
    }
}
export default new LogService();