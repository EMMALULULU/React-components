import React from "react";
import { PageHeader } from "antd";

export default function LoginSuccessful({ currentLoggedUser, onLogout }) {
  return (
    <PageHeader
      className="site-page-header"
      onBack={onLogout}
      title={`Hi ${currentLoggedUser.username}`}
      subTitle="click arrow to log out"
    />
  );
}
