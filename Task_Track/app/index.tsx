import { View, Text, ScrollView, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          "https://api.weather.gov/gridpoints/GID/40,99/forecast?units=us",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setForecast(data.properties.periods);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-bold text-blue-500">Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-bold text-blue-500">Error: {error}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView className="flex-1 bg-blue-200  p-4">
      <Text className="text-4xl font-bold mb-4 text-center">Task Track</Text>
    <View className="flex-1">
      <ScrollView className="shadow-lg flex-1 bg-amber-50 rounded-xl mb-4 p-4">
        <Text className="mt-1 mb-4 text-center text-2xl font-semibold">Home Screen</Text>
    <View className="bg-white rounded-xl p-4 mb-4 shadow-lg ">
          <Text className="text-2xl font-semibold text-center mb-2">
            Welcome Back!
          </Text>
          <Text className="text-center text-gray-700">
            Stay on top of your tasks and keep your day organized.
          </Text>
        </View>
          <Pressable
            onPress={() => router.push("/add_tasks")}
            className="bg-blue-900 rounded-md py-3 px-4 mb-3"
          >
            <Text className="text-white text-center font-semibold">
              Add New Task
            </Text>
          </Pressable>
      </ScrollView>
              {forecast.length > 0 && (
          <Text className="text-center text-gray-700">
            Kearney's Tonight Temperature: {forecast[0].temperature}°F
          </Text>
        )}
    </View>
    </SafeAreaView>
  );
}