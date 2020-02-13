/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.*/

function createMenu(array) {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const ul = document.createElement('ul');
  menu.append(ul);

  array.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.append(li);
  });

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  return menu;
}

document.querySelector('body').append(createMenu(menuItems));

 
