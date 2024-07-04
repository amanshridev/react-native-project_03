import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCard from './components/FlatCard';
import ScrollCard from './components/ScrollCard';
import DeatilsCard from './components/DeatilsCard';
import ActionCard from './components/ActionCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>App</Text>
          <FlatCard />
          <ScrollCard />
          <DeatilsCard />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
