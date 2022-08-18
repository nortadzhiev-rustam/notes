import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import notes from "../constants/notes";
import Notes from "../components/notes";

const Category = ({ navigation, route }) => {
  const { itemId, title } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [initialNotes, setInitialNotes] = useState(notes);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const filteredNote = initialNotes.filter(
      (note) => note.folderId === itemId
    );
    setFilteredNotes(filteredNote);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={{height: 350, marginVertical: 20}}>
          {filteredNotes.map((note, idx) => {
            return <Notes key={idx} navigation={navigation} note={note} />;
          })}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.createButton}
      >
        <FontAwesomeIcon size={36} icon={faPenToSquare} color='white' />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  createButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  modal: {
    width: "90%",
    height: 500,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  scrollview: {
    width: "90%",
    flex: 1,
    flexDirection: "column",

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
});
