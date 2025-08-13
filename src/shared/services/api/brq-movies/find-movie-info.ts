import AsyncStorage from "@react-native-async-storage/async-storage";

interface FindMovieInfoInput {
    id: number;
}

interface FindMovieInfoOutput {
    isFavorited: boolean;
}

export const FindMovieInfoService = async (input: FindMovieInfoInput): Promise<FindMovieInfoOutput> => {
    let favorited = await AsyncStorage.getItem('favorited') as string;

    if (!favorited) {
        favorited = '[]';
    }

    const favorites = JSON.parse(favorited) as number[];

    const isFavorited = favorites.includes(input.id);

    return {
        isFavorited
    }
}