let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async() =>{
    let countryName = document.querySelector("input").value;
    console.log(countryName);

    let colleges = await getColleges(countryName);
    showColleges(colleges);
})

function showColleges(colleges){
    let list = document.querySelector("#collegeList");
    list.innerText = "";
    for(college of colleges){
        console.log(college.name);

        let li = document.createElement('li');
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    } catch(err){
        console.log("Error - ", err);
        return [];
    }
}