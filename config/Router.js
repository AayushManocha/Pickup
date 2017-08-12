import { StackNavigator } from 'react-navigation';
import SignupPage from '../Pages/SignupPage';
import LoginPage from '../Pages/LoginPage';

export const Root = StackNavigator({
  LoginPage: {screen: LoginPage},
  SignupPage: {screen: SignupPage}
});

