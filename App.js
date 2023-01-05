import React from 'react';
import {
  StatusBar,
  StyleSheet
} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import Colors from './constants/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <>
      <StatusBar/>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name='MealsCategories' 
                component={CategoryScreen} 
                options={{
                  title: 'All Categories',
                  headerStyle: {backgroundColor: Colors.inverse},
                  headerTintColor: Colors.offWhite,
                }}
              />
              <Stack.Screen 
                name='MealsOverview' 
                component={MealsOverviewScreen}
                // options={
                //   ({route, navigation}) => {
                //     const catId = route.params.categoryId;
                //     return {
                //         title: catId
                //     };}
                //   }
                options={{
                  headerStyle: {backgroundColor: Colors.inverse},
                  headerTintColor: Colors.offWhite
                }}
              />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    color: 'white',
    backgroundColor: 'white'
  },
  background: {
    backgroundColor: Colors.backgroundColor,
}
});
StatusBar.setBarStyle('light-content', true);
export default App;
