import React, {Component,PureComponent} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    };
  }

  onChangeText=(text)=>{
    this.setState({text})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={this.onChangeText}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput:{

  }
});
