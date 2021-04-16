/* eslint-disable */
import DataServiceWorker from '../service/data-service-worker'

class Utils {

    //GET DATE FROM DATETIME
    getDateFromDateTime = (datetime) => {
        let date = new Date(datetime);
        return date;
    }

    //GET TIME FROM DATETIME
    getDateFromDateTime = (datetime) => {
        let date = new Date(datetime);
        return date.getTime();
    }
}
export default new Utils();