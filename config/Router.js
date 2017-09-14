//import all pages and react nav stuff
import { StackNavigator, TabNavigator } from 'react-navigation';
import SignupPage from '../Pages/SignupPage';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import FindRidePage from '../Pages/FindRidePage';
import ProfilePage from '../Pages/ProfilePage';
import MessageListPage from '../Pages/MessageListPage';
import DrivePage from '../Pages/DrivePage';


const App = TabNavigator({
  //pages for the actual app's tab nav
  FindRidePage: {screen: FindRidePage},
  DrivePage: {screen: DrivePage},
  MessagesPage: {screen: MessageListPage},
  ProfilePage: {screen: ProfilePage},
}, {
  tabBarOptions: {
    style: {
      backgroundColor: "#000"
      //black tab bar
    },
    activeTintColor: "#FFF",
    //selected tab text colour
    inactiveTintColor:"#8d8d8d"
    //unselected tab text colour
  }
})

export const Root = StackNavigator({
  //pages for initial stack navigation set
  LoginPage: {screen: LoginPage},
  SignupPage: {screen: SignupPage},
  HomePage:  {screen: App},
}, {

});
