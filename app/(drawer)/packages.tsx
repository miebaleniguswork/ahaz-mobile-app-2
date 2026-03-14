import PackagesSection from "@/components/home/packagesSection";
import DrawerScreenWrapper from "@/components/layout/DrawerScreenWrapper";
import { ScrollView } from "react-native";

export default function Packages() {
  return (
    <DrawerScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PackagesSection />
      </ScrollView>
    </DrawerScreenWrapper>
  );
}