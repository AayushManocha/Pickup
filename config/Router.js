import { StackNavigator } from 'react-navigation';
import SignupPage from '../Pages/SignupPage';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import FindRidePage from '../Pages/FindRidePage';

const FindRideStack = StackNavigator({
  HomePage: {screen: HomePage},
  FindRidePage: {screen: FindRidePage},
}, {
  // headerMode: 'none'
})

export const Root = StackNavigator({
  LoginPage: {screen: LoginPage},
  SignupPage: {screen: SignupPage},
  HomePage:  {screen: FindRideStack},
}, {
  mode: 'modal',
  // headerMode: 'none'
});
