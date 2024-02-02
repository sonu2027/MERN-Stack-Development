/* 
****** Id selector ******
let var1=document.getElementById("idName")


********* To get the attribute value **************
var1.getAttribute("AtributeName")


******** To set the attribute value *************
var1.setAttribute("attributeName", "setNewValue") // This will overwrite


******* To access attribute value ********
var1.id
var1.className
var1.atrName

******* to apply CSS ********
var1.style.propertOfCSS="write property"


********* innerText, textContent and innerHTML, outerHTML *********
 The diff b/w innerText and textContent is that textContent show hiddent text but innertext can't


*********** class selector *************
let var1=document.getElementByClassName("className")
--> It will select all the class of document of name className
--> Iteration is possible


********** querySelector ********
let var1=document.querySelector("#id" / ".class" / "tagname")
 --> It will select only the first element


********** querySelectorAll ********
let var1=document.querySelectorAll("#id" / ".class" / "tagname")
 --> It will select all the element
 --> Iteration is possible like array and it's also provide length method
 and forEach method


********** tag selector ********
let var1=document.getElementByTagName("tagname")
 --> It will select all the element of name tagname
 --> Iteration is possible like array and it's also provide length method


 **** Learn about this object ********
 parent.children
 children.parentElement
 parent.firstElementChild
 parent.lastElementChild
 parent.nextElementSibling
 parent.childElementCount // return the number of children
 parent.childNodes // length of node


 ****** how to create new elemement and set attribute******
 let var1=document.createElement("div");
 var1.className="sonu"
 var1.id="01"
 
 // To set custom attribute
 var1.setattribute("name", "sonuMondal")

 // To crete a text node
 var1=document.createTextNode("my ane is sonu")
 
 // To add new element in document
 1. target the element in which you want to append the new element
 2. create the element
 3. append it on element 


 ********* How to edit element *********
 1. target the element which you want to edit
 2. use targetElement.replaceWith(newElement)

 ********* How to delete element *********
 1. target the element which you want to delete
 2. use targetElement.delete()
*/
