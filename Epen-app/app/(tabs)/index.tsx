import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ahmad Al kahf</Text>
      <View style={styles.imageContainer}>
        <Text style={styles.subtitle}>si botak licin</Text>
        <Image
          source={{
            uri: 'https://radartulungagung.co.id/wp-content/uploads/2024/10/ahmed-alkaf.webp',
          }}
          style={styles.image}
        />
      </View>
      <TextInput
        style={styles.input}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;
