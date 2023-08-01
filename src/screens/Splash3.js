import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Splash3(props) {
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
          <View style={styles.rect}></View>
          <Text style={styles.cloneYourVoice}>Clone your Voice</Text>
          <Text style={styles.loremIpsum3}>
            Lorem Ipsum iudrgfvrygfrg giehguierg{"\n"} trhtrhthn
            urbgeiugrurthrth rthrh jyy rs{"\n"}inductnt ut yg dalore rthtr
          </Text>
          <View style={styles.rect2}>
            <Text style={styles.next}>Next</Text>
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
    top: 185,
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
  rect: {
    width: 302,
    height: 303,
    backgroundColor: "#E6E6E6",
    borderRadius: 28,
    marginTop: 124,
    marginLeft: 190
  },
  cloneYourVoice: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 18,
    marginTop: 37,
    marginLeft: 265
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 17,
    marginTop: 20,
    marginLeft: 197
  },
  rect2: {
    width: 302,
    height: 53,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 42,
    marginTop: 104,
    marginLeft: 190
  },
  next: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 15,
    marginLeft: 123
  },
  imageStack: {
    width: 678,
    height: 833,
    marginTop: -21,
    marginLeft: -152
  }
});

export default Splash3;
