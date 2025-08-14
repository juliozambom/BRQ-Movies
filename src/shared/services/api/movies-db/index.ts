import axios from "axios";
import { MOVIES_DB_BASE_URL } from "../urls";

if (!process.env.EXPO_PUBLIC_MOVIES_DB_API_KEY) {
    throw new Error("Developer error: Movies DB API Key not found, please check README.md to see how to set this variable.");
}

export const moviesDbApi = axios.create({
    baseURL: MOVIES_DB_BASE_URL,
    headers: {
        'Authorization': `Bearer ${process.env.EXPO_PUBLIC_MOVIES_DB_API_KEY}`,
        Accept: "application/json"
    }
}); 
