import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.heading}>FlatCard</Text>
      <View style={styles.card__box}>
        <View style={[styles.card, styles.redCard]}>
          <Text>Card1</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text>Card1</Text>
        </View>
        <View style={[styles.card, styles.tealCard]}>
          <Text>Card1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  card__box: {
    flexDirection: 'row',
    gap: 5,
    padding: 5,
    margin: 'auto',
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  redCard: {
    backgroundColor: 'red',
  },
  greenCard: {
    backgroundColor: 'green',
  },
  tealCard: {
    backgroundColor: 'teal',
  },
});
