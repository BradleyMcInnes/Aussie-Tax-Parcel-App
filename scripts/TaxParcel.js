
 $(document).ready(function() {
    $('.JS-Topbox--nav-dropdown').click(function() {
        var $this = $(this);
        
      if ($this.children('.Topbox--nav-dropdown-menu').hasClass('open')) {
        $this.removeClass('active');
        $this.children('.Topbox--nav-dropdown-menu').removeClass('open');
        $this.children('.Topbox--nav-dropdown-menu').fadeOut("fast");
      } 
        
        
        else {
          $this.addClass('active');
          $this.children('.Topbox--nav-dropdown-menu').addClass('open');
          $this.children('.Topbox--nav-dropdown-menu').fadeIn("fast");
        }

    });
    

    
});


function delta(){
    var CurrentName = document.getElementById('CurrentName').value;
    var TargetName = document.getElementById('TargetName').value;
    var CurrentUnits = Number(document.getElementById('CurrentUnits').value);
    var TargetUnits = Number(document.getElementById('TargetUnits').value);
    var OutputName = document.getElementById('OutputName').value;
    var OutputDelta = document.getElementById('OutputDelta').value;

    if(CurrentName==" " || TargetName==" " || CurrentUnits==" " || TargetUnits==" "){
    	alert('One or more inputs is empty');
    	}
    	else if(TargetName!=CurrentName){
    	alert('Target and current entities must match');
    	}
    	else{
    	var delta = TargetUnits - CurrentUnits;
        //alert(delta);
    	document.getElementById('OutputName').innerHTML = TargetName;
        document.getElementById('OutputDelta').innerHTML = delta;
    	}    				
}


