import { DiscoverMoviesServiceOutput } from "@/src/shared/services/movies-db/movies"
import { IMAGE_MOVIES_DB_BASE_URL } from "@/src/shared/services/urls"
import { Image } from "react-native"

export const MovieListItem = (props: DiscoverMoviesServiceOutput['results'][0]) => {
    return (
        <Image
            className="w-[48%] h-80 rounded-lg"
            source={{
                uri: IMAGE_MOVIES_DB_BASE_URL + props.poster_path
            }}
        />
    )
}