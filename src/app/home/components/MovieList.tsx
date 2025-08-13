import { DiscoverMoviesService, DiscoverMoviesServiceOutput } from "@/src/shared/services/movies-db/movies";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { MovieListItem } from "./MovieListItem";

export const MovieList = () => {
    const [data, setData] = useState<DiscoverMoviesServiceOutput | null>(null);
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchData({ page }: { page: number }) {
        setIsLoading(true);
        return DiscoverMoviesService({ page })
            .then((data) => data)
            .catch((error) => {

            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchData({ page }).then((data) => {
            if (data) {
                setData(data);
            }
        })
    }, []);

    async function loadMore() {
        if (!data || isLoading) {
            return;
        }

        setPage(page + 1);
        const fetchedData = await fetchData({
            page: page + 1
        });

        if (fetchedData) {
            setData({
                ...data,
                results: [...data.results, ...fetchedData.results]
            })
        }
    }

    return (
        <FlatList
            data={data?.results}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="gap-4 pb-16"
            columnWrapperClassName="flex-row justify-between"
            onEndReached={loadMore}
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