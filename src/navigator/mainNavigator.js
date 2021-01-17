import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings193871Navigator from '../features/Settings193871/navigator';
import Settings193856Navigator from '../features/Settings193856/navigator';
import NotificationList193855Navigator from '../features/NotificationList193855/navigator';
import Maps193854Navigator from '../features/Maps193854/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings193871: { screen: Settings193871Navigator },
Settings193856: { screen: Settings193856Navigator },
NotificationList193855: { screen: NotificationList193855Navigator },
Maps193854: { screen: Maps193854Navigator },

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
