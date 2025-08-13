import { Header } from "@/src/shared/components/Header";
import { DiscoverMoviesService, DiscoverMoviesServiceOutput } from "@/src/shared/services/movies-db/movies";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { set } from "zod";
import { MovieList } from "./components/MovieList";


export default function Home() {
    const { top } = useSafeAreaInsets();

    return (
        <View className="px-4 bg-background flex-1" style={{
            paddingTop: top
        }}>
            <Header />
            <MovieList />
        </View>
    )
}