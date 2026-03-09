import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CourseCategories from './categories';
import PopularCourses from './courses';
import Description from './description';
import Footer from './footer';
import Hero from './hero';
import TopBar from './TopBar';
import Trainers from './trainers';

const Home = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <TopBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Hero />
        <Description />
        <CourseCategories />
        <PopularCourses />
        <Trainers />
        <Footer />
      </ScrollView>
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