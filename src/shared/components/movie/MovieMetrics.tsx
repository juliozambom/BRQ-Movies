import { Text, View } from "react-native"
import { Bell } from "../../assets/icons/Bell"
import { Calendar } from "../../assets/icons/Calendar"
import { Heart } from "../../assets/icons/Heart"
import { Star } from "../../assets/icons/Star"

interface MovieMetricsProps {
    favoritesCount: number
    release_date: string
    popularity: string
    vote_average: string
}

export const MovieMetrics = ({
    favoritesCount,
    release_date,
    popularity,
    vote_average
}: MovieMetricsProps) => {
    const flatListItems = [
        {
            icon: Heart,
            label: 'Curtidas',
            value: favoritesCount
        },
        {
            icon: Star,
            label: 'Avaliação',
            value: Number(vote_average).toFixed(1) + ' / 10'
        },
        {
            icon: Calendar,
            label: 'Lançamento',
            value: release_date.split('-')[0]
        },
        {
            icon: Bell,
            label: 'Popularidade',
            value: popularity.split('.')[0] + '°'
        }
    ]

    return (
        <View className="flex-row flex-wrap justify-between mt-8 pb-12 gap-y-4">
            {flatListItems.map(({ icon: Icon, ...item }, index) => (
                <View key={index} className="flex-col w-[48%] gap-3 justify-between bg-tertiary p-4 rounded-lg">
                    <View className="flex-row items-center gap-2">
                        <View className="bg-background h-8 w-8 rounded-full items-center justify-center">
                            <Icon size={18} />
                        </View>
                        <Text className="text-primary font-bold text-md">{item.label.toUpperCase()}</Text>
                    </View>
                    <Text className="text-secondary font-bold text-2xl">{item.value}</Text>
                </View>
            ))}
        </View>
    )
}