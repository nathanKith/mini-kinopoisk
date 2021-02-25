import axios from 'axios';

type Params = {
    params: {
        type?: string,
        page?: number,
        append_to_response?: string,
    },
    headers: {
        'X-API-KEY': string,
    }
};

export const ajax = async (url: string, params: Params) => {
    return await axios.get(url, params);
};
