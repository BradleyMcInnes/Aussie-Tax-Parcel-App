//alert('Hi Milla, I hope this works');

var NumOne,NumTwo;
function setValues(){
    NumOne = Number(document.getElementById('NumOne').value);
    NumTwo = Number(document.getElementById('NumTwo').value);
}

function sum(){
    setValues();
    result = NumOne+NumTwo;
    alert("The sum is equal to "+results);
}
