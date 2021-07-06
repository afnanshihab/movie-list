'use strict'
let form = document.getElementById('form') ; 
let table = document.getElementById('table') ; 

function Movie (name , image , number) {
    this.name= name ;
    this.image= image ; 
    this.number= number ; 

    Movie.all.push(this);
}

Movie.all = [] ;


function addMovie (e) {
    e.preventDefault(); 

    let name = e.target.name.value ;
    let image = e.target.image.value ;
    let number = e.target.number.value ;

    new Movie(name,image,number) ;

    let tr= document.createElement('tr') ;
    table.appendChild(tr) ;

    let td1= document.createElement('td') ;
    tr.appendChild(td1) ;
    td1.textContent= 'X' ;


    let td2= document.createElement('td') ;
    tr.appendChild(td2) ;
    td2.textContent= image ;


    let td3= document.createElement('td') ;
    tr.appendChild(td3) ;
    td3.textContent= name ;


    let td4= document.createElement('td') ;
    tr.appendChild(td4) ;
    td4.textContent= number;


    localStorage.setItem('key',JSON.stringify(Movie.all)) ;




}
form.reset() ;
form.addEventListener('submit',addMovie) ;
 

function getData() {
    let data = JSON.parse(localStorage.getItem('key'))
    if (data) {
        Movie.all= data ; 
        for (let i = 0; i < data.length; i++) {
           
            let tr= document.createElement('tr') ;
            table.appendChild(tr) ;
        
            let td1= document.createElement('td') ;
            tr.appendChild(td1) ;
            td1.textContent= 'X' ;
        
        
            let td2= document.createElement('td') ;
            tr.appendChild(td2) ;
            td2.textContent= data[i].image ;
        
        
            let td3= document.createElement('td') ;
            tr.appendChild(td3) ;
            td3.textContent= data[i].name ;
        
        
            let td4= document.createElement('td') ;
            tr.appendChild(td4) ;
            td4.textContent= data[i].number;
        
        }
    }
}
getData();



