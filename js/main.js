
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
         x: j,
         y:i
     }
     arr.push(obj)
    }
}

arr.forEach((e,i)=>{
let li = document.createElement('li')

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
    vazir.addEventListener('click', () =>{
        vazir.style.backgroundColor = 'gold';
        ot.style.backgroundColor = "white";
        fil.style.backgroundColor = "white";
        shoh.style.backgroundColor = "white";
        piyoda.style.backgroundColor = "white";
        tora.style.backgroundColor = "white";

        e.addEventListener('mouseover', (c) =>{
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];

                chesItems.forEach(item => {
                    let xxx = item.classList[0].split('')[1];
                    let yyy = item.classList[1].split('')[1];

                    if(xxx == ((xx - 0) - 1)  && yyy == yy || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 1) ||
                        xxx == xx && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == yy ||
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) - 1) ||
                        xxx == xx && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 1)
                    ) {
                        console.log('ok');
                        item.classList.add('green');
                    } else {
                        item.classList.remove('green');
                    }
                })
            
        })

    });
    ot.addEventListener('click', () =>{
        ot.style.backgroundColor = 'gold';
        vazir.style.backgroundColor = "white";
        fil.style.backgroundColor = "white";
        shoh.style.backgroundColor = "white";
        piyoda.style.backgroundColor = "white";
        tora.style.backgroundColor = "white";
        e.addEventListener('mouseover', (c) =>{
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];

                chesItems.forEach(item => {
                    let xxx = item.classList[0].split('')[1];
                    let yyy = item.classList[1].split('')[1];

                    if(xxx == ((xx - 0) + 1)  && yyy == ((yy - 0) - 2) || 
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 2) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 2)
                    ) {
                        // console.log('ok');
                        item.classList.add('green');
                    } else {
                        item.classList.remove('green');
                    }
                })
            
        })

    });
    fil.addEventListener('click', () =>{
        fil.style.backgroundColor = 'gold';
        ot.style.backgroundColor = "white";
        vazir.style.backgroundColor = "white";
        shoh.style.backgroundColor = "white";
        piyoda.style.backgroundColor = "white";
        tora.style.backgroundColor = "white";
        e.addEventListener('mouseover', (c) =>{
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];

                chesItems.forEach(item => {
                    let xxx = item.classList[0].split('')[1];
                    let yyy = item.classList[1].split('')[1];

                    if(xxx == ((xx - 0) + 1) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 2) ||
                        xxx == ((xx - 0) + 3) && yyy == ((yy - 0) - 3) ||
                        xxx == ((xx - 0) + 4) && yyy == ((yy - 0) - 4) ||
                        xxx == ((xx - 0) + 5) && yyy == ((yy - 0) - 5) ||
                        xxx == ((xx - 0) + 6) && yyy == ((yy - 0) - 6) ||
                        xxx == ((xx - 0) + 7) && yyy == ((yy - 0) - 7) ||
                        xxx == ((xx - 0) + 8) && yyy == ((yy - 0) - 8) ||
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) + 3) && yyy == ((yy - 0) + 3) ||
                        xxx == ((xx - 0) + 4) && yyy == ((yy - 0) + 4) ||
                        xxx == ((xx - 0) + 5) && yyy == ((yy - 0) + 5) ||
                        xxx == ((xx - 0) + 6) && yyy == ((yy - 0) + 6) ||
                        xxx == ((xx - 0) + 7) && yyy == ((yy - 0) + 7) ||
                        xxx == ((xx - 0) + 8) && yyy == ((yy - 0) + 8) ||
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 2) ||
                        xxx == ((xx - 0) - 3) && yyy == ((yy - 0) + 3) ||
                        xxx == ((xx - 0) - 4) && yyy == ((yy - 0) + 4) ||
                        xxx == ((xx - 0) - 5) && yyy == ((yy - 0) + 5) ||
                        xxx == ((xx - 0) - 6) && yyy == ((yy - 0) + 6) ||
                        xxx == ((xx - 0) - 7) && yyy == ((yy - 0) + 7) ||
                        xxx == ((xx - 0) - 8) && yyy == ((yy - 0) + 8) ||
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 1) ||
                        xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 2) ||
                        xxx == ((xx - 0) - 3) && yyy == ((yy - 0) - 3) ||
                        xxx == ((xx - 0) - 4) && yyy == ((yy - 0) - 4) ||
                        xxx == ((xx - 0) - 5) && yyy == ((yy - 0) - 5) ||
                        xxx == ((xx - 0) - 6) && yyy == ((yy - 0) - 6) ||
                        xxx == ((xx - 0) - 7) && yyy == ((yy - 0) - 7) ||
                        xxx == ((xx - 0) - 8) && yyy == ((yy - 0) - 8) 
                    ) {
                        // console.log('ok');
                        item.classList.add('green');
                    } else {
                        item.classList.remove('green');
                    }
                })
        })

    });
    shoh.addEventListener('click', () =>{
        shoh.style.backgroundColor = 'gold';
        ot.style.backgroundColor = "white";
        vazir.style.backgroundColor = "white";
        fil.style.backgroundColor = "white";
        piyoda.style.backgroundColor = "white";
        tora.style.backgroundColor = "white";
        e.addEventListener('mouseover', (c) =>{
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];

                chesItems.forEach(item => {
                    let xxx = item.classList[0].split('')[1];
                    let yyy = item.classList[1].split('')[1];

                    if( 
                        // fil boshlandi
                    xxx == ((xx - 0) + 1) && yyy == ((yy - 0) - 1) ||
                    xxx == ((xx - 0) + 2) && yyy == ((yy - 0) - 2) ||
                    xxx == ((xx - 0) + 3) && yyy == ((yy - 0) - 3) ||
                    xxx == ((xx - 0) + 4) && yyy == ((yy - 0) - 4) ||
                    xxx == ((xx - 0) + 5) && yyy == ((yy - 0) - 5) ||
                    xxx == ((xx - 0) + 6) && yyy == ((yy - 0) - 6) ||
                    xxx == ((xx - 0) + 7) && yyy == ((yy - 0) - 7) ||
                    xxx == ((xx - 0) + 8) && yyy == ((yy - 0) - 8) ||
                    xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 1) ||
                    xxx == ((xx - 0) + 2) && yyy == ((yy - 0) + 2) ||
                    xxx == ((xx - 0) + 3) && yyy == ((yy - 0) + 3) ||
                    xxx == ((xx - 0) + 4) && yyy == ((yy - 0) + 4) ||
                    xxx == ((xx - 0) + 5) && yyy == ((yy - 0) + 5) ||
                    xxx == ((xx - 0) + 6) && yyy == ((yy - 0) + 6) ||
                    xxx == ((xx - 0) + 7) && yyy == ((yy - 0) + 7) ||
                    xxx == ((xx - 0) + 8) && yyy == ((yy - 0) + 8) ||
                    xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 1) ||
                    xxx == ((xx - 0) - 2) && yyy == ((yy - 0) + 2) ||
                    xxx == ((xx - 0) - 3) && yyy == ((yy - 0) + 3) ||
                    xxx == ((xx - 0) - 4) && yyy == ((yy - 0) + 4) ||
                    xxx == ((xx - 0) - 5) && yyy == ((yy - 0) + 5) ||
                    xxx == ((xx - 0) - 6) && yyy == ((yy - 0) + 6) ||
                    xxx == ((xx - 0) - 7) && yyy == ((yy - 0) + 7) ||
                    xxx == ((xx - 0) - 8) && yyy == ((yy - 0) + 8) ||
                    xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 1) ||
                    xxx == ((xx - 0) - 2) && yyy == ((yy - 0) - 2) ||
                    xxx == ((xx - 0) - 3) && yyy == ((yy - 0) - 3) ||
                    xxx == ((xx - 0) - 4) && yyy == ((yy - 0) - 4) ||
                    xxx == ((xx - 0) - 5) && yyy == ((yy - 0) - 5) ||
                    xxx == ((xx - 0) - 6) && yyy == ((yy - 0) - 6) ||
                    xxx == ((xx - 0) - 7) && yyy == ((yy - 0) - 7) ||
                    xxx == ((xx - 0) - 8) && yyy == ((yy - 0) - 8) ||
                    // fil tugadi
                    // ot boshlandi
                        xxx == ((xx - 0) - 1)  && yyy == yy || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) + 1) ||
                        xxx == xx && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) + 1) || 
                        xxx == ((xx - 0) + 1) && yyy == yy ||
                        xxx == ((xx - 0) + 1) && yyy == ((yy - 0) - 1) ||
                        xxx == xx && yyy == ((yy - 0) - 1) || 
                        xxx == ((xx - 0) - 1) && yyy == ((yy - 0) - 1) ||
                        // ot tugadi
                        // tora boshlandi
                        xxx == xx && yyy == ((yy - 0) - 1) || 
                        xxx == xx && yyy == ((yy - 0) - 2) ||
                        xxx == xx && yyy == ((yy - 0) - 3) ||
                        xxx == xx && yyy == ((yy - 0) - 4) ||
                        xxx == xx && yyy == ((yy - 0) - 5) ||
                        xxx == xx && yyy == ((yy - 0) - 6) ||
                        xxx == xx && yyy == ((yy - 0) - 7) ||
                        xxx == xx && yyy == ((yy - 0) - 8) ||
                        xxx == ((xx - 0) + 1) && yyy == yy ||
                        xxx == ((xx - 0) + 2) && yyy == yy ||
                        xxx == ((xx - 0) + 3) && yyy == yy ||
                        xxx == ((xx - 0) + 4) && yyy == yy ||
                        xxx == ((xx - 0) + 5) && yyy == yy ||
                        xxx == ((xx - 0) + 6) && yyy == yy ||
                        xxx == ((xx - 0) + 7) && yyy == yy ||
                        xxx == ((xx - 0) + 8) && yyy == yy ||
                        xxx == xx && yyy == ((yy - 0) + 1) || 
                        xxx == xx && yyy == ((yy - 0) + 2) ||
                        xxx == xx && yyy == ((yy - 0) + 3) ||
                        xxx == xx && yyy == ((yy - 0) + 4) ||
                        xxx == xx && yyy == ((yy - 0) + 5) ||
                        xxx == xx && yyy == ((yy - 0) + 6) ||
                        xxx == xx && yyy == ((yy - 0) + 7) ||
                        xxx == xx && yyy == ((yy - 0) + 8) ||
                        xxx == ((xx - 0) - 1) && yyy == yy ||
                        xxx == ((xx - 0) - 2) && yyy == yy ||
                        xxx == ((xx - 0) - 3) && yyy == yy ||
                        xxx == ((xx - 0) - 4) && yyy == yy ||
                        xxx == ((xx - 0) - 5) && yyy == yy ||
                        xxx == ((xx - 0) - 6) && yyy == yy ||
                        xxx == ((xx - 0) - 7) && yyy == yy ||
                        xxx == ((xx - 0) - 8) && yyy == yy 
                        // tora tugadi
                    ) {
                        // console.log('ok');
                        item.classList.add('green');
                    } else {
                        item.classList.remove('green');
                    }
                })
        })

    }) 
    tora.addEventListener('click', () =>{
        tora.style.backgroundColor = 'gold';
        ot.style.backgroundColor = "white";
        vazir.style.backgroundColor = "white";
        shoh.style.backgroundColor = "white";
        piyoda.style.backgroundColor = "white";
        fil.style.backgroundColor = "white";
        e.addEventListener('mouseover', (c) =>{
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];

                chesItems.forEach(item => {
                    let xxx = item.classList[0].split('')[1];
                    let yyy = item.classList[1].split('')[1];

                    if(xxx == xx && yyy == ((yy - 0) - 1) || 
                        xxx == xx && yyy == ((yy - 0) - 2) ||
                        xxx == xx && yyy == ((yy - 0) - 3) ||
                        xxx == xx && yyy == ((yy - 0) - 4) ||
                        xxx == xx && yyy == ((yy - 0) - 5) ||
                        xxx == xx && yyy == ((yy - 0) - 6) ||
                        xxx == xx && yyy == ((yy - 0) - 7) ||
                        xxx == xx && yyy == ((yy - 0) - 8) ||
                        xxx == ((xx - 0) + 1) && yyy == yy ||
                        xxx == ((xx - 0) + 2) && yyy == yy ||
                        xxx == ((xx - 0) + 3) && yyy == yy ||
                        xxx == ((xx - 0) + 4) && yyy == yy ||
                        xxx == ((xx - 0) + 5) && yyy == yy ||
                        xxx == ((xx - 0) + 6) && yyy == yy ||
                        xxx == ((xx - 0) + 7) && yyy == yy ||
                        xxx == ((xx - 0) + 8) && yyy == yy ||
                        xxx == xx && yyy == ((yy - 0) + 1) || 
                        xxx == xx && yyy == ((yy - 0) + 2) ||
                        xxx == xx && yyy == ((yy - 0) + 3) ||
                        xxx == xx && yyy == ((yy - 0) + 4) ||
                        xxx == xx && yyy == ((yy - 0) + 5) ||
                        xxx == xx && yyy == ((yy - 0) + 6) ||
                        xxx == xx && yyy == ((yy - 0) + 7) ||
                        xxx == xx && yyy == ((yy - 0) + 8) ||
                        xxx == ((xx - 0) - 1) && yyy == yy ||
                        xxx == ((xx - 0) - 2) && yyy == yy ||
                        xxx == ((xx - 0) - 3) && yyy == yy ||
                        xxx == ((xx - 0) - 4) && yyy == yy ||
                        xxx == ((xx - 0) - 5) && yyy == yy ||
                        xxx == ((xx - 0) - 6) && yyy == yy ||
                        xxx == ((xx - 0) - 7) && yyy == yy ||
                        xxx == ((xx - 0) - 8) && yyy == yy 
                    ) {
                        // console.log('ok');
                        item.classList.add('green');
                    } else {
                        item.classList.remove('green');
                    }
                })
            
        })

    });
    piyoda.addEventListener('click', () =>{
        piyoda.style.backgroundColor = 'gold';
        ot.style.backgroundColor = "white";
        vazir.style.backgroundColor = "white";
        shoh.style.backgroundColor = "white";
        tora.style.backgroundColor = "white";
        shoh.style.backgroundColor = "white";
        e.addEventListener('mouseover', (c) =>{
                let xx = c.target.classList[0].split('')[1];
                let yy = c.target.classList[1].split('')[1];

                chesItems.forEach(item => {
                    let xxx = item.classList[0].split('')[1];
                    let yyy = item.classList[1].split('')[1];

                    if(yy != 8) {
                        if(xxx == xx && yyy == ((yy - 0) - 1) || xxx == xx && yyy == ((yy - 0) - 2)) {
                            item.classList.add('green');
                            if(yy != 7) {
                                if(xxx == xx && yyy == ((yy - 0) - 1)) {
                                    item.classList.add('green');
                                } else {
                                    item.classList.remove('green');
                                }
                            }
                        } else {
                            item.classList.remove('green');
                        }
                    } 
                    else {
                        item.classList.remove('green');
                    }
                })
                
            })
            
        });
        
    })
    
    elUl.addEventListener("mouseout", ()=>{
        chesItems.forEach((item) =>{
            console.log('ok');
            item.classList.remove('green');
            corX.textContent = `x = 0`;
            corY.textContent = `y = 0`;
        })
    })
    
    function vazirFunc(x, y) {
        chesItems.forEach(item => {
            if(chesItems)
            console.log(item.classList[0].split('')[1]);
            console.log(item.classList[1].split('')[1]);
        })
    }