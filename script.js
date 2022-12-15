
//Initial prompt
do{
    var res=prompt('Enter the resolution of canvas : ');
}while(isNaN(res))

var slider=document.querySelector('#pixOfCanvas');

var outputSlider=document.querySelector('#output');

slider.value=res;

outputSlider.innerHTML=slider.value+" x "+slider.value;

slider.oninput=function(){
    outputSlider.innerHTML=slider.value+" x "+slider.value;
    }

//Clear



//Draw
let canvas=document.querySelector('.canva');

let totalRow=res

console.log(totalRow);

let totalCol=res;

for(let i=0;i<totalRow;i++){

    let horizontalRow=document.createElement('div');
    canvas.appendChild(horizontalRow);

    for(let j=0;j<totalCol;j++){
        
        let columnforEachRow=document.createElement('div');
        horizontalRow.appendChild(columnforEachRow);
        columnforEachRow.addEventListener('mouseover',(columnforEachRow)=>{
            columnforEachRow.target.classList.add('changeIt');
        });
        
    }
}


