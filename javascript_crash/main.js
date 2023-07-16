// These are console demonstrations
// console.log("Hello Ryan");
// console.error("This is an error");
// console.warn("This is a warning");

// Single-element selectors
// console.log(document.getElementById('my-form'));
// const form = document.getElementById('my-form'); // can assign element to variable
// console.log(form); // this will output the same as above
// querySelector is newer and can select anything
// console.log(document.querySelector('h1')); // outputs only the first h1 element

// Multi-element selectors
// console.log(document.querySelectorAll('.item')); // generally want to use this not the following
// document.getElementsByClassName('item'); // don't need the . because class is already specified
// document.getElementsByTagName('li'); // selecting all by tag name

// const items = document.querySelectorAll('.item'); // select all in item class
// items.forEach((item) => console.log(item)); // print the items(elements)

const ul = document.querySelector('.items');

// ul.remove(); // removes the ul from the page
// ul.lastElementChild.remove(); // removes just the last element
// ul.firstElementChild.textContent = "textContent";
// ul.children[1].innerText = "innerText";
// ul.lastElementChild.innerHTML = '<h1>H1 Text</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red'; // can change style properties too
btn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(e);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
});