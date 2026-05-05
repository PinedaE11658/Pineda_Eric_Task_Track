import { View, Text, ScrollView, Pressable, Alert} from "react-native";
import {useFocusEffect, useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useCallback } from "react";
import { getTasks, deleteTask, init } from "../database/database"
import "../global.css";

type Task = {
  id: string;
  title: string;
  status: string;
  priority: string;
  description: string;
};

export default function Settings() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  useFocusEffect(
    useCallback(() => {
      init();
      const dbTasks = getTasks();
      setTasks(dbTasks);
    }, [])
  );
  const handleDelete = (task: Task) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteTask(task.id);
            setTasks(getTasks()); // refresh list
          },
        },
      ]
    );
  };


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
                          <Pressable
                            onPress={() => handleDelete(task)}
                            className="absolute top-2 right-2 bg-red-500 w-6 h-6 rounded-full items-center justify-center"
                          >
                            <Text className="text-white text-sm font-bold">−</Text>
                          </Pressable>
                          <Text className="text-xl font-bold">{task.title}</Text>

                          <Text className="text-gray-700">
                            Status: {task.status}
                          </Text>

                          <Text className="text-gray-700">
                            Priority: {task.priority}
                          </Text>

                          <Text className="text-gray-700">
                            Description: {task.description || "No description provided."}
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