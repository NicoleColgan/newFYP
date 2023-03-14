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

    async getLogByDate(date){
        //convert date into format expected by the db
        const originalDate = new Date(date);

        //extract day month and year
        const year = originalDate.getFullYear();
        const month = originalDate.getMonth()+1;    //month index is from 0-11
        const day = originalDate.getDate();

        const formattedDate = year+"-"+month.toString().padStart(2, "0")+"-"+day.toString().padStart(2,"0");
        console.log("FormattedDate: "+formattedDate);

        const userId = JSON.parse(localStorage.getItem("token")).id;

        try{
            const response = await axios.get(LOG_API_URL+"/user/"+userId+"/date/"+formattedDate);
            if(response.status === 200){
                console.log("response.data: "+response.data);
                console.log("response: "+response);
                console.log("Successfully got logs: status 200");
                return response.data;
            } else {
                console.log(response);
                console.log("Error: some error occured while getting logs");
            }
        } catch (error){
            console.error(error);
        }


    }
}
export default new LogService();