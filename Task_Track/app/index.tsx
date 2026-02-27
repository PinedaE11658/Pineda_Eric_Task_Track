import { View, Text, ScrollView, Pressable  } from "react-native";
import { useRouter } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  //const {tasks, toggleTask, deleteTask} = useTasks();
  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">
      <Text className="text-4xl font-bold mb-4 text-center">Task Track</Text>
    <View className="flex-1">
      <ScrollView className="shadow-lg flex-1 bg-amber-50 rounded-xl mb-4 p-4">
        <Text className="mt-1 mb-4 text-center text-2xl font-semibold underline">Active tasks</Text>
        <Text className ="text-center text-lg text-gray-700">This will keep the list of all active tasks</Text>
      
      </ScrollView>
      <Pressable
          onPress={() => router.push("/settings")}
          className="mt-6 bg-blue-500 px-4 py-2 rounded"
          >
            <Text className="text-white text-center">Settings</Text>
        </Pressable>
    </View>
    </SafeAreaView>
  );
}