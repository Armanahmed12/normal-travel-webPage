// navigation Bar

const menuBtn = document.getElementById('menuBtn');
const navListContainer = document.getElementById('nav-list-container');

document.getElementById('menuBtn').addEventListener('click',()=> {

    const styles = window.getComputedStyle(navListContainer);
    console.log(styles.top);
    if(styles.top == '54.4px'){
       
          navListContainer.style.cssText = "top: -400px;"
          
    }else{

         navListContainer.style.top = '54.4px';
    }
      
      
});

