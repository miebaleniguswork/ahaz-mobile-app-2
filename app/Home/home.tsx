import React from "react";
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AnimatedSection from "../../components/animations/AnimatedSection";
// import Footer from "../../components/layout/Footer";
import TopBar from "../../components/layout/TopBar";
import CourseCategories from "./categories";
import HeroImage from "./descriptionImage";
import DescriptionContent from "./descriptionInfo";
import Hero from "./hero";
import Packages from "./packages";
import Trainers from "./trainers";
// import Footer from "@/components/layout/footer";
import Footer from "../../components/layout/Footer"

const categories = [
  { id: "1", name: "Digital Skill", icon: "code-tags", lib: "mc" },
  { id: "2", name: "Digital Literacy", icon: "laptop", lib: "mi" },
  {
    id: "3",
    name: "Information Technology",
    icon: "router-wireless",
    lib: "mc",
  },
  { id: "4", name: "Computer Science", icon: "microchip", lib: "fa" },
  { id: "5", name: "Cybersecurity", icon: "shield-lock", lib: "mc" },
  { id: "6", name: "Tutorial", icon: "auto-fix", lib: "mc" },
];

type RevealProgress = SharedValue<number>;
const CourseCategoriesTyped =
  CourseCategories as unknown as React.ComponentType<{
    revealProgress?: RevealProgress;
  }>;

const Home = () => {
  const scrollY = useSharedValue(0);
  const { height: windowHeight } = useWindowDimensions();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <SafeAreaView edges={["top"]} style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <TopBar />

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      >
        <Hero />
        <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
          {(progress) => <HeroImage revealProgress={progress} />}
        </AnimatedSection>
        <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
          {(progress) => <DescriptionContent revealProgress={progress} />}
        </AnimatedSection>

        <View style={styles.categoryContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.overhead}>CATEGORIES</Text>
            <View style={styles.line} />
          </View>

          <Text style={styles.mainTitle}>COURSE CATEGORIES</Text>
        </View>

        {categories.map((item) => (
          <AnimatedSection
            key={item.id}
            scrollY={scrollY}
            windowHeight={windowHeight}
          >
            <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
              <View style={styles.iconWrapper}>
                {item.lib === "mc" && (
                  <MaterialCommunityIcons
                    name={item.icon as any}
                    size={24}
                    color="#28a745"
                  />
                )}

                {item.lib === "mi" && (
                  <MaterialIcons
                    name={item.icon as any}
                    size={24}
                    color="#28a745"
                  />
                )}

                {item.lib === "fa" && (
                  <FontAwesome5
                    name={item.icon as any}
                    size={20}
                    color="#28a745"
                  />
                )}
              </View>

              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          </AnimatedSection>
        ))}

        {/* <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
          {(progress) => <CourseCategoriesTyped revealProgress={progress} />}
        </AnimatedSection> */}

        <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
          <Packages />
        </AnimatedSection>

        <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
          <Trainers />
        </AnimatedSection>
        <Footer />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     // If your TopBar is 60px high and absolute,
//     // you might need pt: 60 here if Hero doesn't handle it
//   }
// });

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContainer: {
    flexGrow: 1,
    paddingTop: 80,
  },

  categoryContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  overhead: {
    fontSize: 12,
    color: "#888",
    letterSpacing: 1,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#28a745",
    marginLeft: 10,
    opacity: 0.3,
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },

  categoryCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 4,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  iconWrapper: {
    marginRight: 15,
  },

  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Home;

// import React from "react";
// import { StatusBar, StyleSheet, useWindowDimensions } from "react-native";
// import Animated, {
//   SharedValue,
//   interpolate,
//   useAnimatedScrollHandler,
//   useAnimatedStyle,
//   useSharedValue,
// } from "react-native-reanimated";
// import { SafeAreaView } from "react-native-safe-area-context";
// import CourseCategories from "./categories";
// import HeroImage from "./descriptionImage";
// import DescriptionContent from "./descriptionInfo";
// import Footer from "./footer";
// import Hero from "./hero";
// import Packages from "./packages";
// import TopBar from "./TopBar";
// import Trainers from "./trainers";

// type RevealProgress = SharedValue<number>;
// const CourseCategoriesTyped =
//   CourseCategories as unknown as React.ComponentType<{
//     revealProgress?: RevealProgress;
//   }>;

// type AnimatedSectionProps = {
//   children:
//     | React.ReactNode
//     | ((progress: SharedValue<number>) => React.ReactNode);
//   scrollY: SharedValue<number>;
//   windowHeight: number;
// };

// import {
//   measure,
//   useAnimatedRef,
//   useDerivedValue,
// } from "react-native-reanimated";

// const AnimatedSection = ({
//   children,
//   scrollY,
//   windowHeight,
// }: AnimatedSectionProps) => {
//   const ref = useAnimatedRef();

//   const progress = useDerivedValue(() => {
//     const layout = measure(ref);

//     if (!layout) return 0;

//     const inputStart = layout.pageY - windowHeight * 0.8;
//     const inputEnd = layout.pageY - windowHeight * 0.4;

//     return interpolate(scrollY.value, [inputStart, inputEnd], [0, 1], "clamp");
//   });

//   const animatedStyle = useAnimatedStyle(() => ({
//     opacity: progress.value,
//     transform: [
//       { translateY: interpolate(progress.value, [0, 1], [80, 0]) },
//       { scale: interpolate(progress.value, [0, 1], [0.9, 1]) },
//     ],
//   }));

//   return (
//     <Animated.View ref={ref} style={animatedStyle}>
//       {typeof children === "function" ? children(progress) : children}
//     </Animated.View>
//   );
// };

// const Home = () => {
//   const scrollY = useSharedValue(0);
//   const { height: windowHeight } = useWindowDimensions();

//   const scrollHandler = useAnimatedScrollHandler({
//     onScroll: (event) => {
//       scrollY.value = event.contentOffset.y;
//     },
//   });

//   return (
//     <SafeAreaView edges={["top"]} style={styles.screen}>
//       <StatusBar barStyle="dark-content" backgroundColor="#fff" />

//       <TopBar />

//       <Animated.ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContainer}
//         scrollEventThrottle={16}
//         onScroll={scrollHandler}
//       >
//         <Hero />
//         <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
//           {(progress) => (
//             <>
//               <HeroImage revealProgress={progress} />
//             </>
//           )}
//         </AnimatedSection>
//         <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
//           {(progress) => (
//             <>
//               <DescriptionContent revealProgress={progress} />
//             </>
//           )}
//         </AnimatedSection>

//         <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
//           {(progress) => <CourseCategoriesTyped revealProgress={progress} />}
//         </AnimatedSection>
//         {/* <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
//           <PopularCourses />
//         </AnimatedSection> */}

//         <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
//           <Packages />
//         </AnimatedSection>
//         <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
//           <Trainers />
//         </AnimatedSection>
//         <Footer />
//       </Animated.ScrollView>
//     </SafeAreaView>
//   );
// };

// // const styles = StyleSheet.create({
// //   screen: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //     // If your TopBar is 60px high and absolute,
// //     // you might need pt: 60 here if Hero doesn't handle it
// //   }
// // });

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },

//   scrollContainer: {
//     flexGrow: 1,
//     paddingTop: 80,
//   },
// });

// export default Home;
