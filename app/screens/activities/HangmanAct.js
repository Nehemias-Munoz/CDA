import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import { Button, Card, Rating } from 'react-native-elements';

const HangmanAct = () => {
  const [activity] = useState({
    id: 1,
    title: 'Hangman',
    type: 'Resource',
    description:
      'Encuentra el concepto relacionado con esta definición:',
    definition: 'Persona entendida en la instalación de los aparatos eléctricos.',
    concept: 'ELECTRICISTA',
    instruction:
      'Escriba el concepto en los recuadros a continuación.',
  });
  //Variables
  const [letters, setLetters] = useState([
    { letter: 'A' }, { letter: 'B' },
    { letter: 'C' }, { letter: 'D' },
    { letter: 'E' }, { letter: 'F' },
    { letter: 'G' }, { letter: 'H' },
    { letter: 'I' }, { letter: 'J' },
    { letter: 'K' }, { letter: 'L' },
    { letter: 'M' }, { letter: 'N' },
    { letter: 'O' }, { letter: 'P' },
    { letter: 'Q' }, { letter: 'R' },
    { letter: 'S' }, { letter: 'T' },
    { letter: 'U' }, { letter: 'V' },
    { letter: 'W' }, { letter: 'X' },
    { letter: 'Y' }, { letter: 'Z' }]);
  const palabraIncognita = activity.concept;
  const [letrasIncognitas] = useState([]);
  const [numeroDeLetras, setNumeroDeLetras] = useState(palabraIncognita.length);
  const [vidas, setVidas] = useState(5);


  useEffect(() => {
    const llenarLetrasIncognitas = () => {
      for (let i = 0; i < palabraIncognita.length; i++) {
        letrasIncognitas[i] = '_';
      }
    };

    //llamado de funciones
    llenarLetrasIncognitas();
  }, []);

  const IngresarLetra = (e) => {
    setLetters(letrasActuales => letrasActuales.filter(letra => letra.letter !== e));
    for (let i = 0; i < palabraIncognita.length; i++) {
      if (palabraIncognita[i] === e) {
        letrasIncognitas[i] = e;
        setNumeroDeLetras(numeroDeLetras - 1);
        return;
      }
      // else {
      //   const vidasRestantes = vidas - 1;
      //   setVidas(vidasRestantes);
      // }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card>
            <ScrollView>
              <Card.Title style={styles.title}>{activity.title}</Card.Title>
              <Card.Image
                style={styles.imageStyle}
                PlaceholderContent={<ActivityIndicator />}
                source={require('../../../assets/images/activities/hangman.jpg')}
              />
              <View style={styles.activityContent}>
                <Text style={styles.infoTitle}>Descripcion:</Text>
                <Text style={styles.infoDesc}>
                  {activity.description} {activity.definition}
                </Text>
                <Text style={styles.infoTitle}>Instruciones:</Text>
                <Text style={styles.infoDesc}>{activity.instruction}</Text>
                <View style={styles.containerConcept}>
                  <Rating
                    type={'heart'}
                    readonly={true}
                    startingValue={vidas}
                    fractions={10}
                  />
                </View>
                <View style={styles.wordContainer}>
                  {letrasIncognitas.map((guiones, i) => (
                    <Text key={i} style={styles.guiones}>{guiones}</Text>
                  ))}
                </View>
                <View style={styles.letterContainer}>
                  {letters.map((letra, i) => (
                    <Button
                      key={i}
                      uppercase={true}
                      type={'outline'}
                      title={letra.letter}
                      disabled={letra.state}
                      buttonStyle={styles.buttonLetter}
                      onPress={() => IngresarLetra(letra.letter)}
                    />
                  ))
                  }
                </View>
              </View>
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
    borderWidth: 0,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
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
  containerConcept: {
    padding: 5,
    justifyContent: 'center',
  },
  wordContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
  },
  guiones: {
    marginRight: 5,
    fontSize: 20,
  },
  letterContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonLetter: {
    width: 30,
    margin: 2,
  },
});

export default HangmanAct;