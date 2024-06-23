 

 //hide on click
 let hidebigDiv=document.getElementById('hidebigDiv');
 let hideSmallDiv=document.getElementById('hideSmallDiv');

 hidebigDiv.addEventListener('click',()=>{
    let desktop=document.getElementById('desktop');
    let mobile=document.getElementById('mobile');

    mobile.style.cssText='display: block;visibility: visible';
desktop.style.cssText='display: none;visibility: hidden';
 
 })

 hideSmallDiv.addEventListener('click',()=>{
    let desktop=document.getElementById('desktop');
    let mobile=document.getElementById('mobile');

   desktop.style.cssText='display: block;visibility: visible';
mobile.style.cssText='display: none;visibility: hidden';
 
 })




 