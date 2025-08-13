import AsyncStorage from "@react-native-async-storage/async-storage";

interface FavoriteMovieInput {
    id: number;
}


export const FavoriteMovieService = async (input: FavoriteMovieInput) => {
    let favorited = await AsyncStorage.getItem('favorited') as string;

    if (!favorited) {
        favorited = '[]';
    }

    const favorites = JSON.parse(favorited) as number[];

    if (favorites.includes(input.id)) {
        throw new Error('Filme já favoritado');
    }

    favorites.push(input.id);

    await AsyncStorage.setItem('favorited', JSON.stringify(favorites));
}