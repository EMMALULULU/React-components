import React from "react";
import { Card, Avatar } from "antd";

export default function Movie({ posterPath, title, description }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const { Meta } = Card;
  return (
    <Card
      style={{ width: 400, margin: "2rem" }}
      cover={<img alt={title} src={`${baseUrl}${posterPath}`} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
}
