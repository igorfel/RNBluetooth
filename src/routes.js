import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "~/pages/Main";
import Screen from "~/pages/Screen";

const Routes = createAppContainer(createSwitchNavigator({ Main, Screen }));

export default Routes;
