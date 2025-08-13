import { Image, View } from "react-native";
import icon from "@/assets/images/splash-icon.webp";
import { SignInForm } from "./components/signin-form";

export default function Index() {
    return (
        <View
            className="items-center justify-center flex-1 bg-background px-4"
        >
            <Image source={icon} className="h-72 w-72 mb-12" />
            <SignInForm />
        </View>
    );
}
