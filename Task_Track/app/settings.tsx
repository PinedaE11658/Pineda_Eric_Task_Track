import { View, Text, ScrollView, Pressable} from "react-native";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Settings() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">
      <Text className="text-4xl font-bold mb-4 text-center">Settings</Text>
    <View className="flex-1">
      <ScrollView className="shadow-lg flex-1 bg-amber-50 rounded-xl mb-4 p-4">
        <Text className="mt-1 mb-4 text-center text-2xl font-semibold ">Task Track Settings</Text>
        <View className="bg-white rounded-xl p-4 mb-4 shadow">
          <Text className="text-xl font-bold mb-2">About</Text>
          <Text className="text-gray-700">Task Track v1.0</Text>
          <Text className="text-gray-700">
            A simple app to manage your daily tasks.
          </Text>
        </View>
      
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}