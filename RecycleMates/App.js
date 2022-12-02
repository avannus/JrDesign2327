import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

import React from 'react';
import Button from './Components/Buttons';
import { useState } from 'react';

var selection = "is not selected"


export default function App() {

  const [selected, setSelected] = React.useState("");
  const data = [
      {value:'1:00pm'},
      {value:'2:00pm'},
      {value:'3:00pm'},
      {value:'4:00pm'}

  ]
  
  //<Dropdown label = 'Pickup Time' data = {data}/>
  const [current, setCurrent] = useState("Home")
  
  const start = (
    <View style={styles.container}>
        <View style={styles.footerContainer}>
        <Button theme = "primary" label="Login as customer " onPress={() => setCurrent(customer)} />
        <Button theme = "primary" label="Login as Driver " onPress={() => setCurrent(Driver)}/>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
  const customer =  (
    <View style={styles.container}>
        <View style = {{paddingHorizontal:20, paddingVertical:50}}>
        <SelectList setSelected={(val) => selection = val} data={data} onSelect={() => alert("selection made")} />
        </View>
        <View style={styles.backContainer}>
        <Button label="back" onPress={() => setCurrent(start)} />
      </View>
      <StatusBar style="auto" />
    </View>
    
  );

  const Driver =  (
    <View style={styles.container}>
        <View style={styles.backContainer}>
        <Button label="back" onPress={() => setCurrent(start)} />
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
  return current === 'Home' ? start : current;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDF5D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 5,
    alignItems: 'center',
    
  },
  backContainer: {
    flex: 1 / 5,
    alignItems: 'center',
  },
});
