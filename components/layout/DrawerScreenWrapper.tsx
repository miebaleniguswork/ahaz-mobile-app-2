import { View, StyleSheet } from "react-native";
import AuthenticatedTopbar from "../AuthenticatedTopBar";


export default function DrawerScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      <AuthenticatedTopbar />

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 90,
  },
});