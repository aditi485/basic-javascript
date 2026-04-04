const parent1 = document.querySelector(".parent")
console.log(parent)
console.log(parent1.children)// now we know that parent.children is a html collection so we cant convert to array and apply rules on it 
console.log(parent1.firstElementChild) // to know who is first children 
console.log(parent1.lastElementChild)
console.log(parent1.firstElementChild.nextElementSibling)

// these are the ways to access because every time doing document.queryselector it will traverse the whole tree

// ++++++++++++++++ to create +++++++++++++++++++++
//now if we want to create any tag
 const div1 = document.createElement("div")
 div1.className = "new"
 div1.id = "itsnew"
 div1.setAttribute("title","genrated title")
 div1.style.backgroundColor = "green"
 div1.innerText = "chai aur code"
 document.body.appendChild(div1)