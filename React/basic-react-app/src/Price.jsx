export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
    };

    let newStyles = {
        fontWeight: "bold"
    };

    let style = {
        backgroundColor: "#e0c367",
        height: "35px",
        width: "200px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px"
    };

    return(
        <div style={style}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}