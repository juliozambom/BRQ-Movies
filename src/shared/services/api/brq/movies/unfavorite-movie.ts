import AsyncStorage from "@react-native-async-storage/async-storage";

export type UnfavoriteMovieServiceInput = {
    id: string
    overview: string
    popularity: string
    poster_path: string
    release_date: string
    title: string
    vote_average: string
    vote_count: string
}

export const UnfavoriteMovieService = async (input: UnfavoriteMovieServiceInput) => {
    let favorited = await AsyncStorage.getItem('favorited') as string;

    if (!favorited) {
        favorited = '[]';
    }

    const favorites = JSON.parse(favorited) as UnfavoriteMovieServiceInput[];

    if (!favorites.find((movie) => movie.id === input.id)) {
        throw new Error('Filme não favoritado');
    }

    const newFavorites = favorites.filter((movie) => movie.id !== input.id);

    await AsyncStorage.setItem('favorited', JSON.stringify(newFavorites));
}