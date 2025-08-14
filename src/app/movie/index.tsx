import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";;
import { MoviePoster } from "@/src/shared/components/movie/MoviePoster";
import { MovieDetails } from "@/src/shared/components/movie/MovieDetails";
import { MovieMetrics } from "@/src/shared/components/movie/MovieMetrics";
import { MovieActions } from "@/src/shared/components/movie/MovieActions";

export interface MovieParams {
    id: string
    overview: string
    popularity: string
    poster_path: string
    release_date: string
    title: string
    vote_average: string
    vote_count: string
}


export default function Movie() {
    const params = useLocalSearchParams() as unknown as MovieParams

    const [favoritesCount, setFavoritesCount] = useState<number>(Number(params.vote_count));

    return (
        <View className="flex-1">
            <ScrollView className="bg-background flex-1">
                <MoviePoster poster_path={params?.poster_path} />

                <View className="px-6 pt-6">
                    <MovieDetails
                        title={params.title}
                        overview={params.overview}
                    />

                    <MovieMetrics
                        favoritesCount={favoritesCount}
                        release_date={params.release_date}
                        popularity={params.popularity}
                        vote_average={params.vote_average}
                    />
                </View>
            </ScrollView>

            <MovieActions
                movie={params}
                favoritesCount={favoritesCount}
                setFavoritesCount={setFavoritesCount}
            />
        </View>
    )
}