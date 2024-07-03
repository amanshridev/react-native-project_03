import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import React from 'react';

function showAlert(){
    alert("This is an alert");
}

export default DeatilsCard = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.card}>
          <Image style={style.image} source={require(`../accets/img.jpg`)} />
          <Text style={style.headText}>DeatilsCard</Text>
          <Text style={style.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          </Text>
          <Button title="Save" style={style.button} onPress={showAlert}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    padding: 20,
    borderRadius: 10,
    color: 'black',
  },
  image: {
    width: '50%',
    height: 200,
    margin: 'auto',
  },
  headText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loremText: {
    textAlign: 'center',
    color: 'black',
  },
  button: {
    backgroundColor: 'transparent',
  },
});
