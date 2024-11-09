// es5 var -> es6 let, const 
const input = document.getElementsByTagName('input')[0];
const ol = document.getElementsByTagName('ol')[0];
const addBtn = document.getElementsByTagName('button')[0];
//addEventListener -> function (click, scroll etc)
// ()=>{} -> arrow function
addBtn.addEventListener('click', ()=>{
    // alert("click");
    if(input.value==""){
        alert("You need to type text to add.");
    }else{
        //create li
        let li = document.createElement('li');
        li.innerText=input.value;
        ol.append(li);
        //create delete button
        let delBtn = document.createElement('button');
        delBtn.innerHTML='<i class="bi bi-trash"></i>';
        let checkBtn = document.createElement('button');
        checkBtn.innerHTML='<i class="bi bi-check-all"></i>'
        li.append(delBtn);
        delBtn.className="delete";
        checkBtn.className="check";
        li.append(checkBtn);
        input.value="";
    }
    saveData();
});
ol.addEventListener('click', (e)=>{
    //.className -> name of class in tag
    let liEl = (e.target).parentElement.parentElement;
    if(e.target.className=='bi bi-trash'){
        // .remove() -> remove tag
        liEl.remove();
    }else if(e.target.className=='bi bi-check-all'){
        liEl.classList.toggle('checked');    
    }
    saveData();
});
// localStorage -> setItem() -> hadgalna, getItem() -> avna
function saveData(){
    localStorage.setItem('todo',ol.innerHTML);
}
function getData(){
    let getTodo = localStorage.getItem('todo');
    ol.innerHTML = getTodo;
}
getData();



localStorage.setItem('name', "Sayan");
let get=localStorage.getItem('name');
console.log(get);