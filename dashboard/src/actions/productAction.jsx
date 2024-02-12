import { axiosApi } from "../apis/axiosApi";

export const doGetAllProducts = async () => {
    try {
        const response = await axiosApi({
            url: `/api/products`,
            type: "get"
        });
        return response?.data
    } catch (error) {
        console.log("error----", error);
    }
}