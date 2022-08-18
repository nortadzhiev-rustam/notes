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
import {
  faClipboard,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//random color generator
const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
};

const Notes = ({ navigation, note }) => {
  const { title, updatedAt } = note;
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faClipboard} size={24} color={randomColor()} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{title}</Text>
        <Text style={styles.dateStyle}>{updatedAt}</Text>
      </View>
      <Pressable>
        <FontAwesomeIcon icon={faCircleChevronRight} size={24} color='black' />
        </Pressable>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,

  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
  dateStyle: {
    color: "black",
    fontWeight: "regular",
    textAlign: "center",
    fontSize: 12,
  },
    textContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
    },

});
