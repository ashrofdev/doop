import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

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
      <View style={styles.image5Stack}>
        <Image
          source={require("../assets/images/doop1.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
        <Text style={styles.transcript2}>Transcript</Text>
      </View>
      <Text style={styles.september142023}>September 14, 2023</Text>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.rect2Row}>
            <View style={styles.rect2}>
              <View style={styles.oneMeetingRow}>
                <Text style={styles.oneMeeting}>One meeting</Text>
                <Text style={styles.teams}>Teams</Text>
              </View>
              <Text style={styles.calendar3}>01:00PM tp 02:00pm</Text>
            </View>
            <Image
              source={require("../assets/images/bell.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </View>
        </View>
        <Image
          source={require("../assets/images/phone.png")}
          resizeMode="contain"
          style={styles.image7}
        ></Image>
      </View>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <View style={styles.rect4Row}>
            <View style={styles.rect4}>
              <View style={styles.oneMeeting2Row}>
                <Text style={styles.oneMeeting2}>One meeting</Text>
                <Text style={styles.teams2}>Teams</Text>
              </View>
              <Text style={styles.text}>01:00PM tp 02:00pm</Text>
            </View>
            <Image
              source={require("../assets/images/bell.png")}
              resizeMode="contain"
              style={styles.image9}
            ></Image>
          </View>
        </View>
        <Image
          source={require("../assets/images/phone.png")}
          resizeMode="contain"
          style={styles.image8}
        ></Image>
      </View>
      <View style={styles.rect5Stack}>
        <View style={styles.rect5}>
          <View style={styles.rect6Row}>
            <View style={styles.rect6}>
              <View style={styles.oneMeeting3Row}>
                <Text style={styles.oneMeeting3}>One meeting</Text>
                <Text style={styles.teams3}>Teams</Text>
              </View>
              <Text style={styles.text2}>01:00PM tp 02:00pm</Text>
            </View>
            <Image
              source={require("../assets/images/bell.png")}
              resizeMode="contain"
              style={styles.image11}
            ></Image>
          </View>
        </View>
        <Image
          source={require("../assets/images/phone.png")}
          resizeMode="contain"
          style={styles.image10}
        ></Image>
      </View>
      <View style={styles.rect7Stack}>
        <View style={styles.rect7}>
          <View style={styles.oneMeeting4StackStackRow}>
            <View style={styles.oneMeeting4StackStack}>
              <View style={styles.oneMeeting4Stack}>
                <Text style={styles.oneMeeting4}>One meeting</Text>
                <View style={styles.rect8}>
                  <Text style={styles.oneMeeting5}>One meeting</Text>
                  <Text style={styles.text3}>01:00PM tp 02:00pm</Text>
                </View>
              </View>
              <Text style={styles.teams4}>Teams</Text>
            </View>
            <Image
              source={require("../assets/images/bell.png")}
              resizeMode="contain"
              style={styles.image13}
            ></Image>
          </View>
        </View>
        <Image
          source={require("../assets/images/phone.png")}
          resizeMode="contain"
          style={styles.image12}
        ></Image>
      </View>
      <Text style={styles.september1420232}>September 14, 2023</Text>
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
    top: 0,
    width: 55,
    height: 73,
    position: "absolute",
    left: 10
  },
  transcript2: {
    top: 47,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15
  },
  image5Stack: {
    width: 66,
    height: 73,
    marginTop: -769,
    marginLeft: 150
  },
  september142023: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 15,
    marginTop: 385,
    marginLeft: 119
  },
  rect: {
    top: 3,
    left: 0,
    width: 306,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 22,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: -2,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 0.23,
    shadowRadius: 5,
    flexDirection: "row"
  },
  rect2: {
    width: 218,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20
  },
  oneMeeting: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 15
  },
  teams: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    marginLeft: 64,
    marginTop: 1
  },
  oneMeetingRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 16,
    marginRight: 16
  },
  calendar3: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    marginTop: 10,
    marginLeft: 15
  },
  image6: {
    width: 15,
    height: 34,
    transform: [
      {
        rotate: "-3.00deg"
      }
    ],
    marginLeft: 54,
    marginTop: 9
  },
  rect2Row: {
    height: 54,
    flexDirection: "row",
    flex: 1,
    marginRight: 19
  },
  image7: {
    top: 0,
    left: 235,
    width: 18,
    height: 60,
    position: "absolute"
  },
  rectStack: {
    width: 306,
    height: 60,
    marginTop: 29,
    marginLeft: 29
  },
  rect3: {
    top: 3,
    left: 0,
    width: 306,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 22,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: -2,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 0.23,
    shadowRadius: 5,
    flexDirection: "row"
  },
  rect4: {
    width: 218,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20
  },
  oneMeeting2: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 15
  },
  teams2: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    marginLeft: 64,
    marginTop: 1
  },
  oneMeeting2Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 16,
    marginRight: 16
  },
  text: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    marginTop: 10,
    marginLeft: 15
  },
  image9: {
    width: 15,
    height: 34,
    transform: [
      {
        rotate: "-3.00deg"
      }
    ],
    marginLeft: 54,
    marginTop: 9
  },
  rect4Row: {
    height: 54,
    flexDirection: "row",
    flex: 1,
    marginRight: 19
  },
  image8: {
    top: 0,
    left: 235,
    width: 18,
    height: 60,
    position: "absolute"
  },
  rect3Stack: {
    width: 306,
    height: 60,
    marginTop: 10,
    marginLeft: 29
  },
  rect5: {
    top: 3,
    left: 0,
    width: 306,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 22,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: -2,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 0.23,
    shadowRadius: 5,
    flexDirection: "row"
  },
  rect6: {
    width: 218,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20
  },
  oneMeeting3: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 15
  },
  teams3: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    marginLeft: 64,
    marginTop: 1
  },
  oneMeeting3Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 16,
    marginRight: 16
  },
  text2: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    marginTop: 10,
    marginLeft: 15
  },
  image11: {
    width: 15,
    height: 34,
    transform: [
      {
        rotate: "-3.00deg"
      }
    ],
    marginLeft: 54,
    marginTop: 10
  },
  rect6Row: {
    height: 54,
    flexDirection: "row",
    flex: 1,
    marginRight: 19
  },
  image10: {
    top: 0,
    left: 235,
    width: 18,
    height: 60,
    position: "absolute"
  },
  rect5Stack: {
    width: 306,
    height: 60,
    marginTop: 7,
    marginLeft: 29
  },
  rect7: {
    top: 3,
    left: 0,
    width: 306,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 22,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: -2,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 0.23,
    shadowRadius: 5,
    flexDirection: "row"
  },
  oneMeeting4: {
    top: 9,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 15
  },
  rect8: {
    top: 0,
    left: 0,
    width: 218,
    height: 54,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20
  },
  oneMeeting5: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 15,
    marginTop: 10,
    marginLeft: 23
  },
  text3: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    marginTop: 9,
    marginLeft: 15
  },
  oneMeeting4Stack: {
    top: 0,
    left: 0,
    width: 218,
    height: 54,
    position: "absolute"
  },
  teams4: {
    top: 10,
    left: 166,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12
  },
  oneMeeting4StackStack: {
    width: 218,
    height: 54
  },
  image13: {
    width: 15,
    height: 34,
    transform: [
      {
        rotate: "-3.00deg"
      }
    ],
    marginLeft: 54,
    marginTop: 9
  },
  oneMeeting4StackStackRow: {
    height: 54,
    flexDirection: "row",
    flex: 1,
    marginRight: 19
  },
  image12: {
    top: 0,
    left: 235,
    width: 18,
    height: 60,
    position: "absolute"
  },
  rect7Stack: {
    width: 306,
    height: 60,
    marginTop: -419,
    marginLeft: 23
  },
  september1420232: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 15,
    marginTop: -107,
    marginLeft: 113
  }
});

export default Profile1;
