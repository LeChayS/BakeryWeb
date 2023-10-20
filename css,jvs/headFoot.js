const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenbtn = document.querySelector(".navOpenbtn"),
    navClosebtn = document.querySelector(".navClosebtn");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if(nav.classList. contains("openSearch")){
        return  searchIcon.classList.replace("fi-br-search", "fi-br-cross");
    }
    return  searchIcon.classList.replace("fi-br-cross", "fi-br-search");
});

navOpenbtn.addEventListener("click" , () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("fi-br-cross", "fi-br-search");
})
navClosebtn.addEventListener("click" , () => {
    nav.classList.remove("openNav");
})