import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import ListProductsScreens from '../screens/ListProductsScreens';
import IngresoProdScreen from '../screens/IngresoProdScreen';
import { NavigationContainer } from '@react-navigation/native';
import ParticipantesScreen from '../screens/ParticipantesScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Tabs" component={MyTabs} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista de Productos" component={ListProductsScreens} />
      <Tab.Screen name="Partcipantes" component={ParticipantesScreen} />
      <Tab.Screen name="Ingreso Productos" component={IngresoProdScreen} />
    </Tab.Navigator>
  );
}

export default function TopTabNavigator(){
  return(
      <NavigationContainer>
          <MyStack/>
      </NavigationContainer>
  )
}