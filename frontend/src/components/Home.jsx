// Home.js
import React from "react";

const Home = () => {
  return (
    <div
      className="flex items-center justify-center h-[80vh] bg-cover  bg-center"
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/1460755337/photo/white-color-theme-modern-style-office-with-exposed-concrete-floor-and-a-lot-of-plant-3d.jpg?s=612x612&w=0&k=20&c=PX1TFWVrLL34jgkmFREmxrzy3M4rqhBk4NMrHFOTmo8=")',
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Welcome to Admin Panel
        </h1>
        <p className="text-white text-lg">
          Manage your dashboard and settings from here.
        </p>
      </div>
    </div>
  );
};

export default Home;
