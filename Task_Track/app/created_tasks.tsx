import { View, Text, ScrollView, Pressable} from "react-native";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Settings() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">
      <Text className="text-4xl font-bold mb-4 text-center">Tasks</Text>
    <View className="flex-1">
      <ScrollView className="shadow-lg flex-1 bg-amber-50 rounded-xl mb-4 p-4">
        <Text className="mt-1 mb-4 text-center text-2xl font-semibold ">Created Tasks</Text>
        <Text className ="text-center text-lg text-gray-700">List of all created tasks will be displayed here</Text>
        <View className = "items-start mt-4">
              <Pressable onPress={() => router.push("/completed_tasks")} className="mt-6 bg-blue-900 px-4 py-2 rounded">
              <Text className="text-amber-50 text-center">Add Task</Text>

         </Pressable>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}