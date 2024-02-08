const btn = document.querySelector('button')
const color = document.getElementById('hexcode')
const cont = document.getElementById('container')
const hexadecimalvalue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
    let hexcolor = '#'
    for(let i = 1; i<=6; i++){
        hexcolor += randomhexval()
    }
    cont.style.backgroundColor = hexcolor
    color.innerHTML = hexcolor
})

function randomhexval(){
    let randindex = Math.floor(Math.random()*16)
    return hexadecimalvalue[randindex]
}
