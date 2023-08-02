import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/background_2.png")}
          // resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.rect}>
            <Text style={styles.email}>Email</Text>
          </View>
          <View style={styles.rect5}>
            <Text style={styles.password}>Password</Text>
          </View>
          <View style={styles.rect4Row}>
            <View style={styles.rect4}></View>
            <Text style={styles.rememberMe}>Remember me</Text>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.signIn}>Sign in</Text>
          </View>
          <View style={styles.rememberMe2Row}>
            <Text style={styles.rememberMe2}>Don&#39;t have an account?</Text>
            <Text style={styles.signUp}>Sign up.</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/doop1.png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Text style={styles.signInToContinue}>Sign in to continue</Text>
        </ImageBackground>
      </View>
      <Text style={styles.signIn2}>Sign in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 150,
    height: 648,
    position: "absolute",
    left: 0
  },
  image_imageStyle: {},
  rect: {
    width: 302,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.39)",
    borderRadius: 6,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.67,
    shadowRadius: 0,
    marginTop: 102,
    marginLeft: 176
  },
  email: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    marginTop: 15,
    marginLeft: 15
  },
  rect5: {
    width: 302,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.39)",
    borderRadius: 6,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.67,
    shadowRadius: 0,
    marginTop: 18,
    marginLeft: 176
  },
  password: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 15
  },
  rect4: {
    width: 15,
    height: 18,
    backgroundColor: "#E6E6E6",
    opacity: 0.51
  },
  rememberMe: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15,
    marginLeft: 12
  },
  forgotPassword: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 15,
    marginLeft: 57
  },
  rect4Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 176,
    marginRight: 173
  },
  rect2: {
    width: 302,
    height: 53,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 42,
    marginTop: 28,
    marginLeft: 176
  },
  signIn: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 14,
    marginLeft: 115
  },
  rememberMe2: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15
  },
  signUp: {
    fontFamily: "roboto-900",
    color: "#121212",
    fontSize: 15,
    marginLeft: 8
  },
  rememberMe2Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 176,
    marginRight: 260
  },
  image2: {
    top: 0,
    left: 227,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image2_imageStyle: {},
  signInToContinue: {
    fontFamily: "roboto-300",
    color: "#121212",
    fontSize: 15,
    marginTop: 171,
    marginLeft: 38
  },
  imageStack: {
    width: 651,
    height: 703,
    marginTop: 109,
    marginLeft: -138
  },
  signIn2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: -721,
    marginLeft: 166
  }
});

export default Login;
