import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';

//Componentes
import EvidenceTypeBar from '../components/EvidenceTypeBar';
import SubmitComponent from '../components/SubmitComponent';
import MyListComponent from '../components/MyListComponent';

const ShortFilmAct = () => {
  //Tipo de componente submit
  const [typeSubmit, setTypeSubmit] = useState();
  //Datos Actividad
  const [activity] = useState({
    id: 12,
    title: 'Cortometraje',
    type: 'Link',
    description:
      'Te invito a crear un cortometraje asociado al siguiente concepto:',
    concept: 'Amistad',
    instruction:
      'Cree una película de hasta 5 minutos, suba a Youtube y comparta el link del video, ejemplo: https://youtu.be/ejemplo.',
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card.Title style={styles.title}>{activity.title}</Card.Title>
              <EvidenceTypeBar
                type={activity.type}
                setTypeSubmit={setTypeSubmit}
              />
              <Card.Image
                style={styles.imageStyle}
                PlaceholderContent={<ActivityIndicator />}
                source={require('../../../assets/images/activities/shortfilms.jpg')}
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
                  source={require('../../../assets/images/activities/shortfilm/amistad.jpg')}
                />
                <Text style={styles.infoTitle}>Instruciones:</Text>
                <Text style={styles.infoDesc}>{activity.instruction}</Text>
              </View>
              {typeSubmit ? <SubmitComponent typeSubmit={typeSubmit} /> : null}
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
});

export default ShortFilmAct;