let input =document.getElementById('input') //contains the Input value
let main =document.getElementById('ul') // UL which contains all the List or Task 


//Function for add the Task in newly created List 
function add(){
let task=input.value

if(task){

let child =document.createElement('li')
child.innerHTML=`<input type="checkbox" "> <strong class="overflow-hidden ">${task}</strong><i class="bi bi-trash"></i>

`
main.appendChild(child)
child.className="alert alert-success alert-dismissible fade show d-flex justify-content-between gap-3 fs-5" 

input.value=""//After add the value reset It to empty
input.focus() // Focus on the same Input

}else{
    let alertDiv=document.getElementById('alert-div')
    alertDiv.classList.replace('d-none','show')
    //Function to automatic Disclose error
    setTimeout(function(){
        alertDiv.classList.replace('show','d-none')

    },3000)

}

}



// Add  EventListerner for entire Parent which hold the LIST
main.addEventListener('click',work)

function work(e){
    //If the clicked area is a Chockbox
if(e.target.tagName=="INPUT"){
      
    if(e.target.checked){
        e.target.nextElementSibling.style.textDecoration="line-through"
        
    }else{
        e.target.nextElementSibling.style.textDecoration="none"
        
    }  
   
}

//If the clicked area is a Icon
else if(e.target.tagName=="I"){
        main.removeChild(e.target.parentElement)  
    
}

}

