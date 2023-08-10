let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e){
        console.log("Error - ", e);
        return "No fact found";
    }
}

let btn = document.getElementById("factShow");
btn.addEventListener("click", async() =>{
    let fact = await getFacts();
   
    let p = document.getElementById("output");
    p.innerText = fact;
})


let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImages(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    } catch(e){
        console.log("Error - ", e);
        return "No image found";
    }
}

let btn2 = document.getElementById("imageShow");
btn2.addEventListener("click", async() =>{
    let link = await getImages();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
})
