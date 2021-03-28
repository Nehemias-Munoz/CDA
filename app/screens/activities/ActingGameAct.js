import React, { useState } from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements';
//Componentes
import EvidenceType from '../components/EvidenceType';
import SubmitComponent from '../components/SubmitComponent';

const ActingGameAct = () => {
  //Tipo de componente submit
  const [typeSubmit, setTypeSubmit] = useState();
  //Datos Actividad
  const [activity] = useState({
    id: 1,
    title: 'Actuación',
    type: 'Video',
    description:
      'Crea un video de un minuto, donde tu y tus amigos representen el siguiente concepto:',
    concept: 'Planeta',
    instruction:
      'Grabe un video, suba a Youtube y comparta el link del video, ejemplo: https://youtu.be/ejemplo.',
  });

  return (
    <>
      <View style={styles.container}>
        <Card>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card.Title style={styles.title}>{activity.title}</Card.Title>
            <EvidenceType
              type={activity.type}
              setTypeSubmit={setTypeSubmit} />
            <Card.Image
              style={styles.imageStyle}
              source={require('../../../images/activities/shortfilms.jpg')}
            />
            <View style={styles.activityContent}>
              <Text style={styles.infoTitle}>Descripcion:</Text>
              <Text style={styles.infoDesc}>
                {activity.description} {activity.concept}
              </Text>
              <View style={styles.containerConcept}>
                <Card.Image
                  containerStyle={styles.imageConceptContainer}
                  PlaceholderContent={<ActivityIndicator />}
                  style={styles.imageConceptStyle}
                  source={require('../../../images/activities/actinggame/planet.png')}
                />
              </View>
              <Text style={styles.infoTitle}>Instruciones:</Text>
              <Text style={styles.infoDesc}>{activity.instruction}</Text>
            </View>
            {typeSubmit ? <SubmitComponent typeSubmit={typeSubmit} /> : null}
          </ScrollView>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 15,
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
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoDesc: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'justify',
  },
  imageStyle: {
    height: 100,
  },
  containerConcept: {
    padding: 5,
    alignItems: 'center',
  },
  imageConceptContainer: {
    margin: 10,
    borderRadius: 5,
  },
  imageConceptStyle: {
    width: 100,
    height: 100,
  },
});

export default ActingGameAct;