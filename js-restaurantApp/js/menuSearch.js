const menuSearch = document.querySelector(".menu-search")

menuSearch.addEventListener("keyup",() => {
    let items = document.querySelector(".food-menu");
    let listNames = items.querySelector("ul");
    let listContents = listNames.querySelectorAll("li");
    for(let index = 0 ;index < listContents.length; index++){
        let heading = listContents[index].querySelector('h1');
        
        if(heading){
            if(heading.textContent.toUpperCase().indexOf(menuSearch.value.toUpperCase()) > -1 || course.textContent.toUpperCase().indexOf(menuSearch.value.toUpperCase()) > -1){
                listContents[index].style.display = '';
            }
            else{
                listContents[index].style.display = "none";
            }
        }
    }
})