import { useEffect, useState } from "react";
import { Alert, DeviceEventEmitter, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IMAGE_MOVIES_DB_BASE_URL } from "@/src/shared/services/api/urls";
import { router, useLocalSearchParams } from "expo-router";
import { Heart } from "@/src/shared/assets/icons/Heart";
import { Star } from "@/src/shared/assets/icons/Star";
import { Calendar } from "@/src/shared/assets/icons/Calendar";
import { Bell } from "@/src/shared/assets/icons/Bell";
import { ChevronLeft } from "@/src/shared/assets/icons/ChevronLeft";
import { HeartCircle } from "@/src/shared/assets/icons/HeartCircle";
import { FavoriteMovieService } from "@/src/shared/services/api/brq/movies/favorite-movie";
import { UnfavoriteMovieService } from "@/src/shared/services/api/brq/movies/unfavorite-movie";
import { FindMovieInfoService } from "@/src/shared/services/api/brq/movies/find-movie-info";
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