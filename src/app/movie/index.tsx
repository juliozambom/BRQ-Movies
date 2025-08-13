import { FlatList, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { IMAGE_MOVIES_DB_BASE_URL } from "@/src/shared/services/urls";
import { router, useLocalSearchParams } from "expo-router";
import { Heart } from "@/src/shared/assets/icons/Heart";
import { Star } from "@/src/shared/assets/icons/Star";
import { Calendar } from "@/src/shared/assets/icons/Calendar";
import { Bell } from "@/src/shared/assets/icons/Bell";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChevronLeft } from "@/src/shared/assets/icons/ChevronLeft";
import { HeartCircle } from "@/src/shared/assets/icons/HeartCircle";

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

    const flatListItems = [
        {
            icon: Heart,
            label: 'Curtidas',
            value: params.vote_count
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
                <View>
                    <HeartCircle size={40} />
                </View>
            </View>
        </View>
    )
}