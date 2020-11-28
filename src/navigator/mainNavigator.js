import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings179486Navigator from '../features/Settings179486/navigator';
import Settings179484Navigator from '../features/Settings179484/navigator';
import SignIn2179482Navigator from '../features/SignIn2179482/navigator';
import Settings179480Navigator from '../features/Settings179480/navigator';
import UserProfile179473Navigator from '../features/UserProfile179473/navigator';
import Settings179472Navigator from '../features/Settings179472/navigator';
import Settings179470Navigator from '../features/Settings179470/navigator';
import SignIn2179468Navigator from '../features/SignIn2179468/navigator';
import Settings179466Navigator from '../features/Settings179466/navigator';
import UserProfile179459Navigator from '../features/UserProfile179459/navigator';
import Settings179458Navigator from '../features/Settings179458/navigator';
import Settings179456Navigator from '../features/Settings179456/navigator';
import SignIn2179454Navigator from '../features/SignIn2179454/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings179486: { screen: Settings179486Navigator },
Settings179484: { screen: Settings179484Navigator },
SignIn2179482: { screen: SignIn2179482Navigator },
Settings179480: { screen: Settings179480Navigator },
UserProfile179473: { screen: UserProfile179473Navigator },
Settings179472: { screen: Settings179472Navigator },
Settings179470: { screen: Settings179470Navigator },
SignIn2179468: { screen: SignIn2179468Navigator },
Settings179466: { screen: Settings179466Navigator },
UserProfile179459: { screen: UserProfile179459Navigator },
Settings179458: { screen: Settings179458Navigator },
Settings179456: { screen: Settings179456Navigator },
SignIn2179454: { screen: SignIn2179454Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
