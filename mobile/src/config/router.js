import {createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import Home from '../screens/Home';
import AuthLoading from '../screens/AuthLoading';
import Auth from '../screens/Auth';
import MapScreen from '../screens/MapScreen';
import Chats from '../screens/Chats';



const RootNav = createBottomTabNavigator(
    {
        Map: MapScreen,
        Home: Home,
        Chats: Chats
    },
    {
    initialRouteName: 'Home'
    }
)

const switchNav = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: Auth,
        App: RootNav
    },
    {
        initialRouteName: 'AuthLoading',
    }
)


export const Root = createAppContainer(switchNav)