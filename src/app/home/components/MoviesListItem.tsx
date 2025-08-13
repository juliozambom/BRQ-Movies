import { DiscoverMoviesServiceOutput } from "@/src/shared/services/api/movies-db/movies"
import { IMAGE_MOVIES_DB_BASE_URL } from "@/src/shared/services/api/urls"
import { router } from "expo-router"
import { Image, TouchableOpacity } from "react-native"

export const MovieListItem = (props: DiscoverMoviesServiceOutput['results'][0]) => {
    function onNavigateToMovie() {
        router.push({
            pathname: `/movie`,
            params: {
                id: props.id,
                title: props.title,
                poster_path: props.poster_path,
                overview: props.overview,
                release_date: props.release_date,
                vote_average: props.vote_average,
                vote_count: props.vote_count,
                popularity: props.popularity
            }
        })
    }

    return (
        <TouchableOpacity
            onPress={onNavigateToMovie}
            className="w-[48%] h-80 rounded-lg"
        >
            <Image
                className="w-full h-full"
                source={{
                    uri: IMAGE_MOVIES_DB_BASE_URL + props.poster_path
                }}
            />
        </TouchableOpacity>
    )
}