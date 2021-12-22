const activeMenu = () => {
  const openMenuButton = document.getElementById("open-menu-button"),
    closeMenuButton = document.getElementById("close-menu-button"),
    mainMenu = document.getElementById("main-menu");

  if (openMenuButton && closeMenuButton && mainMenu) {
    openMenuButton.addEventListener("click", () => {
      mainMenu.classList.add("active");
    });
    closeMenuButton.addEventListener("click", () => {
      mainMenu.classList.remove("active");
    });
  }
};

activeMenu();
