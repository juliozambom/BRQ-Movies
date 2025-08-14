import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThreeDots } from "@/src/shared/assets/icons/ThreeDots";
import { Logout } from "../assets/icons/Logout";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    async function handleSignOut() {
        await AsyncStorage.removeItem('access-token');

        router.replace('/signin');
    }

    return (
        <View className="w-full px-4 h-20 flex-row justify-between items-center relative">
            <Text className="text-secondary text-3xl">BRQ Movies</Text>

            <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
                <ThreeDots size={32} />
            </TouchableOpacity>

            {isMenuOpen && (
                <View className="absolute top-20 right-4 rounded-lg overflow-hidden z-10">
                    <TouchableOpacity
                        className="bg-tertiary px-6 py-4 flex-row items-center gap-2"
                        onPress={handleSignOut}
                    >
                        <Logout size={24} />
                        <Text className="text-secondary text-xl">Sair</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}