let containerDiv= document.getElementById('container');
let count=0;
for(let i=0;i<16;i++)
 for(let j=0;j<16;j++)
    {   count++;
        console.log(count);
        let squareDiv= document.createElement('div');
        squareDiv.setAttribute('id', 'gridDiv');
        squareDiv.textContent='howdy';
        containerDiv.appendChild(squareDiv);}