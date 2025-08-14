import AsyncStorage from "@react-native-async-storage/async-storage";

export type FavoriteMovieServiceInput = {
    id: string
    overview: string
    popularity: string
    poster_path: string
    release_date: string
    title: string
    vote_average: string
    vote_count: string
}

export const FavoriteMovieService = async (input: FavoriteMovieServiceInput) => {
    let favorited = await AsyncStorage.getItem('favorited') as string;

    if (!favorited) {
        favorited = '[]';
    }

    const favorites = JSON.parse(favorited) as FavoriteMovieServiceInput[];

    if (favorites.find((movie) => movie.id === input.id)) {
        throw new Error('Filme já favoritado');
    }

    favorites.push(input);

    await AsyncStorage.setItem('favorited', JSON.stringify(favorites));
}