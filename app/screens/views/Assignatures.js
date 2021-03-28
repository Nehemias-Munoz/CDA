import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Tile } from 'react-native-elements';
import { View, StyleSheet, FlatList } from 'react-native';

const Assignatures = () => {
  const navigation = useNavigation();

  const [assignatures, setAssignatures] = useState([
    { id: 1, name: 'Matematicas' },
    { id: 2, name: 'Lenguaje' },
    { id: 3, name: 'Musica' },
    { id: 4, name: 'Historia' },
    { id: 5, name: 'Artes' },
    { id: 6, name: 'Ciencias' },
    { id: 7, name: 'Algebra' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={assignatures}
          keyExtractor={(assignatures) => assignatures.id.toString()}
          renderItem={({ item }) => (
            <Tile
              onPress={() => navigation.navigate('LearningStyle')}
              featured
              activeOpacity={0.7}
              title={item.name}
              titleStyle={styles.titleStyle}
              containerStyle={styles.tileContainer}
              overlayContainerStyle={styles.tileOverlay}
              imageContainerStyle={styles.imageContainer}
              imageSrc={require('../../../assets/images/assignatures.jpg')}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  content: {
    padding: 15,
  },
  titleStyle: {
    fontSize: 26,
    width: '100%',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  tileOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  tileContainer: {
    height: 120,
    width: '100%',
    borderWidth: 3,
    marginVertical: 5,
    borderColor: '#000',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
});
export default Assignatures;