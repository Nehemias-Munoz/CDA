import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

//Componentes
import MyListComponent from '../components/MyListComponent';

const PlantillaImgHorizontal = () => {
  //Datos Actividad
  const [activity] = useState({
    id: 9,
    title: 'Laberinto',
    type: 'Automatic',
    description:
      'Responda la siguiente pregunta, puede acceder a su respuesta recorriendo el laberinto:',
    concept: '¿Cuanto es 3 * 7?',
    instruction:
      'Seleccione la alternativa correcta.',
    options: [
      { id: 1, label: 21 },
      { id: 2, label: 37 },
      { id: 3, label: 10 },
    ]
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card.Title style={styles.title}>{activity.title}</Card.Title>
              <Card.Image
                style={styles.imageStyle}
                PlaceholderContent={<ActivityIndicator />}
                source={require('../../../assets/images/activities/labyrinth.jpg')}
              />
              <View style={styles.activityContent}>
                <Text style={styles.infoTitle}>Descripcion:</Text>
                <Text style={styles.infoDesc}>
                  {activity.description} {activity.concept}
                </Text>
                <Card.Image
                  containerStyle={styles.imageConceptContainer}
                  PlaceholderContent={<ActivityIndicator />}
                  style={styles.imageConcept}
                  source={require('../../../assets/images/activities/labyrinth/labyrinth.jpeg')}
                />
                <Text style={styles.infoTitle}>Instruciones:</Text>
                <Text style={styles.infoDesc}>{activity.instruction}</Text>
                <RadioButton.Group onValueChange={valueOption => setValue(valueOption)} value={value}>
                  {activity.options.map(item => (
                    <RadioButton.Item
                      key={item.id}
                      label={item.label.toString()}
                      value={item.label}
                    />
                  ))}
                </RadioButton.Group>
              </View>
              <Button title={'Enviar'} buttonStyle={styles.buttonStyle} />
              <MyListComponent />
            </ScrollView>
          </Card>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    height: 100,
  },
  title: {
    fontSize: 15,
    textTransform: 'uppercase',
  },
  activityContent: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  infoTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoDesc: {
    fontSize: 14,
    marginVertical: 3,
    fontWeight: 'normal',
    textAlign: 'justify',
  },
  imageConceptContainer: {
    margin: 10,
    borderRadius: 5,
  },
  imageConcept: {
    height: 100,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#062b3c',
  },
});

export default PlantillaImgHorizontal;