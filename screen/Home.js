import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Folder from "../components/folder";
import ColorPicker from "../components/colorPicker";

import { collection, getDocs, setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState("");
  const [color, setColor] = useState("");
  const [added, setAdded] = useState(false);
  useEffect(() => {
    const getFolders = async () => {
      const querySnapshot = await getDocs(collection(db, "folders"));
      setFolders(querySnapshot.docs.map((doc) => doc.data())); // <--- this is where the error is
      console.log(querySnapshot.docs.map((doc) => doc.data()));
    };
    getFolders();
  }, [added]);

  const addFolder = async () => {
    const newFolder = {
      id: String(folders.length + 1),
      title: folderName,
      color: color,
    };
    await setDoc(doc(db, "folders", String(folders.length + 1)), newFolder);
    setAdded(!added);
    setFolderName("");
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.folderContainer}>
          {folders.map((folder, idx) => {
            return <Folder key={idx} navigation={navigation} folder={folder} />;
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.createButton}
      >
        <FontAwesomeIcon icon={faFolderPlus} size={48} color='orange' />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Create a new folder</Text>
            <TextInput
              underlineColorAndroid={"transparent"}
              placeholder='Enter Folder Name'
              value={folderName}
              onChangeText={(text) => setFolderName(text)}
              style={styles.inputStyle}
            />
            <View style={styles.sellectedColor}>
              <Text>Selected Color: </Text>
              <View
                style={{ backgroundColor: color, width: 30, height: 30 }}
              ></View>
            </View>
            <Text style={styles.colorPickerText}>Please select the color</Text>
            <ColorPicker setColor={(clr) => setColor(clr)} />
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={addFolder}>
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  folderContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 20,
  },
  createButton: {
    width: 80,
    height: 80,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  modal: {
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  sellectedColor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    backgroundColor: "#FF0000",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputStyle: {
    height: 60,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  colorPickerText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});
