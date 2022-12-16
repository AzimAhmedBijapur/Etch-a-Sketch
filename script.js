

function initialize(){

    //Initial prompt

    do{
        res=prompt('Enter the resolution of canvas : ');
    }while(isNaN(res) || res=='')

    //Create the canvas

    let canvas=document.querySelector('.canva');

    canvas.innerHTML="";

    let totalRow=res;

    console.log(totalRow);

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

    console.log(pixels);

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

    console.log(pixels);

    for(let i=0;i<pixels.length;i++){

        pixels[i].addEventListener('mouseover',()=>{

            pixels[i].setAttribute('style','background-color:black;');

        });      

    }
}

function eraseIt(){

    const pixels=document.querySelectorAll('.canva div div');

    console.log(pixels);

    for(let i=0;i<pixels.length;i++){

        pixels[i].addEventListener('mouseover',()=>{

            pixels[i].setAttribute('style','background-color:white;');

        });      

    }
}
initialize();
