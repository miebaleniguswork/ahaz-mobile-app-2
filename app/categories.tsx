import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Animated, { SharedValue, interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import {
    FontAwesome5,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";

type RevealProgress = SharedValue<number>;

const AnimatedCategoryItem = ({
  children,
  scrollY,
  windowHeight,
}: {
  children: React.ReactNode;
  scrollY: SharedValue<number>;
  windowHeight: number;
}) => {
  const [layoutY, setLayoutY] = React.useState<number | null>(null);

  const animatedStyle = useAnimatedStyle(() => {
    if (layoutY === null) {
      return {
        opacity: 0,
        transform: [{ translateY: 80 }, { scale: 0.9 }]
      };
    }

    const inputStart = layoutY - windowHeight * 0.8;
    const inputEnd = layoutY - windowHeight * 0.4;
    
    const progress = interpolate(
      scrollY.value,
      [inputStart, inputEnd],
      [0, 1],
      'clamp'
    );

    return {
      opacity: progress,
      transform: [
        { translateY: interpolate(progress, [0, 1], [80, 0]) },
        { scale: interpolate(progress, [0, 1], [0.9, 1]) }
      ]
    };
  });

  return (
    <Animated.View
      onLayout={(e) => setLayoutY(e.nativeEvent.layout.y)}
      style={animatedStyle}
    >
      {children}
    </Animated.View>
  );
};

const Categories = ({ revealProgress }: { revealProgress?: RevealProgress }) => {
  const { height: windowHeight } = useWindowDimensions();
  const scrollY = revealProgress || useSharedValue(0);
  const categories = [
    { id: "1", name: "Digital Skill", icon: "code-tags", library: "MaterialCommunityIcons" },
    { id: "2", name: "Digital Literacy", icon: "laptop", library: "MaterialIcons" },
    { id: "3", name: "Information Technology", icon: "router-wireless", library: "MaterialCommunityIcons" },
    { id: "4", name: "Computer Science", icon: "microchip", library: "FontAwesome5" },
    { id: "5", name: "Cybersecurity", icon: "shield-lock", library: "MaterialCommunityIcons" },
    { id: "6", name: "Tutorial", icon: "auto-fix", library: "MaterialCommunityIcons" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.overhead}>CATEGORIES</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.mainTitle}>COURSE CATEGORIES</Text>

      {categories.map((item, index) => {
        return (
          <AnimatedCategoryItem
            key={item.id}
            scrollY={scrollY}
            windowHeight={windowHeight}
          >
            <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
              <View style={styles.iconWrapper}>
                {item.library === "MaterialCommunityIcons" && (
                  <MaterialCommunityIcons name={item.icon as any} size={24} color="#28a745" />
                )}

                {item.library === "MaterialIcons" && (
                  <MaterialIcons name={item.icon as any} size={24} color="#28a745" />
                )}

                {item.library === "FontAwesome5" && (
                  <FontAwesome5 name={item.icon as any} size={20} color="#28a745" />
                )}
              </View>

              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          </AnimatedCategoryItem>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default Categories;