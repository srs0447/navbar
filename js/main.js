// function openModal(){
//     var modal = document.getElementById("modal");
   
  
//         modal.classList.add("show")
    
   
// }

// function closeModal(){
//     var modal = document.getElementById("modal");
 
//         modal.classList.remove('show')
    
   
// }


function openMenu(){
    var nav = document.getElementById("navbar");
    if(nav.classList[0] ==="open"){
        nav.classList.remove("open")
    }else{
        nav.classList.add("open")
    }
}
var fruits = []


function display(){
    var element = document.getElementById("fruit")
    console.log(element)
     for(var i =0;i<fruits.length;i++){
        var li = document.createElement("li");
         li.innerHTML=fruits[i]
         element.appendChild(li)
    }
}

function test(){
    var name = document.getElementById("fruit_name").value
    fruits.push(name)
    display()
}

function arrayMethod(){
    var ar =[12,5,8]

    ar.unshift(44)
    ar.pop()
    ar.shift()
    ar.findIndex(5)
    console.log(ar)
}
arrayMethod()