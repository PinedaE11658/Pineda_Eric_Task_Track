import { View, Text, ScrollView, Pressable, TextInput, Alert} from "react-native";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import "../global.css";

export default function Settings() {
const router = useRouter();
const [taskName, setTaskName] = useState("");
const [taskDescription, setTaskDescription] = useState("");
const [taskPriority, setTaskPriority] = useState("");
const [taskStatus, setTaskStatus] = useState("");
  const handleAddTask = () => {
    if (!taskName.trim()) {
      Alert.alert("Error", "Please enter a task name.");
      return;
    }
    Alert.alert("Success", "Task added successfully.");
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">
      <Text className="text-4xl font-bold mb-4 text-center">Tasks</Text>
    <View className="flex-1">
      <ScrollView className="shadow-lg flex-1 bg-amber-50 rounded-xl mb-4 p-4">
        <Text className="mt-1 mb-4 text-center text-2xl font-semibold ">New Task</Text>
        <Text className ="text-center text-lg text-gray-700">Enter task details here</Text>
        <View className="mt-4">
          <TextInput
            placeholder="Task Name"
            value={taskName}
            onChangeText={setTaskName}
            className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          />
          <TextInput
            placeholder="Task Status"
            value={taskStatus}
            onChangeText={setTaskStatus}
            className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          /> 
          <TextInput
            placeholder="Task Priority"
            value={taskPriority}
            onChangeText={setTaskPriority}
            className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          /> 
          <TextInput
            placeholder="Task Description"
            value={taskDescription}
            onChangeText={setTaskDescription}
            className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          />
          <Pressable onPress={handleAddTask} className="mt-6 bg-blue-900 px-4 py-2 rounded">
            <Text className="text-amber-50 text-center">Add Task</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Pressable onPress={() => router.push("/created_tasks")} className="mt-6 bg-blue-900 px-4 py-2 rounded">
              <Text className="text-amber-50 text-center">Back</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}