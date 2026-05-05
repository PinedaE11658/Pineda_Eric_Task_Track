import { View, Text, ScrollView, Pressable, Vibration} from "react-native";
import {useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { useState } from "react";

export default function Settings() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const makeVibration = () => {
    try {
      Vibration.vibrate(500);
      setMessage("Device has vibrated! :)");
    } catch (error) {
      setMessage("Device was unable to vibrate :(")
    }
  };

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
        <Pressable onPress={makeVibration} className=" bg-blue-900 rounded-lg py-3 px-6 shadow-lg">
          <Text className="text-amber-50 text-center">Test your devices Vibration!</Text>
        </Pressable>
        <Text className="text-red-500 py-5 text-center">{message}</Text>

      
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}