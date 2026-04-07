import { Tabs } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayot() {
    return (
        <Tabs>
            <Tabs.Screen name="screenThree"
                options={{
                    title: 'Home',
                    tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
                }} />
            <Tabs.Screen name="screenTwo"
                options={{
                    title:'setting',
                    tabBarIcon: () => <Ionicons name="settings-outline" size={24} color="black" />
                }} />
        </Tabs>
    )
}
