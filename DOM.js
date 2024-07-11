// document.getElementById('') --- when selecting an element by its Id
// innerText --- only the text which is visible
// innerContent --- any text that is visible even if not seen 
// innerHTML --- gives back the whole tag and every tag in it
// document.querySelector('h1') --- gives back the first element you want but only the first

// querySelectorAll returns a node list and node List can not be altered as before, it can be altered one by one like an array but
// it is not an ARRAY
// const myLi = document.querySelectorAll('li') 
// myLi[1].style.color = "Blue"

// HTMLCollection can not be use with forEach() like a nodeList so we have to convert it
// Array.from() is a method to convert an HTMLCollection to an Array