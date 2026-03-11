import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SharedValue } from "react-native-reanimated";
import Reveal from "../../components/Reveal";

type Props = {
  revealProgress: SharedValue<number>;
};

export default function HeroImage({ revealProgress }: Props) {
  return (
    <View style={styles.container}>
      <Reveal progress={revealProgress} delay={0}>
        <Image
          source={require("../../assets/images/ahaz-team.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </Reveal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  heroImage: {
    width: "100%",
    height: 250,
  },
});
