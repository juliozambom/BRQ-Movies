import AsyncStorage from "@react-native-async-storage/async-storage";

export interface FindFavoriteMoviesOutput {
    id: number;
    overview: string
    popularity: number;
    poster_path: string
    release_date: string
    title: string
    vote_average: number;
    vote_count: number;
}

export const FindFavoriteMoviesService = async (): Promise<FindFavoriteMoviesOutput[]> => {
    let favorited = await AsyncStorage.getItem('favorited') as string;

    if (!favorited) {
        favorited = '[]';
    }

    const favorites = JSON.parse(favorited) as FindFavoriteMoviesOutput[];


    return favorites;
}