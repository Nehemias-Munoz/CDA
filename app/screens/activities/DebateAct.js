import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';

//Componentes
import EvidenceTypeBar from '../components/EvidenceTypeBar';
import SubmitComponent from '../components/SubmitComponent';
import MyListComponent from '../components/MyListComponent';

const DebateAct = () => {
  //Tipo de componente submit
  const [typeSubmit, setTypeSubmit] = useState();
  //Datos Actividad
  const [activity] = useState({
    id: 4,
    title: 'Debate',
    type: ['Link', 'Audio'],
    description:
      'Te invito a compartir tu opinión, de acuerdo siguiente tema o problema determinado:',
    concept: 'Diversidad',
    instruction:
      'Grabe un audio o video donde presente tu opinión al respecto.',
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
                source={require('../../../assets/images/activities/debate.jpg')}
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
                  source={require('../../../assets/images/activities/debate/diversity.jpeg')}
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

export default DebateAct;