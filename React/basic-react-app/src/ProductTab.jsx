import Product from "./Product";

function ProductTab() {
    let options = ["hi-tech", "durable", "better-performance"];
    // let options2 = {a: "hi-tech", b: "better-build", c: "durable"};

    let styles ={
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={styles}>
            
        <Product title="Lenovo LEGION" idx={0}/>
        <Product title="SamSung Galaxy A54 5G" idx={1}/>
        <Product title="FireBoltt HULK" idx={2}/>
        <Product title="Apple Pencil (2nd Gen)" idx={3}/>
        </div>
    );
}

export default ProductTab;