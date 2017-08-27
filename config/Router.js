import { StackNavigator, TabNavigator } from 'react-navigation';
import SignupPage from '../Pages/SignupPage';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import FindRidePage from '../Pages/FindRidePage';
import ProfilePage from '../Pages/ProfilePage';
import MessageListPage from '../Pages/MessageListPage';
import DrivePage from '../Pages/DrivePage';

const App = TabNavigator({
  FindRidePage: {screen: FindRidePage},
  DrivePage: {screen: DrivePage},
  MessagesPage: {screen: MessageListPage},
  ProfilePage: {screen: ProfilePage},
}, {
  tabBarOptions: {
    style: {
      backgroundColor: "#000"
    },
    activeTintColor: "#FFF",
    inactiveTintColor:"#8d8d8d"
  }
})

export const Root = StackNavigator({
  LoginPage: {screen: LoginPage},
  SignupPage: {screen: SignupPage},
  HomePage:  {screen: App},
}, {

});
