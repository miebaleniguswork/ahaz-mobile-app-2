// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

import { View } from "react-native";

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <Link href="/modal">
//           <Link.Trigger>
//             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//           </Link.Trigger>
//           <Link.Preview />
//           <Link.Menu>
//             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
//             <Link.MenuAction
//               title="Share"
//               icon="square.and.arrow.up"
//               onPress={() => alert('Share pressed')}
//             />

//             <Link.Menu title="More" icon="ellipsis">
//               <Link.MenuAction
//                 title="Delete"
//                 icon="trash"
//                 destructive
//                 onPress={() => alert('Delete pressed')}
//               />
//             </Link.Menu>
//           </Link.Menu>
//         </Link>

//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


const Home= ()=>{
  // return( <View>
  //   this is hello world
  // </View>)

  return <h2>hello </h2>
}

export default Home;


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Footer = () => {
  // Helper function to handle links (emails, phones, websites)
  const handlePress = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150x40?text=Ahazawi+Logo' }} // Replace with your actual local or remote image asset
          style={styles.logo}
        />

        {/* Description */}
        <Text style={styles.description}>
          Ahazawi is more than just a digital learning platform; it's a space where learners can grow their skills and connect with like-minded professionals to shape their careers.
        </Text>

        {/* Contact Section */}
        <Text style={styles.sectionTitle}>Contact</Text>
        
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Phone: </Text>
          <TouchableOpacity onPress={() => handlePress('tel:+251978680000')}>
            <Text style={styles.contactValue}>+251 978 68 00 00</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Email: </Text>
          <TouchableOpacity onPress={() => handlePress('mailto:info@ahazawi.com')}>
            <Text style={styles.contactValue}>info@ahazawi.com</Text>
          </TouchableOpacity>
        </View>

        {/* Social Icons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="facebook-f" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="linkedin-in" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="github" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="youtube" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="telegram-plane" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="whatsapp" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="tiktok" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Address Section */}
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.addressText}>Kahsa Building Floor 3,</Text>
        <Text style={styles.addressText}>Near Abreha Castle,</Text>
        <Text style={styles.addressText}>Mekelle, Tigrai, Ethiopia</Text>
      </View>

      {/* Copyright Bar */}
      <View style={styles.copyrightBar}>
        <Text style={styles.copyrightText}>
          <Text style={styles.copyrightBold}>Ahaz Platforms </Text>
          © 2026.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fafafa', // Light off-white background
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logo: {
    width: 160,
    height: 45,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 24,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
  },
  contactValue: {
    fontSize: 15,
    color: '#28a745', // Green color from the design
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 35,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  addressText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 26,
  },
  copyrightBar: {
    backgroundColor: '#f1f1f1', // Slightly darker grey for the very bottom
    paddingVertical: 20,
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 14,
    color: '#555',
  },
  copyrightBold: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Footer;