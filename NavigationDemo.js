import {createSwitchNavigator} from 'react-navigation';
import ScreenComponentOne from './ScreenComponentOne';
import ScreenComponentTwo from './ScreenComponentTwo';

const AppNavigator = createSwitchNavigator({
    "ScreenOne": ScreenComponentOne,
    "ScreenTwo": ScreenComponentTwo,
});

export default AppNavigator;