import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  SafeAreaView,
 
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import notes from "../constants/notes";
import Notes from "../components/notes";
import SearchBar from '../components/searchbar';
import {Input, Icon} from 'react-native-elements'

const Category = ({ navigation, route }) => {
  const { itemId } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [initialNotes] = useState(notes);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const filteredNote = initialNotes.filter(
      (note) => note.folderId === itemId
    );
    setFilteredNotes(filteredNote);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.folderView}>
          <Text style={styles.textFolder}>Notes</Text>
        </View>
      <ScrollView style={styles.scrollView} alwaysBounceVertical={true}>
       <View>
       <SearchBar/>

        
       </View>
        <View >
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
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
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
    maarginTop: 100,
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
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  folderView: {
    marginBlock: 20,
    
  },
  textFolder: {
    fontSize: 36,
    margin: 10,
    fontWeight: 'bold'
  }, 
  inputStyle: {
    height: 40,
    width: "95%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10
  }
});
