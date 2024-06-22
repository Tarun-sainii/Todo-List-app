// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked")
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation(); 
//     console.log("ul was clicked")
// });

// for(lis of li){
//     lis.addEventListener("click", function(event){
//         event.stopPropagation(); 
//         console.log("Li was clicked"); 
//     });
// }

// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");
// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let dltbtn = document.createElement("button");
//     dltbtn.innerText = "Delete";
//     dltbtn.classList.add("delete");

//     item.appendChild(dltbtn);
//     ul.appendChild(item);
//     inp.value = "";
// });

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("Deleted");
//     }
// });

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
 
btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    item.appendChild(dltbtn);

    ul.appendChild(item);
    console.log("Task Added")
    inp.value = "";

})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let ListItem = event.target.parentElement;
        ListItem.remove();
        console.log("Task Deleted");
    }
});
// let dltbtns = document.querySelectorAll(".delete");
// for(dlts of dltbtns){
//     dlts.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }