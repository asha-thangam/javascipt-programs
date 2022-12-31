let form=document.getElementById("form");
let input=document.getElementById("input");
let list=document.getElementById("list");

form.addEventListener("submit",
    (data)=>{
        data.preventDefault();
        createItem(input.value);
});

createItem= (x) =>{
    let temp=`<li>${x}<button onClick="deleteItem(this)">Delete</button></li>`;
    list.insertAdjacentHTML("beforeend",temp);
    input.value="";
    input.focus();
}

function deleteItem(x){
    x.parentElement.remove();
}