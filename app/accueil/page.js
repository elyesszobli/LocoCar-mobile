import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const page = () => {
  return (
    <View style={{flex:1,}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 15,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "semibold",
          }}
        >
          Découvrir
        </Text>
        <AntDesign name="search1" size={30} color="black" />
      </View>
    </View>
  );
};

export default page;
