import { View, Text, ScrollView, Pressable} from "react-native";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Settings() {
  const router = useRouter();
   const tasks = [
    {
      id: 1,
      title: "Finish App Assignment",
      status: "In Progress",
      priority: "High",
      dueDate: "Apr 12"
    }];
  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">
      <Text className="text-4xl font-bold mb-4 text-center">Tasks</Text>
    <View className="flex-1">
      <ScrollView className="shadow-lg flex-1 bg-amber-50 rounded-xl mb-4 p-4">
        <Text className="mt-1 mb-4 text-center text-2xl font-semibold ">Created Tasks</Text>
          {tasks.length > 0 ? (
                      tasks.map((task) => (
                        <View
                          key={task.id}
                          className="bg-white rounded-lg p-4 mb-3 shadow"
                        >
                          <Text className="text-xl font-bold">{task.title}</Text>

                          <Text className="text-gray-700">
                            Status: {task.status}
                          </Text>

                          <Text className="text-gray-700">
                            Priority: {task.priority}
                          </Text>

                          <Text className="text-gray-700">
                            Due: {task.dueDate}
                          </Text>
                        </View>
                      ))
                    ) : (
                      <Text className="text-center text-lg text-gray-700">
                        There are currently no tasks created.
                      </Text>
                    )}

        <View className = "items-start mt-4">
              <Pressable onPress={() => router.push("/add_tasks")} className="mt-6 bg-blue-900 px-4 py-2 rounded">
              <Text className="text-amber-50 text-center">Add Task</Text>

         </Pressable>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}