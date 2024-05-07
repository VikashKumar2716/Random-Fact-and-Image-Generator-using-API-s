let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";

async function getFacts(url){
    try{
        let res= await axios.get(url)
        return res.data;
    }catch(e){
        console.log("Error occured -",e);
        return "No fact found";
    }
}

let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",async function(){
    console.log("button was clicked");
    let fact= await getFacts(url);
    console.log(fact);
    let para=document.querySelector("#fact");
    para.innerText=fact.fact;
})

let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",async function(){
    // console.log("button was clicked");
    let fact= await getFacts(url2);
    console.log(fact);
    let img=document.querySelector("img");
    img.setAttribute("src",fact.message);
})

let jokeurl="https://icanhazdadjoke.com/";

async function getJoke(){
    try{
        let config={
            headers:{Accept:"application/json"}
        }
        let res=await axios.get(jokeurl,config);
        console.log(res.data.joke);
    }catch(e){
        console.log("error is",e);
    }
}

let uniUrl="http://universities.hipolabs.com/search?name=";
let country="india";
async function getColleges(){
    try{
        let res= await axios.get(uniUrl+country);
        console.log(res.data);
    }
    catch(e){
        console.log(e);
    }
}

