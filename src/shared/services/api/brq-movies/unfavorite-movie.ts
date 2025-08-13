import AsyncStorage from "@react-native-async-storage/async-storage";

interface UnfavoriteMovieInput {
    id: number;
}

export const UnfavoriteMovieService = async (input: UnfavoriteMovieInput) => {
    let favorited = await AsyncStorage.getItem('favorited') as string;

    if (!favorited) {
        favorited = '[]';
    }

    const favorites = JSON.parse(favorited) as number[];

    if (!favorites.includes(input.id)) {
        throw new Error('Filme não favoritado');
    }

    const newFavorites = favorites.filter((id) => id !== input.id);

    await AsyncStorage.setItem('favorited', JSON.stringify(newFavorites));
}