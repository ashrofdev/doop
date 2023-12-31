import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Profile(props) {
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
        <View style={styles.rect2}>
          <View style={styles.userIdColumnRow}>
            <View style={styles.userIdColumn}>
              <Text style={styles.userId}>User ID</Text>
              <Text style={styles.britneysparks}>britneysparks</Text>
            </View>
            <Image
              source={require("../assets/images/copy.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
          </View>
          <View style={styles.accountNumberColumnRow}>
            <View style={styles.accountNumberColumn}>
              <Text style={styles.accountNumber}>Account Number</Text>
              <Text style={styles.britneysparks2}>39830473625</Text>
            </View>
            <Image
              source={require("../assets/images/copy.png")}
              resizeMode="contain"
              style={styles.image8}
            ></Image>
          </View>
        </View>
        <View style={styles.image11Row}>
          <Image
            source={require("../assets/images/edit_profile.png")}
            resizeMode="contain"
            style={styles.image11}
          ></Image>
          <Text style={styles.editProfileDetails}>Edit Profile Details</Text>
        </View>
        <View style={styles.image10Row}>
          <Image
            source={require("../assets/images/change_pin.png")}
            resizeMode="contain"
            style={styles.image10}
          ></Image>
          <Text style={styles.changePin}>Change PIN</Text>
        </View>
        <View style={styles.image9Row}>
          <Image
            source={require("../assets/images/logout.png")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
          <Text style={styles.logout}>Logout</Text>
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
    backgroundColor: "rgba(255,255,255,1)",
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
  rect2: {
    width: 261,
    height: 147,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 3,
      width: 2
    },
    elevation: 150,
    shadowOpacity: 0.11,
    shadowRadius: 50,
    borderRadius: 10,
    marginTop: 28,
    marginLeft: 29
  },
  userId: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12
  },
  britneysparks: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 15
  },
  userIdColumn: {
    width: 91
  },
  image7: {
    width: 19,
    height: 18,
    marginLeft: 105,
    marginTop: 7
  },
  userIdColumnRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 18,
    marginRight: 28
  },
  accountNumber: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12
  },
  britneysparks2: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 15
  },
  accountNumberColumn: {
    width: 94
  },
  image8: {
    width: 19,
    height: 18,
    marginLeft: 103
  },
  accountNumberColumnRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 17,
    marginRight: 28
  },
  image11: {
    width: 38,
    height: 37
  },
  editProfileDetails: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15,
    marginLeft: 16,
    marginTop: 10
  },
  image11Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 31,
    marginRight: 112
  },
  image10: {
    width: 38,
    height: 37
  },
  changePin: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15,
    marginLeft: 13,
    marginTop: 13
  },
  image10Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 31,
    marginRight: 156
  },
  image9: {
    width: 38,
    height: 37
  },
  logout: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15,
    marginLeft: 16,
    marginTop: 10
  },
  image9Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 31,
    marginRight: 185
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 122,
    height: 122,
    position: "absolute"
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

export default Profile;
