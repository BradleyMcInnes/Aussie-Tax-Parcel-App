/* global document */

var CurrentUnits = document.getElementsByClassName('.CurrentUnits');
var TargetUnits = document.getElementsByClassName('.TargetUnits');


function Deltas() {
    var delta = TargetUnits - CurrentUnits;
    alert(delta);
}