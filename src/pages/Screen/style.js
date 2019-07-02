import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
`;
export const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-left: 8;
  padding-right: 8;
  background-color: #7159c1;
`;

export const BackButton = styled(Icon).attrs(() => ({
  name: "arrow-left",
  type: "font-awesome",
  size: 23,
  color: "#FFF"
}))``;

export const ScreenTitle = styled.Text`
  color: #fff;
  font-size: 18;
`;

export const Content = styled.View`
  flex: 1;
`;

export const FuncButton = styled(Button).attrs(() => ({
  containerStyle: {
    margin: 10
  }
}))`
  margin: 10px;
`;
