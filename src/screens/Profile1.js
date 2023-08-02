import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Profile1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageColumnRow}>
        <View style={styles.imageColumn}>
          <Image
            source={require("../assets/images/home1.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.calendar}>Calendar</Text>
        </View>
        <View style={styles.image2Column}>
          <Image
            source={require("../assets/images/calendar.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.meeting}>Meeting</Text>
        </View>
        <View style={styles.image3Column}>
          <Image
            source={require("../assets/images/transcript.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.transcript}>Transcript</Text>
        </View>
        <View style={styles.image4Stack}>
          <Image
            source={require("../assets/images/account1.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.account}>Account</Text>
        </View>
      </View>
      <ImageBackground
        source={require("../assets/images/doop1.png")}
        resizeMode="contain"
        style={styles.image5}
        imageStyle={styles.image5_imageStyle}
      >
        <Text style={styles.text}>Profile</Text>
      </ImageBackground>
      <View style={styles.rect}>
        <Image
          source={require("../assets/images/illustration_2.png")}
          resizeMode="contain"
          style={styles.image7}
        ></Image>
        <Text style={styles.areYouSure}>Are You Sure?</Text>
        <Text style={styles.userId1}>
          Are you sure you want to logout from this account? you can log bascl
          in easily
        </Text>
        <View style={styles.rect2}>
          <Text style={styles.createNewAccount}>Create New Account</Text>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.createNewAccount2}>
            Login to Existing Account
          </Text>
        </View>
      </View>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 122.41 122" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(236,236,236,1)"
            strokeWidth={7}
            fill="rgba(220,211,253,1)"
            cx={61}
            cy={61}
            rx={58}
            ry={58}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 39.35 37" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(236,236,236,1)"
            strokeWidth={15}
            fill="rgba(220,211,253,1)"
            cx={20}
            cy={19}
            rx={12}
            ry={11}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/pencil-fill_2.png")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
      </View>
      <Text style={styles.britneySparks}>Britney Sparks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 30,
    height: 29,
    marginLeft: 15
  },
  calendar: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15,
    marginTop: 7
  },
  imageColumn: {
    width: 59
  },
  image2: {
    width: 31,
    height: 31,
    marginLeft: 11
  },
  meeting: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15,
    marginTop: 4
  },
  image2Column: {
    width: 53,
    marginLeft: 29,
    marginTop: 1
  },
  image3: {
    width: 33,
    height: 34,
    marginLeft: 16
  },
  transcript: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15,
    marginTop: 1
  },
  image3Column: {
    width: 66,
    marginLeft: 28,
    marginTop: 1
  },
  image4: {
    top: 0,
    left: 9,
    width: 35,
    height: 38,
    position: "absolute"
  },
  account: {
    top: 36,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15
  },
  image4Stack: {
    width: 55,
    height: 53,
    marginLeft: 27
  },
  imageColumnRow: {
    height: 53,
    flexDirection: "row",
    marginTop: 730,
    marginLeft: 29,
    marginRight: 29
  },
  image5: {
    width: 55,
    height: 73,
    marginTop: -769,
    marginLeft: 160
  },
  image5_imageStyle: {},
  text: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15,
    marginTop: 56,
    marginLeft: 3
  },
  rect: {
    width: 316,
    height: 416,
    backgroundColor: "rgba(220,211,253,0.51)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 3,
      width: 2
    },
    elevation: 150,
    shadowOpacity: 0.11,
    shadowRadius: 50,
    borderRadius: 11,
    marginTop: 206,
    marginLeft: 28
  },
  image7: {
    width: 105,
    height: 103,
    marginTop: 11,
    marginLeft: 107
  },
  areYouSure: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 25,
    marginTop: 19,
    marginLeft: 81
  },
  userId1: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    height: 50,
    width: 220,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 21,
    marginLeft: 56
  },
  rect2: {
    width: 244,
    height: 42,
    backgroundColor: "rgba(155,129,251,1)",
    borderRadius: 32,
    marginTop: 31,
    marginLeft: 46
  },
  createNewAccount: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 12,
    marginLeft: 48
  },
  rect3: {
    width: 244,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    marginTop: 16,
    marginLeft: 43
  },
  createNewAccount2: {
    fontFamily: "roboto-500",
    color: "rgba(155,129,251,1)",
    fontSize: 15,
    marginTop: 12,
    marginLeft: 37
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 122,
    height: 122,
    position: "absolute",
    opacity: 0.82
  },
  ellipse2: {
    top: 93,
    left: 43,
    width: 39,
    height: 37,
    position: "absolute"
  },
  image6: {
    top: 104,
    left: 48,
    width: 32,
    height: 17,
    position: "absolute"
  },
  ellipseStack: {
    width: 122,
    height: 130,
    marginTop: -601,
    marginLeft: 122
  },
  britneySparks: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 119
  }
});

export default Profile1;
