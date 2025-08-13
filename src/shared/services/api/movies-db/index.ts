import axios from "axios";
import { MOVIES_DB_BASE_URL } from "../urls";

export const moviesDbApi = axios.create({
    baseURL: MOVIES_DB_BASE_URL,
    headers: {
        'Authorization': 'Bearer ',
        Accept: "application/json"
    }
});