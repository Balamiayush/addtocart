let items = document.querySelector(".items");
let addedCartItems = document.querySelector(".addedCartItems");
let note = document.querySelector("#note");
let num =0;

const arr = [
  {
    name: "laptop1",
    price: "$100",
    brand: "HP",
    img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "laptop2",
    price: "$150",
    brand: "HP",
    img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "laptop3",
    price: "$90",
    brand: "HP",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let item = "";
arr.forEach((elem, i) => {
  item += `
<div class="box" id=${i}>
<img
  src="${elem.img}"
  alt=""
/>
<div class="nav-box">
  <p>${elem.name}</p>
  <div class="add">+</div>
</div>
</div>
`;
});
// items.appendChild(item)
items.innerHTML = item;


let addeddNumber = document.querySelector("#addeddNumber");
let adToCart = document.querySelectorAll(".add");
const notes = ()=>{
  if(addedCartItems.children.length>1){
    note.innerHTML=""
  }
  else{
    note.innerHTML="No any Item Added in Cart Yet"
  }
  }


// TOGGLE PLUS MINUS 
let plusMinus ="";
const togglePlusMinus = (e)=>{
  if(e.textContent === '+'){
    e.textContent= "-"
    num+=1;
    addeddNumber.innerHTML=num;
    // console.log()
    addToCart(e.parentElement.parentElement) //Show in Cart function called 
    notes()
    }
  else{
    e.textContent= "+"
    num-=1;
    addeddNumber.innerHTML=num;
    removeFromCart(e.parentElement.parentElement.id)
    notes()
  }
}


// WHEN CLICK ON ADD TO CART "+"
adToCart.forEach((elem, index)=>{
  elem.addEventListener("click", (e) => {
    // console.log(e.target.parentElement.parentElement)
    togglePlusMinus(e.target) //toggle "+", "-" when click on addToCart    
  });
  
})






// WHEN CLICK ON" + " ADD ITEMS IN CART AND SHOW IT 
const addToCart =(e)=>{
// Clone the original element
const clonedElement = e.cloneNode(true);
// Append the cloned element to the new location
addedCartItems.appendChild(clonedElement);  
}

const removeFromCart =(e)=>{
let cartItemsToBeRemoved = document.querySelectorAll(".addedCartItems .box")
//"cartItemsToBeRemoved" is nodelist, not an array. Filter method only works on array so,

const cartItemsArray = Array.from(cartItemsToBeRemoved);
// I converted it into an array. "cartItemsArray" is an array now and filter method can be used on it 

let filteredTobeDelete= cartItemsArray.filter((elem)=>{
if(elem.id==e){   //Checks which element should to be removed from cart
elem.remove()
}
})
}


