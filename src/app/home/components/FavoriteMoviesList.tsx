import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, DeviceEventEmitter, FlatList, Text } from "react-native";
import { MovieListItem } from "./MoviesListItem";
import { FindFavoriteMoviesOutput, FindFavoriteMoviesService } from "@/src/shared/services/api/brq/movies/find-favorite-movies";

export const FavoriteMoviesList = () => {
    const [data, setData] = useState<FindFavoriteMoviesOutput[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchData() {
        setIsLoading(true);
        return FindFavoriteMoviesService()
            .then((data) => data)
            .catch(() => {
                Alert.alert('Erro', 'Erro ao buscar os filmes favoritos')
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchData().then((data) => {
            if (data) {
                setData(data);
            }
        })

        DeviceEventEmitter.addListener('REFRESH-FAVORITES', () => {
            fetchData().then((data) => {
                if (data) {
                    setData(data);
                }
            })
        })

        return () => {
            DeviceEventEmitter.removeAllListeners('REFRESH-FAVORITES');
        }
    }, []);

    if (data && data.length == 0) {
        return (
            <Text className="text-secondary text-center text-xl font-bold mt-8">
                Você não possui filmes favoritos
            </Text>
        )
    }

    return (
        <FlatList
            data={data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="gap-4 pb-16 px-4"
            columnWrapperClassName="flex-row justify-between"
            className="border-t-2 border-tertiary pt-4"
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={() => {
                if (!isLoading) {
                    return null;
                }

                return (
                    <ActivityIndicator className="my-8" size="large" color="white" />
                )
            }}
            renderItem={({ item }) => (
                <MovieListItem {...item} />
            )}
        />
    )
}