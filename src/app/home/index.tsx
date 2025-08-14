import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";;
import { Header } from "@/src/shared/components/Header";
import { HomeTabs } from "@/src/shared/components/signin/components/Tabs";

export default function Home() {
    const { top } = useSafeAreaInsets();

    return (
        <View className="bg-background flex-1" style={{
            paddingTop: top
        }}>
            <Header />
            <HomeTabs />
        </View>
    )
}