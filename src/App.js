//news key ee70f2e779c145698c95212b21a41b5b
import React from "react";
import News from "./View/News";
import Filters from "./View/Filters";

function App() {
  return (
    <div className="border-2 bg-green-100">
      <h1 className="text-center font-bold m-16 text-6xl font-serif">
        NEWS PORTAL
      </h1>
      <Filters />
      <News />
    </div>
  );
}

export default App;
