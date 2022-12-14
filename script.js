
let canvas=document.querySelector('.canva');

let totalRow=100;

let totalCol=100;

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


