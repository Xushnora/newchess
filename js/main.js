let chesList = document.querySelector('.chesList');

let x = 0;
let y = 0;

let arr = []

let elUl = document.querySelector('.list')
let corX = document.querySelector('.cor-x');
let corY = document.querySelector('.cor-y');

// buttons

let ot = document.querySelector('.ot');
let fil = document.querySelector('.fil');
let shoh = document.querySelector('.shoh');
let vazir = document.querySelector('.vazir');
let piyoda = document.querySelector('.piyoda');
let tora = document.querySelector('.tora');

for(let i = 1; i<=8; i++){
    for(let j = 1; j<=8; j++){
     let obj = {
         x: i,
         y:j
     }
     arr.push(obj)
    }
}

arr.forEach((e,i)=>{
let li = document.createElement('li')
// li.classList.add('chesItem');
li.classList.add('a'+e.x , 'b'+e.y, 'chesItem')
    if((e.x + e.y) % 2 == 0) {
        li.style.background = `#f0d9b5`;
        li.style.background = `url(../imgs/wood.jpg)`;
    } else {
        li.style.background = `#f0d9b5`;
        li.style.background = `url(../imgs/wood2.jpg)`;
    }

li.textContent=`${e.x}, ${e.y}`
elUl.appendChild(li)
})
 
let chesItems = document.querySelectorAll('.chesItem');

chesItems.forEach((e, i) => {
    e.addEventListener('mouseover', () =>{
        corX.textContent = `x = ${e.textContent[0]}`;
        corY.textContent = `y = ${e.textContent[3]}`;
        x = e.textContent[0];
        y = e.textContent[3];
    })
    tora.addEventListener('click', (els) =>{
        // els.currentTarget.style.background = '#fff';
        e.addEventListener('mouseover', ()=>{
            let acl = e.classList[0];
            let bcl = e.classList[1];
            let alilar = document.querySelectorAll(`.${acl}`)
            let blilar = document.querySelectorAll(`.${bcl}`)
    
            alilar.forEach(j=>{
                j.classList.add('green');
            })
            blilar.forEach(j=>{
                j.classList.add('green');
            })
    
            e.classList.add('red');
            console.log(e.classList[0]);
        })
        e.addEventListener('mouseout', ()=>{
            let acl = e.classList[0]
            let bcl = e.classList[1]
            console.log(e.classList[0]);
            console.log(e.classList[1]);
            let alilar = document.querySelectorAll(`.${acl}`)
            let blilar = document.querySelectorAll(`.${bcl}`)
    
            alilar.forEach(j=>{
                j.classList.remove('green');
            })
            blilar.forEach(j=>{
                j.classList.remove('green');
            })
    
            e.classList.remove('red');
            console.log(e.classList[0]);
        })
    })
   
})

chesItems.forEach((e, i) => {
    e.addEventListener('mouseover', () =>{
        corX.textContent = `x = ${e.textContent[0]}`;
        corY.textContent = `y = ${e.textContent[3]}`;
        x = e.textContent[0];
        y = e.textContent[3];
    })
    vazir.addEventListener('click', (elv) =>{
        // e.currentTarget.style.background = 'green'
        e.addEventListener('mouseover', () =>{
            let axOld = x - 1;
            let ayOld = y - 1;
            let axAfter = x + 1;
            let ayAfter = y + 1;
            console.log(x , y, axOld, ayOld, axAfter, ayAfter);
            // console.log(y);

        })

    })
   
})


ot.addEventListener('click', (e)=>{
    // e.currentTarget.style.background = 'gold'
})

shoh.addEventListener('click', (e) =>{
    // e.currentTarget.style.background = 'green'
})


vazir.addEventListener('click', (e) =>{
    // e.currentTarget.style.background = 'green'
})