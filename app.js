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
