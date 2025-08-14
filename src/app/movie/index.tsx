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
import { FavoriteMovieService } from "@/src/shared/services/api/brq-movies/favorite-movie";
import { UnfavoriteMovieService } from "@/src/shared/services/api/brq-movies/unfavorite-movie";
import { FindMovieInfoService } from "@/src/shared/services/api/brq-movies/find-movie-info";

interface MovieParams {
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
    const { top } = useSafeAreaInsets();
    const params = useLocalSearchParams() as unknown as MovieParams

    const [isFavorited, setIsFavorited] = useState<boolean>(false);
    const [favoritesCount, setFavoritesCount] = useState<number>(Number(params.vote_count));

    const flatListItems = [
        {
            icon: Heart,
            label: 'Curtidas',
            value: favoritesCount
        },
        {
            icon: Star,
            label: 'Avaliação',
            value: Number(params.vote_average).toFixed(1) + ' / 10'
        },
        {
            icon: Calendar,
            label: 'Lançamento',
            value: params.release_date.split('-')[0]
        },
        {
            icon: Bell,
            label: 'Popularidade',
            value: params.popularity
        }
    ]

    async function onFavorite() {
        try {
            await FavoriteMovieService(params).then(() => {
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
            await UnfavoriteMovieService(params).then(() => {
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
            id: params.id
        }).then(({ isFavorited }) => {
            setIsFavorited(isFavorited);
        })
    }, [])

    return (
        <View className="flex-1">
            <ScrollView className="bg-background flex-1">
                <ImageBackground
                    className="w-full h-[70vh] relative"
                    source={{
                        uri: IMAGE_MOVIES_DB_BASE_URL + params?.poster_path
                    }}
                />

                <View className="px-6 pt-6">
                    <Text className="text-secondary text-4xl font-bold" >{params.title}</Text>

                    <Text className="text-primary font-bold text-lg mt-4" >SINOPSE</Text>
                    <Text className="text-secondary text-lg mt-2" >
                        {params.overview}
                    </Text>

                    <View className="flex-row flex-wrap justify-between mt-8 pb-12 gap-y-4">
                        {flatListItems.map(({ icon: Icon, ...item }, index) => (
                            <View key={index} className="flex-col w-[48%] gap-3 justify-between bg-tertiary p-4 rounded-lg">
                                <View className="flex-row items-center gap-2">
                                    <View className="bg-background h-9 w-9 rounded-full items-center justify-center">
                                        <Icon size={20} />
                                    </View>
                                    <Text className="text-primary font-bold text-lg">{item.label.toUpperCase()}</Text>
                                </View>
                                <Text className="text-secondary font-bold text-2xl">{item.value}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

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
        </View>
    )
}