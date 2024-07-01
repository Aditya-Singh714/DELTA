import Price from "./Price";
import "./Product.css";

function Product({ title, idx }) {  
  let oldPrices = ["1,39,990", "41,990", "4,000", "11,900"];
  let newPrices = ["1,08,990", "33,449", "3,200", "9,199"];
  let description = ["Maximise Performance with Lenovo Ai Engine +", "Awesome 5G for unstoppable entertainmnet", "45mm AMOLED Display Bluetooth Calling", "Designed for iPad Pro, iPad Air and iPad mini"]
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  );
}

export default Product;
