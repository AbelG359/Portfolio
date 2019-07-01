/*
1. `document` refers to the HTML page we are working with
2. `querySelector` grab elements from the page using the same syntax as CSS
3. `onclick` is a handler for when the element is click
4. `innerHTML` refers to what is inside an element, (between the tags)
*/
document.querySelector('#change-me-button').onclick = function() {
    document.querySelector('#change-me-title').innerHTML = 'Hello, My name is Jeff!'
  }
  
  /*
  1. `let` is a way of saving information that will change, you may also see people using `var` which is the old way of saving information
  2. `event` is passed into the `onclick` handler in case we want to refer to the `event` that triggered this `function`
  3. `if` checks if a condition is `true` or `false`
  */
  let styled = false;
  document.querySelector('#style-me-button').onclick = function(event) {
    if (!styled) {
      document.querySelector('#style-me-title').style.border = 'thin black solid'
      event.target.innerHTML = 'again';
      styled = true;
    } else {
      document.querySelector('#style-me-title').className = 'fancy-button';
    }
  }
  
  /*
  1. `const` is a way of saving information that won't change
  2. `cloneNode(true)` creates an exact copy of the HTML element/node
  3. A `node` is generic name for an `element`
  4. `parentNode` refers to the element/node which contains the element in question
  5. `appendChild` adds an element inside of the element in question
  */
  document.querySelector('#duplicate-me-button').onclick = function() {
    const original = document.querySelector('.duplicate-me-title');
    const duplicate = original.cloneNode(true);
    
    original.parentNode.appendChild(duplicate);
  }
  
  // try implementing this last one
  document.querySelector('#delete-me-button').onclick = function() {
const original = document.querySelector('.delete-me-title');
// const remove = original.removeAttributeNode(true);

original.parentNode.removeChild(original);
}