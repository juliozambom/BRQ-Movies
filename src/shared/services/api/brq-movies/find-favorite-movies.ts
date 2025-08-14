import AsyncStorage from "@react-native-async-storage/async-storage";

export interface FindFavoriteMoviesOutput {
    id: string
    overview: string
    popularity: string
    poster_path: string
    release_date: string
    title: string
    vote_average: string
    vote_count: string
}

export const FindFavoriteMoviesService = async (): Promise<FindFavoriteMoviesOutput[]> => {
    let favorited = await AsyncStorage.getItem('favorited') as string;

    if (!favorited) {
        favorited = '[]';
    }

    const favorites = JSON.parse(favorited) as FindFavoriteMoviesOutput[];


    return favorites;
}