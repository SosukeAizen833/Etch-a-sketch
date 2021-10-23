const body = document.querySelector('body')

const container = document.createElement('div')
container.classList.add('container');


const canvas = document.createElement('div')
canvas.classList.add('canvas')

const btnlist = document.createElement('ul');
btnlist.classList.add('btnlist')

const colorbtn = document.createElement('input')
colorbtn.type = 'color'

const li1 = document.createElement('li')
btnlist.style.listStyleType = 'none'
li1.appendChild(colorbtn)

const li2 = document.createElement('li')
const slider = document.createElement('input')
slider.type = 'range'
slider.min = '16'
slider.max = '32'
slider.id = 'box-sizer'
slider.value = 16
li2.appendChild(slider)
btnlist.appendChild(li2);
btnlist.appendChild(li1);

container.appendChild(btnlist)
container.appendChild(canvas)

body.appendChild(container)

createCanvas(16);
slider.oninput = function(){
    adjustGrids(this.value)
}



function createCanvas(size){
  
    for(let i=0;i<size;i++){
        
        let row = document.createElement('div')
        row.classList.add("row")
        for(let j=0;j<size;j++){
            let box = document.createElement('div')
            box.classList.add('box')
            box.addEventListener('mouseover',()=>{
                changeColor(box,colorbtn.value);
            })
            row.appendChild(box);
        }
        canvas.appendChild(row)
    }
}




function changeColor(el,col){
    el.style.backgroundColor  = col;
}

function adjustGrids(number){
    removeAllChildNodes(canvas);
    for(let i=0;i<number;i++){
        
        let row = document.createElement('div')
        row.classList.add("row")
        for(let j=0;j<number;j++){
            let box = document.createElement('div')
            box.classList.add('box')
            box.style.width = `${16*25/number}px`;
            box.style.height = `${16*25/number}px`
            box.style.borderWidth = `${0.25*16/number}px`
            box.addEventListener('mouseover',()=>{
                changeColor(box,colorbtn.value);
            })
            row.appendChild(box);
        }
        canvas.append(row)
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}