import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MoviesList } from "./MoviesList";
import { FavoriteMoviesList } from "./FavoriteMoviesList ";

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
            <MyTabs.Screen name="Todos os Filmes" component={MoviesList} />
            <MyTabs.Screen name="Filmes Favoritos" component={FavoriteMoviesList} />
        </MyTabs.Navigator>
    )
}