const settingsMenu = document.querySelector(".settings-menu");
const darkBtn = document.querySelector("#dark-btn");
const pageBody = document.querySelector("body");

const theme = localStorage.getItem("theme");

function menuDropdownToggle(){
   console.log("Active")
   settingsMenu.classList.toggle("settings-menu-height");
}

// Dark mode toggle function
darkBtn.onclick = function darkModeToggleFx(){

   darkBtn.classList.toggle("dark-btn-on");
   pageBody.classList.toggle("dark-theme");

   if(theme === "dark"){
      localStorage.setItem("theme", "light");
   } else {
      localStorage.setItem("theme", "dark");
   }

}

if(theme === "light"){
   darkBtn.classList.remove("dark-btn-on");
   pageBody.classList.remove("dark-theme")
} else if(theme === "dark"){
   darkBtn.classList.add("dark-btn-on");
   pageBody.classList.add("dark-theme")
} else {
   localStorage.setItem("theme", "light");
}