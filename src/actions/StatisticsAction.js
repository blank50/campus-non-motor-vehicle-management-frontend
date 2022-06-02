import axios from 'axios';

const axios = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/statistics`,

});

axiosInstance.interceptors.request.use((config) => {
    config.headers = { authorization: 'Bearer' + sessionStorage.getItem('token') };
    return config;
});

export const getExpensesPerCategory = async (dispatch) => {
    try{
        const { data } = await axiosInstance.get();
        dispatch(setExpensesAmountPerCategory(data));
    }
    catch(error) {
        console.log(error);
    }
}