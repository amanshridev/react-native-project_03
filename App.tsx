import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCard from './components/FlatCard';
import ScrollCard from './components/ScrollCard';
import DeatilsCard from './components/DeatilsCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>App</Text>
          <FlatCard />
          <ScrollCard />
          <DeatilsCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
