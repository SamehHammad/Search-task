import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import { styles } from "../../Styles";

export default function Details({ route }) {
  const [user, setUser] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, []);

  if (!user) {
    return <Text style={{ textAlign: "center" }}>Loading...</Text>;
  }
  const images = [
    require("../screens/images/ii.jpg"),
    require("../screens/images/aa.jpeg"),
    require("../screens/images/bb.jpeg"),
    require("../screens/images/cc.jpeg"),
    require("../screens/images/dd.jpeg"),
    require("../screens/images/ee.jpeg"),
    require("../screens/images/ff.jpeg"),
    require("../screens/images/gg.jpeg"),
    require("../screens/images/ii.jpg"),
    require("../screens/images/aa.jpeg"),
  ];

  return (
    <View style={styles.contSearch}>
      <Image
        source={images[id - 1]}
        style={{ width: 300, height: 400, marginTop: 10 }}
      />
      <Text>
        <Text style={{ color: "red", fontSize: 15 }}>User ID: </Text> {user.id}
      </Text>
      <Text>
        <Text style={{ color: "red", fontSize: 15 }}>Name: </Text>
        {user.name}
      </Text>
      <Text>
        <Text style={{ color: "red", fontSize: 15 }}>Email: </Text> {user.email}
      </Text>
      <Text>
        <Text style={{ color: "red", fontSize: 15 }}>Phone: </Text> {user.phone}
      </Text>
      <Text>
        <Text style={{ color: "red", fontSize: 15 }}>Company Name: </Text>{" "}
        {user.company.name}
      </Text>
    </View>
  );
}
