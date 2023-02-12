import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function All_Products() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_div}>
        <View style={styles.upper_left_div}>
          <Image />
          <View style={styles.admin_texts}>
            <Text style={{ color: "blue", fontSize: 20 }}> Mr.Mukarram</Text>
            <Text style={{ color: "green", fontSize: 20 }}> Admin</Text>
          </View>
        </View>

        <View style={styles.upper_right_div}>
          <Image source={{ uri: "image.png" }} />
        </View>
      </View>

      <Text style={{ color: "blue", fontSize: 22 }}> All Products</Text>
      <View style={styles.prod_list}>
        <Image />
        <View style={styles.prod_text}>
          <Text style={{ color: "green", fontSize: 22 }}> Apple</Text>
          <Text style={{ color: "grey", fontSize: 20 }}> 1. kg</Text>
        </View>
        <Text style={{ color: "grey", fontSize: 22, fontWeight: "bold" }}>
          {" "}
          $2.1
        </Text>
      </View>

      <View style={styles.prod_list}>
        <Image />
        <View style={styles.prod_text}>
          <Text style={{ color: "green", fontSize: 22 }}> Mango</Text>
          <Text style={{ color: "grey", fontSize: 20 }}> 1. kg</Text>
        </View>
        <Text style={{ color: "grey", fontSize: 22, fontWeight: "bold" }}>
          {" "}
          $3.2
        </Text>
      </View>

      <View style={styles.prod_list}>
        <Image />
        <View style={styles.prod_text}>
          <Text style={{ color: "green", fontSize: 22 }}> Kiwi</Text>
          <Text style={{ color: "grey", fontSize: 20 }}> 1. kg</Text>
        </View>
        <Text style={{ color: "grey", fontSize: 22, fontWeight: "bold" }}>
          {" "}
          $5.3
        </Text>
      </View>

      <View style={styles.prod_list}>
        <Image />
        <View style={styles.prod_text}>
          <Text style={{ color: "green", fontSize: 22 }}> Watermelon</Text>
          <Text style={{ color: "grey", fontSize: 20 }}> 1. kg</Text>
        </View>
        <Text style={{ color: "grey", fontSize: 22, fontWeight: "bold" }}>
          {" "}
          $3.5
        </Text>
      </View>

      <View>
        <FontAwesomeIcon icon="square-check" />
        <Text>Popular gadgets come from vendors like:</Text>
        <FontAwesomeIcon icon={["fab", "apple"]} />
        <FontAwesomeIcon icon={["fab", "microsoft"]} />
        <FontAwesomeIcon icon={["fab", "google"]} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowOffset: "0px 2px",
  },
  upper_div: {
    display: "flex",
    justifyContent: "space-between",
    height: 100,
  },
  upper_left_div: {
    display: "flex",
    justifyContent: "flex-start",
  },
  admin_texts: {
    display: "flex",
    flexDirection: "column",
  },
  right_img: {
    width: 48,
    height: 48,
    Top: 42,
  },
  prod_list: {
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "solid",
    width: 300,
    height: 50,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 10,
  },

  prod_text: {
    display: "flex",
    flexDirection: "column",
  },
});
