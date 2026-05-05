import { Tabs } from "expo-router";
import "../global.css";
import { Text } from "react-native";
import { init } from "../database/database"



export default function Layout() {
  init();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1e3a5f" },
        tabBarActiveTintColor: "#FFFF00",
        tabBarInactiveTintColor: "#FFFBEB",
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold", margin: 12 },
        tabBarIconStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="created_tasks" options={{ title: "Tasks" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="add_tasks" options={{ href: null}} />
    </Tabs>
  );
}