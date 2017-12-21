
function delta(){
    var CurrentName = document.getElementById('CurrentName').value;
    var TargetName = document.getElementById('TargetName').value;
    var CurrentUnits = Number(document.getElementById('CurrentUnits').value);
    var TargetUnits = Number(document.getElementById('TargetUnits').value);

    if(CurrentName==" " || TargetName==" " || CurrentUnits==" " || TargetUnits==" "){
    	alert('One or more inputs is empty');

    }
}
