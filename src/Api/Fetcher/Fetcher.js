import Axios from 'axios';
import { BASE_URL } from '../../constants/constants';


const create = (headers, baseURL = BASE_URL) => {

    const api = Axios.create(
        {
            baseURL,
            headers: headers,
            timeout: 50000
        })

    return {
        api,
    }
}

export default {
    create
}