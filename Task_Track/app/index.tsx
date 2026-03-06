import { View, Text, ScrollView, Pressable  } from "react-native";
import { useRouter } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">
      <Text className="text-4xl font-bold mb-4 text-center">Task Track</Text>
    <View className="flex-1">
      <ScrollView className="shadow-lg flex-1 bg-amber-50 rounded-xl mb-4 p-4">
        <Text className="mt-1 mb-4 text-center text-2xl font-semibold">Home Screen</Text>
        <Text className ="text-center text-lg text-gray-700">This is the home screen of the Task Track app</Text>
      
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}