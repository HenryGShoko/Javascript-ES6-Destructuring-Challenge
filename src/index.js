// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla, bmw] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  speedStats: { topSpeed: bmwTopSpeed }
} = bmw;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

const {
  coloursByPopularity: [bmwTopColour]
} = bmw;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
    <tr>
      <td>{bmw.model}</td>
      <td>{bmwTopSpeed}</td>
      <td>{bmwTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
