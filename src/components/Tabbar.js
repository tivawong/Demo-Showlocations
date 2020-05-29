/**
 * Footer Component
 */

import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";


class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: "#FFFFFF",
      Contact: "#FFFFFF",
    };
  }
  componentDidMount() {
    if (this.props.col == "Home") {
      this.Home1();
      this.fonthome();
    }
    if (this.props.col == "Contact") {
      this.Contact1();
      this.fontcontact();
    }
  }
  
  Home1() {
    this.setState({ home1: "#FFFFFF" });
    this.setState({ Contact1: "#F75D59" });
  }
  Contact1(){
    this.setState({ home1: "#F75D59" });
    this.setState({ Contact1: "#FFFFFF"});
  }
  fonthome(){
    this.setState({ fonthome: "#E30025" });
    this.setState({ fontcontact : "#FFFFFF" });
  }
  fontcontact() {
    this.setState({ fonthome: "#FFFFFF" });
    this.setState({ fontcontact: "#E30025" });
  }
  

  render() {
    return (
      <View style={{flex: 1,flexDirection: "row",backgroundColor: this.state.home1 }}>
        <TouchableOpacity  
          activeOpacity={0.5}
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
          style={{ flex: 1, backgroundColor: this.state.Home1 }}
        >
          <View style={{ flex: 1, alignItems: "center", marginTop: "4%" }}>
            <Image
              style={{ width: 25, height: 25 }} 
              source={require("../images/map.png")}
              resizeMode="contain"
            />
            <Text style={{ color: this.state.fonthome, fontSize: 20,fontFamily:'CSChatThai', fontWeight: "bold",}}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
{/* 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.props.navigation.navigate("Contact");
          }}
          style={{ flex: 1, backgroundColor: this.state.Contact1 }}
        >
          <View style={{ flex: 1, alignItems: "center", marginTop: "4%"}}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../images/profile.png")}
              resizeMode="contain"
            />
            <Text style={{ color: this.state.fontcontact, fontSize: 20,fontFamily:'CSChatThai', fontWeight: "bold",}}>
              Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


export default Tabbar;
