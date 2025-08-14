import { router } from "expo-router"
import { Alert, DeviceEventEmitter, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChevronLeft } from "../../assets/icons/ChevronLeft";
import { HeartCircle } from "../../assets/icons/HeartCircle";
import { useEffect, useState } from "react";
import { FindMovieInfoService } from "../../services/api/brq/movies/find-movie-info";
import { UnfavoriteMovieService } from "../../services/api/brq/movies/unfavorite-movie";
import { FavoriteMovieService } from "../../services/api/brq/movies/favorite-movie";
import { MovieParams } from "@/src/app/movie";

interface MovieActionsProps {
    favoritesCount: number
    setFavoritesCount: React.Dispatch<React.SetStateAction<number>>
    movie: MovieParams
}
export const MovieActions = ({ movie, favoritesCount, setFavoritesCount }: MovieActionsProps) => {
    const { top } = useSafeAreaInsets();
    const [isFavorited, setIsFavorited] = useState<boolean>(false);

    async function onFavorite() {
        try {
            await FavoriteMovieService(movie).then(() => {
                setIsFavorited(true);
                setFavoritesCount(favoritesCount + 1);
            })
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert('Erro', error.message)
                return;
            }

            Alert.alert('Erro', 'Erro interno do servidor')
        }
    }

    async function onUnfavorite() {
        try {
            await UnfavoriteMovieService(movie).then(() => {
                setIsFavorited(false);
                setFavoritesCount(favoritesCount - 1);
            })
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert('Erro', error.message)
                return;
            }

            Alert.alert('Erro', 'Erro interno do servidor')
        }
    }

    async function handleFavorite() {
        if (isFavorited) {
            await onUnfavorite();
        } else {
            await onFavorite();
        }

        DeviceEventEmitter.emit('REFRESH-FAVORITES');
    }

    useEffect(() => {
        FindMovieInfoService({
            id: movie.id
        }).then(({ isFavorited }) => {
            setIsFavorited(isFavorited);
        })
    }, [])

    return (
        <View style={{
            paddingTop: top + 16,
            paddingBottom: 16
        }} className="absolute px-6 flex-row justify-between w-full">
            <TouchableOpacity
                onPress={() => router.back()}
            >
                <ChevronLeft size={40} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleFavorite}
            >
                <HeartCircle size={40} color={isFavorited ? '#EC8B00' : '#16171B'} fill={isFavorited ? '#16171B' : '#fff'} />
            </TouchableOpacity>
        </View>
    )
}