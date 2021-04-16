/* eslint-disable */
import DataServiceWorker from '../service/data-service-worker'

class Utils {

    //GET DATE FROM DATETIME
    getDateFromDateTime = (datetime) => {
        return datetime.slice(0, 10);
    }

    //GET TIME FROM DATETIME
    getTimeFromDateTime = (datetime) => {
        return datetime.slice(11, datetime.length - 1);
    }
}
export default new Utils();