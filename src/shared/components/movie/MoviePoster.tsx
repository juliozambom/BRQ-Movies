import { IMAGE_MOVIES_DB_BASE_URL } from "../../services/api/urls"
import { Image } from "react-native"

interface MoviePosterProps {
    poster_path: string
}

export const MoviePoster = ({ poster_path }: MoviePosterProps) => {
    return (
        <Image
            className="w-full h-[70vh] relative"
            source={{
                uri: IMAGE_MOVIES_DB_BASE_URL + poster_path
            }}
        />
    )
}