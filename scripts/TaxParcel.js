
function delta(){
    var CurrentName = document.getElementById('CurrentName').value;
    var TargetName = document.getElementById('TargetName').value;
    var CurrentUnits = Number(document.getElementById('CurrentUnits').value);
    var TargetUnits = Number(document.getElementById('TargetUnits').value);

    if(CurrentName==" " || TargetName==" " || CurrentUnits==" " || TargetUnits==" "){
    	alert('One or more inputs is empty');
    	}
    	else if(TargetName!=CurrentName){
    	alert('Target and current entities must match');
    	}
    	else{
    	var delta = TargetUnits - CurrentUnits;
    	alert('The difference is ' + delta);
    	}    				
}
