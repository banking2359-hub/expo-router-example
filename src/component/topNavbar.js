import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NavBar({ home }) {
    return (
        <SafeAreaView style={{backgroundColor:'white',paddingVertical:20}}>
            <View style={styles.leftContainer}>
                <Ionicons name="chevron-back" size={30} onPress={home} />
                <Text style={{ color: 'black', fontSize: 25 }}>setting</Text>
            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    leftContainer: {
        paddingHorizontal:15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        columnGap:5,
    }
})