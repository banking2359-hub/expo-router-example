import { Tabs } from "expo-router"
const _layout = () => {
    return (
        <Tabs >
            <Tabs.Screen name="screenThree" />
            <Tabs.Screen name="screenTwo" />
        </Tabs>
    )
}

export default _layout
