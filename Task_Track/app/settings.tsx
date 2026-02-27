import { View, Text, ScrollView, Pressable} from "react-native";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Settings() {
  const router = useRouter();
  //const {tasks, toggleTask, deleteTask} = useTasks();
  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">
      <Text className="text-4xl font-bold mb-4 text-center">Settings</Text>
    <View className="flex-1">
      <ScrollView className="shadow-lg flex-1 bg-amber-50 rounded-xl mb-4 p-4">
        <Text className="mt-1 mb-4 text-center text-2xl font-semibold ">Task Track Settings</Text>
        <Text className ="text-center text-lg text-gray-700">Some app settings will be in this page</Text>
      
      </ScrollView>
      <Pressable
          onPress={() => router.push("/")}
          className="mt-6 bg-blue-500 px-4 py-2 rounded"
          >
            <Text className="text-white text-center">back</Text>
        </Pressable>
    </View>
    </SafeAreaView>
  );
}