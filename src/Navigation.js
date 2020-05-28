
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashScreen from './SplashScreen';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';
import LoginContainer from './containers/LoginContainer';

const SwitchNav = createSwitchNavigator(
    {
        SplashScreen,
        Login : LoginContainer,
        Login: LoginContainer,
        Home: HomeContainer,
        Contact: ContactContainer,
    },
    {
        initialRouteName: 'SplashScreen'
    }
)

export default createAppContainer(SwitchNav);