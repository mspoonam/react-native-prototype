import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ChatAvatar from './ChatAvatar';
export default class RecentListItem extends Component {
  constructor(props) {
    super(props);
  }

  didSelectUser = () => {};

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.didSelectUser.bind(this)}
          style={styles.cellTouch}
        >
          <ChatAvatar profile={this.props.profile} />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>{`${this.props.profile.name.title} ${
              this.props.profile.name.first
            } ${this.props.profile.name.last}`}</Text>
            <Text style={styles.ageCity}>
              {this.props.profile.login.username}
            </Text>
            <View style={styles.seperator} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 70
  },
  cellTouch: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    alignItems: 'flex-start'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  userName: {
    color: '#51505d',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 10
  },
  ageCity: {
    color: '#72727d',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 10,
    marginTop: 10
  },
  seperator: {
    backgroundColor: '#dfe0e3',
    height: 1,
    alignItems: 'flex-end',
    marginLeft: 10,
    marginTop: 14
  }
});