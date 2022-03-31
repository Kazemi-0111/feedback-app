import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>about this project</h1>
        <p>this is a react app to leave feedback for a product or service</p>
        <p>version: 1.0.0</p>
        <Link to={"/"}>back to home</Link>
      </div>
    </Card>
  );
}
