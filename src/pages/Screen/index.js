import React, { useEffect } from "react";

import {
  ScreenContainer,
  NavBar,
  BackButton,
  ScreenTitle,
  Content,
  FuncButton
} from "./style";
import { Icon } from "react-native-elements";

export default function Screen({
  navigation,
  navigation: {
    state: {
      params: { layout }
    }
  }
}) {
  useEffect(() => {
    console.tron.log(layout);
  }, []);

  function popScreen() {
    console.tron.log("sair");
    navigation.navigate("Main");
  }

  function sendData(data) {
    console.tron.log(data);
  }

  return (
    <ScreenContainer>
      <NavBar>
        <BackButton onPress={popScreen} />
        <ScreenTitle>{layout.screens[0].name}</ScreenTitle>
      </NavBar>
      <Content>
        {layout.screens[0].components.map((item, i) => {
          if (item.type == "button") {
            console.tron.log(item);
            return (
              <FuncButton
                key={i}
                title={item.name}
                onPress={() => sendData(item.fn)}
                icon={
                  item.icon && (
                    <Icon
                      name="robot-industrial"
                      type="material-community"
                      color="#FFF"
                    />
                  )
                }
              />
            );
          }
        })}
      </Content>
    </ScreenContainer>
  );
}
