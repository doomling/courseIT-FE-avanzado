import React from "react";
import "./App.css";
import UserSliderItem from "./components/UserSliderItem/UserSliderItem";
import DottedTitle from "./components/DottedTitle/DottedTitle";
import TrackCard from "./components/trackCard/TrackCard";

const items = [
  {
    img: "https://courseit.com.ar/static/icons/camara-web.png",
    title: "Un título",
    text: "Un texto"
  },
  {
    img: "https://courseit.com.ar/static/icons/apoyar.png",
    title: "Otro título",
    text: "Otro texto"
  },
  {
    img: "https://courseit.com.ar/static/icons/charlar.png",
    title: "Un título más",
    text: "Un texto más"
  }
];

const cursos = [
  { title: "Fe Avanzado", open: true, text: "Soy una descripción" },
  { title: "Desarrollo FE", open: false, text: "Soy una descripción" }
];

function App() {
  return (
    <div className="App">
      <div className="cards-container">
        {cursos.map((item, i) => {
          return (
            <TrackCard title={item.title} text={item.text} open={item.open} />
          );
        })}
      </div>
      <div className="section-container">
        <DottedTitle title={"soy un titulin"} />
        <div className="cards-container">
          {items.map((item, i) => {
            return (
              <UserSliderItem
                key={i}
                title={item.title}
                text={item.text}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
