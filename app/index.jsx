import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Link } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center ">
      <Text className="text-3xl font-sans">Hello World !! </Text>
      <StatusBar style="auto" />
    <Link href="./profile" style ={{color :'blue'}} >Profile</Link>
    </SafeAreaView>
  );
}
