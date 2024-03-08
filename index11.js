let btn = document.querySelector('#btn');
let p = document.querySelectorAll('p');
let input1 = document.querySelector('#input1');



 for (let i = 0; i < p.length; i++) {
    p[i].addEventListener('click', function f () {
       p[i].textContent = p[i].textContent + '!'  
    });

 }
 
