import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { AntDesign, Entypo, Feather, MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Home from '../screens/App/Home';
import History from '../screens/App/History';
import Setting from '../screens/App/Setting';
import { useNavigationState, useRoute } from '@react-navigation/native';
import Ranking from '../screens/App/Ranking';

const Tab = createBottomTabNavigator<RootTabParamList>();

const AppTabNavigator = ({navigation}: any) => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.accent,
        tabBarStyle: {
          height: 80,
          borderTopColor: colors.background,
          backgroundColor: colors.background
        },
        // tabBarIconStyle: {
        //   padding: 0,
        //   margin: 0
        // },
        // tabBarLabelStyle: {
        //   marginTop: 0,
        //   paddingTop: 0,
        //   paddingBottom: 5,
        // }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' size={25} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="History" 
        component={History} 
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='calendar' size={25} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Ranking" 
        component={Ranking} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="crown" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Setting" 
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={25} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

type RootTabParamList = {
  Home: undefined
  History: undefined
  Ranking: undefined
  Setting: undefined
}
type Props = {
  initialRouteName: string
}

export default AppTabNavigator
