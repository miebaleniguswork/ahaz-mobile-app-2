import React from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type RevealProps = {
  children: React.ReactNode;
  progress: SharedValue<number>;
  delay?: number;
};

export default function Reveal({ children, progress, delay = 0 }: RevealProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const start = delay;
    const end = delay + 0.3;

    const opacity = interpolate(
      progress.value,
      [start, end],
      [0, 1],
      "clamp"
    );

    const translateY = interpolate(
      progress.value,
      [start, end],
      [50, 0],
      "clamp"
    );

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
}
