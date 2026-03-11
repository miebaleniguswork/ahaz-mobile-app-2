import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Trainers = () => {


  const trainerData = [
    {
      id: '1',
      name: 'Asmelash Girmay',
      role: 'Digitalization and Cybersecurity',
      bio: "A lecturer at MIT, Ethiopia, holds BSc and MSC degrees from MIT and KTH respectively. He's a digitalization and cybersecurity expert with 12 years of software development experience. Asm also founded Ahaz Platforms.",
      image: require('../../assets/images/trainer_asmelash.avif'),
    },
    {
      id: '2',
      name: 'Tedros Seyfu',
      role: 'Brand Development',
      bio: "A branding expert specializing in identity branding, brand guidelines, graphic design, social media marketing, and storytelling. He not only works on branding projects but also provides training in these areas.",
      image: require('../../assets/images/trainer_tedros.avif'),
    },
    {
      id: '3',
      name: 'Teklay Gereziher',
      role: 'Software Development',
      bio: "A software developer with a BSc from MIT, Ethiopia, has experience in creating software systems. He offers simple software development training online and in person for interns and learners.",
      image: require('../../assets/images/trainer_teklay.avif'),
    },
    {
      id: '4',
      name: 'Bruk Kiros',
      role: 'Surveillance Systems',
      bio: "A civil engineering graduate from Debremarkos University, is a surveillance system expert. With experience in installing security cameras for organizations like UNICEF, he also provides training for surveillance systems.",
      image: require('../../assets/images/trainer_bruk.avif'),
    },
    {
      id: '5',
      name: 'Tesfay Tareke',
      role: 'Philosophy and Cyberethics',
      bio: "A philosophy lecturer at Mekelle University, with BA and MA degrees from Addis Ababa University. Specializing in ethics, including cyberethics, Tesfu brings a rich understanding of social sciences to teaching and educational programs.",
      image: require('../../assets/images/trainer_tesfay.avif'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.overhead}>TRAINERS</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.mainTitle}>POPULAR TRAINERS</Text>

      {trainerData.map((trainer) => (
        <View key={trainer.id} style={styles.trainerCard}>
          <Image source={trainer.image} style={styles.avatar} />
          <Text style={styles.trainerName}>{trainer.name}</Text>
          <Text style={styles.trainerRole}>{trainer.role}</Text>
          <Text style={styles.trainerBio}>{trainer.bio}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  overhead: { fontSize: 12, color: '#888', letterSpacing: 1 },
  line: { flex: 1, height: 1, backgroundColor: '#28a745', marginLeft: 10, opacity: 0.3 },
  mainTitle: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 30 },
  trainerCard: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100, // Makes it a perfect circle
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  trainerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  trainerRole: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  trainerBio: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default Trainers;