import React, { useState } from "react";
import { StatusBar, StyleSheet, useWindowDimensions } from "react-native";
import Animated, { SharedValue, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { SafeAreaView } from 'react-native-safe-area-context';
import CourseCategories from "./categories";
import PopularCourses from "./courses";
import Description from "./description";
import Footer from "./footer";
import Hero from "./hero";
import Packages from "./packages";
import TopBar from "./TopBar";
import Trainers from "./trainers";

type RevealProgress = SharedValue<number>;
const CourseCategoriesTyped =
  CourseCategories as unknown as React.ComponentType<{
    revealProgress?: RevealProgress;
  }>;

const AnimatedSection = ({
  children,
  scrollY,
  windowHeight,
}: {
  children: React.ReactNode | ((progress: SharedValue<number>) => React.ReactNode);
  scrollY: SharedValue<number>;
  windowHeight: number;
}) => {
  const [layoutY, setLayoutY] = useState<number | null>(null);

  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    if (layoutY === null) {
      return {
        opacity: 0,
        transform: [{ translateY: 80 }, { scale: 0.9 }],
      };
    }

    const inputStart = layoutY - windowHeight * 0.8;
    const inputEnd = layoutY - windowHeight * 0.4;

    const progressValue = interpolate(
      scrollY.value,
      [inputStart, inputEnd],
      [0, 1],
      "clamp"
    );

    progress.value = progressValue;

    return {
      opacity: progressValue,
      transform: [
        { translateY: interpolate(progressValue, [0, 1], [80, 0]) },
        { scale: interpolate(progressValue, [0, 1], [0.9, 1]) },
      ],
    };
  });

  return (
    <Animated.View
      onLayout={(e) => setLayoutY(e.nativeEvent.layout.y)}
      style={animatedStyle}
    >
      {typeof children === "function" ? children(progress) : children}
    </Animated.View>
  );
};

const Home = () => {
  const scrollY = useSharedValue(0);
  const { height: windowHeight } = useWindowDimensions();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <SafeAreaView edges={['top']} style={styles.screen}>
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
          {(progress) => <Description revealProgress={progress} />}
        </AnimatedSection>
        <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
          {(progress) => <CourseCategoriesTyped revealProgress={progress} />}
        </AnimatedSection>
        <AnimatedSection scrollY={scrollY} windowHeight={windowHeight}>
          <PopularCourses />
        </AnimatedSection>

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
}

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
    paddingTop: 80
  }
})

export default Home;