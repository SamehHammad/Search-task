import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { styles } from "../../Styles";

export default function Users({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const listRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);

  const handleChange = useCallback((text) => {
    setSearchText(text);
    if (listRef.current) {
      listRef.current.scrollToEnd();
    }
  }, []);
  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <View>
      
      <TextInput
        placeholder="Search For users..."
        value={searchText}
        style={styles.input}
        onChangeText={handleChange}
      />
      <View>
        <View style={styles.contSearch}>
          {searchText ? (
            <FlatList
              data={filteredUsers}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("User Details", { id: item.id });
                  }}
                >
                  <Text style={[styles.inputSearch, styles.shadow]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={({ id }) => id}
            ></FlatList>
          ) : (
            ""
          )}
        </View>
      </View>
    </View>
  );
}
