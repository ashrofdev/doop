import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Splash1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/background_2.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <ImageBackground
          source={require("../assets/images/background_1.png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <View style={styles.loremIpsumStack}>
            <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
            <Image
              source={require("../assets/images/doop.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
          <View style={styles.loremIpsum3Stack}>
            <Text style={styles.loremIpsum3}>
              Lorem Ipsum iudrgfvrygfrg giehguierg{"\n"}ugiuergueirugbureigrger
              trhtrhthn {"\n"}urbgeiugrurthrth rthrh tyhhry rthtr
            </Text>
            <Text style={styles.text2}>
              Lorem Ipsum iudrgfvrygfrg giehguierg{"\n"}ugiuergueirugbureigrger
              trhtrhthn {"\n"}urbgeiugrurthrth rthrh tyhhry rthtr
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 184,
    width: 651,
    height: 648,
    position: "absolute",
    left: 14
  },
  image2: {
    top: 0,
    left: 0,
    width: 678,
    height: 807,
    position: "absolute"
  },
  image2_imageStyle: {},
  loremIpsum: {
    top: 153,
    left: 58,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  image3: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  loremIpsumStack: {
    width: 200,
    height: 200,
    marginTop: 265,
    marginLeft: 241
  },
  loremIpsum3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 14
  },
  text2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 14
  },
  loremIpsum3Stack: {
    width: 234,
    height: 75,
    marginLeft: 224
  },
  imageStack: {
    width: 678,
    height: 832,
    marginTop: -20,
    marginLeft: -152
  }
});

export default Splash1;
