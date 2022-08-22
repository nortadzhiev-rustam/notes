import React from "react";

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
import colors from "../constants/colors";


export default function ColorPicker({ setColor }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.colorView}>
        {colors.map((color, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              style={{ width: 30, height: 30, backgroundColor: color.hex }}
              onPress={() => {
                setColor(color.hex);
              }}
            ></TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  colorView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
