import AsyncStorage from "@react-native-async-storage/async-storage";

const fakeUsers = [{
    username: 'user',
    password: 123
}]
export const assertUsers = async () => {
    const users = await AsyncStorage.getItem('users');

    if (!users) {
        await AsyncStorage.setItem('users', JSON.stringify(fakeUsers))
    }
}