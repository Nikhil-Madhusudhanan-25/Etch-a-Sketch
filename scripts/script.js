let containerDiv= document.getElementById('container');
for(let i=0;i<16;i++)
 for(let j=0;j<16;j++)
    {   
        let squareDiv= document.createElement('div');
        squareDiv.setAttribute('id', 'gridDiv');
        containerDiv.appendChild(squareDiv);}
let squareDivList= document.querySelectorAll('#gridDiv');
squareDivList.forEach((squareDiv)=>{
    squareDiv.addEventListener('mouseover', ()=>{
        squareDiv.style.backgroundColor="black";
    })
})
let customGridButton= document.getElementById('custom');
customGridButton.addEventListener('click', ()=>{
    let gridValue=parseInt(prompt("Enter side length, minimum 2 maximum 100"));
    if(gridValue>=2&&gridValue<=100)
        squareDivList.forEach((squareDiv)=>{
            let newValue= 100/gridValue;
            let count=0;
            while(containerDiv.firstChild)
                containerDiv.removeChild(containerDiv.lastChild);
            for(let i=0;i<gridValue;i++)
                for(let j=0;j<gridValue;j++)
                {   let squareDiv= document.createElement('div');
                    squareDiv.setAttribute('id', 'gridDiv');
                    containerDiv.appendChild(squareDiv);
                    squareDiv.style.flexBasis= newValue+"%";}
                    
        })
        let squareDivList2= document.querySelectorAll('#gridDiv');
        squareDivList2.forEach((squareDiv)=>{
            squareDiv.addEventListener('mouseover', ()=>{
                squareDiv.style.backgroundColor="black";
            })})
})