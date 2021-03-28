import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const EvidenceType = ({ type, setTypeSubmit }) => {
  const [iconos] = useState([
    { id: 1, typeEvidence: 'Audio', name: 'microphone', type: 'material-community' },
    { id: 2, typeEvidence: 'Link', name: 'video', type: 'material-community' },
    { id: 3, typeEvidence: 'Document', name: 'format-text', type: 'material-community' },
    { id: 4, typeEvidence: 'Image', name: 'image-multiple', type: 'material-community' },
  ]);

  return (
    <View style={styles.container}>
      {iconos.map(x => (
        <Icon
          key={x.id}
          size={20}
          raised={true}
          type={x.type}
          name={x.name}
          onPress={() => setTypeSubmit(x.typeEvidence)}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 5,
  },
});
export default EvidenceType;