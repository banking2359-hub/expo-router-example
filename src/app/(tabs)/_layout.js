import { router, Tabs } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayot() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'red',
            headerLeft: () => <Ionicons name="chevron-back" size={30} color="black" style={{marginLeft:20,paddingHorizontal:5}} onPress={()=>router.push('/')} />
        }}>
            <Tabs.Screen name="screenThree"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />
                }} />
            <Tabs.Screen name="screenTwo"
                options={{
                    title: 'setting',
                    tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={24} color={color} />
                }} />
        </Tabs>
    )
}