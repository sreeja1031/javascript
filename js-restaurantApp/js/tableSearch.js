const tableSearchBar = document.querySelector('.table-search');

tableSearchBar.addEventListener('keyup',()=>{
    let tablesList = document.querySelector('.table-num');
    let allTables = tablesList.querySelectorAll('div');
    for (let table = 0; table < allTables.length; table++) {
        let heading = allTables[table].querySelector('h1');
        
        if(heading){
            if(heading.textContent.toUpperCase().indexOf(tableSearchBar.value.toUpperCase()) >-1){
                allTables[table].style.display = '';
            }
            else{
                allTables[table].style.display = "none";
            }
        }
    }
})
