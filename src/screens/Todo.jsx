import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../Styles";
import { useState } from "react";
export default function Todo({ userName, id, handleDelete ,index}) {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <View style={{ alignItems: "center" }}>
      <View style={[styles.card,styles.shadow]} key={id}>
        <View>
          <TouchableOpacity onPress={() => handleDelete(id)}>
            <View style={styles.circleDel}>
              <Text style={styles.textDel}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleCheck()}>
            <View style={styles.circleDone}>
              {checked ? (
                <Text style={styles.textDone}>✓</Text>
              ) : (
                <Text style={styles.text}></Text>
              )}
            </View>
      <View style={checked ? styles.line : ""}></View>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{userName}</Text>
        <Text style={styles.userNum}>{index+1}</Text>

      </View>
    </View>
  );
}
