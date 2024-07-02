import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

export default function ScrollCard() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Scroll Card</Text>
        <ScrollView horizontal={true} style={styles.card__box}>
          <View style={[styles.card, styles.redCard]}>
            <Text>Card1</Text>
          </View>
          <View style={[styles.card, styles.greenCard]}>
            <Text>Card1</Text>
          </View>
          <View style={[styles.card, styles.tealCard]}>
            <Text>Card1</Text>
          </View>
          <View style={[styles.card, styles.redCard]}>
            <Text>Card1</Text>
          </View>
          <View style={[styles.card, styles.greenCard]}>
            <Text>Card1</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
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
    marginHorizontal: 5, 
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
