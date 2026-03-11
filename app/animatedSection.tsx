import { useState } from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function AnimatedSection  ({
  children,
  scrollY,
windowHeight,
}: {
  children:
    | React.ReactNode
    | ((progress: SharedValue<number>) => React.ReactNode);
  scrollY: SharedValue<number>;
  windowHeight: number;
})  {
  const [layoutY, setLayoutY] = useState<number | null>(null);

  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    if (layoutY === null) {
      return {
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