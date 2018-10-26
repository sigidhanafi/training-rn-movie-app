/** @format */
import { Navigation } from "react-native-navigation";
import App from './src/App';
import HomeScreen from './src/components/HomeScreen';
import MovieScreen from './src/components/MovieScreen';

Navigation.registerComponent('navigation.playground.Initialize', () => App);
Navigation.registerComponent('navigation.playground.HomeScreen', () => HomeScreen);
Navigation.registerComponent('navigation.playground.MovieScreen', () => MovieScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.Initialize"
      }
    }
  });
});
