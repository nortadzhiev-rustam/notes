import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faClipboard,
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

  //date converter function
  const dateConverter = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };


  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Write", { note })}>
      <View style={styles.innerContainer}>
        <FontAwesomeIcon icon={faClipboard} size={16} color={randomColor()} />
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{title}</Text>
          <Text style={styles.dateStyle}>{dateConverter(updatedAt)}</Text>
        </View>
       
      </View>
    </TouchableOpacity>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
  innerContainer: {
    width: "100%",
    height: 60,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  dateStyle: {
    color: "black",
    fontWeight: "regular",
    textAlign: "center",
    fontSize: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
  },
});
