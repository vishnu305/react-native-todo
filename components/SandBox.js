import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SandBox() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: "#ddd",
  },
});
