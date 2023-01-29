let contador = 0
const MaxImgs = document.querySelectorAll('.content ul li').length-1


function Slider(){

    const img = document.querySelectorAll('img')
    const input =  document.querySelectorAll('input')
    const ListImage = document.querySelector('ul')

    let Meuinterval = setInterval(function(){
        img[contador].style.display = 'none'
        input[contador].checked = false
        contador++
        if(contador > MaxImgs){
            contador=0
        }            
        img[contador].style.display = 'block'
        input[contador].checked = true   
       
    },2000)

    ListImage.addEventListener("mouseenter",(Event) =>{
        clearInterval(Meuinterval)      

    })
    
    ListImage.addEventListener("mouseleave",(Event) =>{
        Meuinterval = setInterval(function(){
            img[contador].style.display = 'none'
            input[contador].checked = false
            contador++
            if(contador > MaxImgs){
                contador=0
            }            
            img[contador].style.display = 'block'
            input[contador].checked = true   
           
        },2000)
    })

   
}

Slider()