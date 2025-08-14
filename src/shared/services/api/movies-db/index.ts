import axios from "axios";
import { MOVIES_DB_BASE_URL } from "../urls";

export const moviesDbApi = axios.create({
    baseURL: MOVIES_DB_BASE_URL,
    headers: {
        'Authorization': `Bearer ${process.env.EXPO_PUBLIC_MOVIES_DB_API_KEY}`,
        Accept: "application/json"
    }
}); 
