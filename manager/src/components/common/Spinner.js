import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => {
  return (
    <View style={style.containerStyle}>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const style = {
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export { Spinner };
