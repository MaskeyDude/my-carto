function Add_Element() {
  
  // getting html thingys
  let Input_Value = document.getElementById("input-value").value;
  let Item_Container = document.getElementById("item-container");
  
  // creating html context with js
  let para = document.createElement("p");
  let Input_Text = document.createTextNode(Input_Value);
  para.appendChild(Input_Text);
  
  // adding item
  Item_Container.appendChild(para).classList.add("item");
  
  console.log(Input_Text);
  
  
};


// getting html thingys
let Item = document.querySelector(".item");

Item.addEventListener('click', function Remove_Element() {
  Item.remove();
});






// one more method

// getting html thingys
// const Add_Btn = document.getElementById("add-btn");

// Add_Btn.addEventListener('click', function Add_Element() {
  
//   // getting html thingys
//   let Input_Value = document.getElementById("input-value").value;
//   let Item_Container = document.getElementById("item-container");
  
//   // creating html context with js
//   let para = document.createElement("p");
//   let Input_Text = document.createTextNode(Input_Value);
//   para.appendChild(Input_Text);
  
//   // adding item
//   Item_Container.appendChild(para).classList.add("item");
  
//   console.log(Input_Text);

// });






















// // storing items locally
// localStorage.setItem(JSON.stringify(Add_Element()));



// const Item = document.querySelector(".item");











// // function newElement() {};

// const Input_Items = document.getElementById("input-items");
// let Item_Value = Input_Items.value;
// const para = document.createElement("p");
// Item_Value = document.createTextNode("\u00D7");
// const node = document.createTextNode(Item_Value);
// para.appendChild(node);

// document.getElementById("input-items").value = "";


// const Add_Btn = document.getElementById("add-btn");
// // const txt = document.createTextNode("\u00D7");
// Add_Btn.className = "close";
// // Add_Btn.appendChild(txt);
// para.appendChild(Add_Btn);
// const Items = document.getElementById("items");
// Items.appendChild(para);

// Add_Btn.addEventListener("click", function () {
    
//     Items.appendChild(para).classList.add("item");
    
//     console.log(Item_Value);

// });






// function createCloseButton(li) {
//     let span = document.createElement("SPAN");
//     let txt = document.createTextNode("\u00D7");
  
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     span.onclick = () => span.parentElement.style.display = "none";
//   }
  
//   document.querySelectorAll('li').forEach(createCloseButton);
  
//   document.querySelector('ul').addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI')
//       e.target.classList.toggle('checked');
//   });
  
//   function add() {
//     let li = document.createElement('LI');
//     let input_value = document.form_main.task.value;
//     let input_text = document.createTextNode(input_value);
  
//     li.appendChild(input_text);
//     document.querySelector('ul').appendChild(li);
//     document.form_main.task.value = "";
  
//     createCloseButton(li);
//   }