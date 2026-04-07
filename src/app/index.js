import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <Text>without navigation bar</Text>
      <Button 
        title="Go to App (With Tabs)" 
        onPress={() => router.push('/screenTwo')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
