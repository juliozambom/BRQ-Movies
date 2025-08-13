import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MovieList } from "./MovieList";

const MyTabs = createMaterialTopTabNavigator();

export const HomeTabs = () => {
    return (
        <MyTabs.Navigator
            screenOptions={{
                sceneStyle: {
                    backgroundColor: '#16171B',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#EC8B00',
                    height: 3,
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                },
                tabBarActiveTintColor: '#EC8B00',
                tabBarStyle: {
                    backgroundColor: '#16171B',
                },
                tabBarInactiveTintColor: '#A9A9A9',
            }}
        >
            <MyTabs.Screen name="Todos os Filmes" component={MovieList} />
            <MyTabs.Screen name="Filmes Favoritos" component={MovieList} />
        </MyTabs.Navigator>
    )
}