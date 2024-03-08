//imports for components
import Menu from "./components/Menu";
import ItemsList from "./components/ItemsList";
import './App.css';

//imports for images
import chloe from "./images/chloe.jpg";
import luisa from "./images/luisa.jpg";
import serena from "./images/serena.jpg";
import yeri from "./images/yeri.jpg";

//header menu options
const menus = [
  { name: "Tops", url: "#", id: 1},
  { name: "Skirts", url: "#", id: 2},
  { name: "Accessories", url: "#", id: 3},
  { name: "Hats", url: "#", id: 4},
];

//clothes to be printed
const clothes = [
  {id: 1, name: "Chloe Top", image: chloe},
  {id: 2, name: "Luisa Top", image: luisa},
  {id: 3, name: "Serena Top", image: serena},
  {id: 4, name: "Yeri Bucket Hat", image: yeri},
];

const cart = [];

function Store() {
  return (
    <>
      <Menu data={menus} title="Handmaide."/>
      <ItemsList data={clothes}/>
    </>
  );
}

export default Store;
