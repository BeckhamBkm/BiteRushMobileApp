import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Components/HomePage';
import TestComponent from './Components/TestComponent';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchList from './Components/SearchList';
import RestuarantPage from './Components/RestuarantPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}}  name='Home' component={HomePage}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='SearchList' component={SearchList}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='RestuarantPage' component={RestuarantPage}></Stack.Screen>
      </Stack.Navigator>
      
    </NavigationContainer>
    
    // <TestComponent />
  );
}
