import React, { useState } from "react";
import "./App.css";
import SelectModeButton from "./Components/SelectModeButton";
import RegisterForm from "./Components/RegisterForm";
import { Row, Col, Space } from "antd";
import LoginForm from "./Components/LoginForm";
import LoginSuccessful from "./Components/LoginSuccessful";
const tabLabel = {
  REGISTER: "register",
  LOGIN: "login",
};
export default function App() {
  const [currentTab, setCurrentTab] = useState(tabLabel.REGISTER);
  const [usersLoginData, setUsersLoginData] = useState([
    { username: "hello", password: "123" },
  ]);
  const [isLoginSucceed, setIsLoginSucceed] = useState(false);
  const [currentLoggedUser, setCurrentLoggedUser] = useState({});

  const changeCurrentTabHandler = (label) => {
    setCurrentTab(label);
  };

  const onRegister = (userData) => {
    console.log(userData);
    setUsersLoginData((prevData) => {
      return [
        ...prevData,
        {
          username: userData.username,
          email: userData.email,
          password: userData.password,
        },
      ];
    });
  };
  const onLogin = (userData) => {
    setIsLoginSucceed(true);
    setCurrentLoggedUser(userData);
  };

  const onLogout = () => {
    setCurrentTab(tabLabel.LOGIN);
    setIsLoginSucceed(false);
  };
  let Form =
    currentTab === "login" ? (
      <LoginForm
        changeCurrentTabHandler={changeCurrentTabHandler}
        labels={tabLabel}
        usersLoginData={usersLoginData}
        onLogin={onLogin}
      />
    ) : (
      <RegisterForm
        onRegister={onRegister}
        changeCurrentTabHandler={changeCurrentTabHandler}
        labels={tabLabel}
      />
    );
  return (
    <div className="main-container">
      {isLoginSucceed ? (
        <LoginSuccessful
          currentLoggedUser={currentLoggedUser}
          onLogout={onLogout}
        />
      ) : (
        <Row justify="center">
          <SelectModeButton
            label={tabLabel.REGISTER}
            currentTab={currentTab}
            onClick={changeCurrentTabHandler}
          >
            Sign up
          </SelectModeButton>
          <SelectModeButton
            label={tabLabel.LOGIN}
            currentTab={currentTab}
            onClick={changeCurrentTabHandler}
          >
            Log in
          </SelectModeButton>
          {Form}
        </Row>
      )}
    </div>
  );
}
