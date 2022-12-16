

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

initialize();