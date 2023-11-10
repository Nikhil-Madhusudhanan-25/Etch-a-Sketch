let containerDiv= document.getElementById('container');
let count=0;
for(let i=0;i<16;i++)
 for(let j=0;j<16;j++)
    {   count++;
        console.log(count);
        let squareDiv= document.createElement('div');
        squareDiv.setAttribute('id', 'gridDiv');
        containerDiv.appendChild(squareDiv);}
let squareDivList= document.querySelectorAll('#gridDiv');
squareDivList.forEach((squareDiv)=>{
    squareDiv.addEventListener('mouseover', ()=>{
        squareDiv.style.backgroundColor="black";
    })
})