const menu = document.querySelector(".menu");

menu.appendChild(createMenu());

function createMenu() {
  //Elements
  const menuData = [
    "Students",
    "Faculty",
    `What's New`,
    "Tech Trends",
    "Music",
    "Log Out"
  ];

  const menuList = document.createElement("ul");

  menuData.forEach(item => {
    let menuItem = document.createElement("li");
    menuList.appendChild(menuItem);

    menuItem.textContent = item;
  });

  //Events
  document.querySelector(".menu-button").addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  });

  return menuList;
}

{
  /* <div class="menu">
      <ul>
        <li>Students</li>
        <li>Faculty</li>
        <li>What's New</li>
        <li>Tech Trends</li>
        <li>Music</li>
        <li>Log Out</li>
      </ul>
    </div> */
}
