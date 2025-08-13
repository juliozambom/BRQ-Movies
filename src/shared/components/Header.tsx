import { Text, View } from "react-native"
import { ThreeDots } from "../assets/icons/ThreeDots"

export const Header = () => {
    return (
        <View className="w-full px-4 h-20 flex-row justify-between items-center">
            <Text className="text-secondary text-3xl">BRQ Movies</Text>
            <ThreeDots size={32} />
        </View>
    )
}