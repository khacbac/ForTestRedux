/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { actionDecrement, actionIncrement } from "../redux";

class ReduxSagaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            borderColor: "black",
            borderBottomWidth: 1
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.actionIncrement(1);
            }}
          >
            <Text
              style={{
                fontSize: 16
              }}
            >
              Increment -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.actionDecrement(2);
            }}
          >
            <Text
              style={{
                fontSize: 16
              }}
            >
              Decrement +
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 16
            }}
          >
            {`Count ${this.props.count}`}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.rCount.count
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actionIncrement: step => dispatch(actionIncrement(step)),
    actionDecrement: step => dispatch(actionDecrement(step))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxSagaScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
