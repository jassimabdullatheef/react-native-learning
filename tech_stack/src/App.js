import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducers";

import { Header } from './components/common'
import LibraryList from './components/LibraryList'

const App = () => {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <Header title="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
