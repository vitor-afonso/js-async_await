/*jshint esversion:8*/


const loadPosts = async () => {

    document.getElementById('posts').innerHTML += "loading...";

    try {
        // fetch() faz a requisição e retorna uma "promise"
        let req = await fetch("https://jsonplaceholder.typicode.com/posts");

        // .json() faz a conversão e retorna um json
        let json = await req.json();
        displayList(json);
    } catch (error) {
        document.getElementById('posts').innerHTML = "Ops! Something went wrong...";
        console.log(`ERROR! ${error.message}`);
    }
    
    
};

let displayList = (myList) => {
    let html = "";
    for (let i in myList) {
        html += `<br/><h3> ${myList[i].title} </h3><br/>`;
        html += `${myList[i].body} <br/>`;
        html += `<hr/>`;
        document.getElementById('posts').innerHTML = html;
    }
    
};