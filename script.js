

function initialize(){

    //Initial prompt

    do{
        res=prompt('Enter the resolution of canvas : ');
    }while(isNaN(res) || res=='');

    //Create the canvas

    let canvas=document.querySelector('.canva');

    canvas.innerHTML="";

    let totalRow=res;

    let totalCol=res;

    for(let i=0;i<totalRow;i++){

        var horizontalRow=document.createElement('div');

        canvas.appendChild(horizontalRow);

        for(let j=0;j<totalCol;j++){
            
            var columnforEachRow=document.createElement('div');

            horizontalRow.appendChild(columnforEachRow);

            columnforEachRow.addEventListener('mouseover',(columnforEachRow)=>{

                columnforEachRow.target.classList.add('changeIt');
            })
            
        }
    }

}

function clearIt(){

    const pixels=document.querySelectorAll('.changeIt');

    for(let i=0;i<pixels.length;i++){

        pixels[i].setAttribute('style','background-color:white;');
    }
    
}

function colorIt(){

    const pixels=document.querySelectorAll('.canva div div');

    for(let i=0;i<pixels.length;i++){

        pixels[i].addEventListener('mouseover',()=>{

            var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

            var reg=/^#([0-9a-f]{3}){1,2}$/i;

            if(reg.test(randomColor)){

                pixels[i].setAttribute('style',`background-color:${randomColor};`);
            }
            else{
                
            }

        });      

    }
}

function blackIt(){

    const pixels=document.querySelectorAll('.canva div div');

    for(let i=0;i<pixels.length;i++){

        pixels[i].addEventListener('mouseover',()=>{

            pixels[i].setAttribute('style','background-color:black;');

        });      

    }
}

function eraseIt(){

    const pixels=document.querySelectorAll('.canva div div');

    for(let i=0;i<pixels.length;i++){

        pixels[i].addEventListener('mouseover',()=>{

            pixels[i].setAttribute('style','background-color:white;');

        });      

    }
}

initialize();

const button= document.querySelectorAll('.controls button');

for(let i=0;i<button.length;i++){
    
    button[i].addEventListener('mouseover',()=>{

        const audio= document.querySelector('.hoverButton');
        audio.currentTime=0;
        audio.play();
    })
    button[i].addEventListener('click',()=>{

        const audio= document.querySelector('.clickButton');
        audio.currentTime=0;
        audio.play();
    })
}