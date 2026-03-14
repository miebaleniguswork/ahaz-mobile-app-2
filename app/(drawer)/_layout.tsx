// import AuthenticatedTopbar from "@/components/AuthenticatedTopBar";
// import { Drawer } from "expo-router/drawer";
// import { View } from "react-native";

// export default function Layout() {
//   return (
//     <View style={{ flex: 1 }}>
//       <AuthenticatedTopbar />

//       <View style={{ flex: 1, paddingTop: 80 }}>
//         <Drawer screenOptions={{ headerShown: false }} />
//       </View>
//     </View>
//   );
// }


// import { Drawer } from "expo-router/drawer";

// export default function Layout() {
//   return (
//     <Drawer screenOptions={{ headerShown: false }}>
//       <Drawer.Screen name="learning" />  
//       <Drawer.Screen name="ahaz-logo" />
//       <Drawer.Screen name="messages" />
//       <Drawer.Screen name="packages" />
//       <Drawer.Screen name="social" />
//     </Drawer>
//   );
// }

import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@/components/layout/CustomDrawer";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
   <Drawer.Screen name="social" />
<Drawer.Screen name="learning" />
<Drawer.Screen name="jobs" />
<Drawer.Screen name="messages" />
<Drawer.Screen name="packages" />
<Drawer.Screen name="cvbuilder" />
<Drawer.Screen name="feedback" />
    </Drawer>
  );
}