import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { setRoutesName } from '../store/RouteSlice';  // import the action creator
const Folder = ({ navigation, folder }) => {
  const { title, color, id } = folder;
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(setRoutesName(title));
    navigation.navigate('Notes', { itemId: id, title: title });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.createButton}
      >
        <FontAwesomeIcon icon={faFolderOpen} size={60} color={color} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

export default Folder;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
});
