import AsyncStorage from "@react-native-async-storage/async-storage";

interface FindMovieInfoInput {
    id: string;
}

interface FindMovieInfoOutput {
    isFavorited: boolean;
}

export const FindMovieInfoService = async (input: FindMovieInfoInput): Promise<FindMovieInfoOutput> => {
    let favorited = await AsyncStorage.getItem('favorited') as string;

    if (!favorited) {
        favorited = '[]';
    }

    const favorites = JSON.parse(favorited) as {
        id: string
    }[];

    console.log(favorites);

    const isFavorited = !!favorites.find((movie) => movie.id === input.id);

    return {
        isFavorited
    }
}