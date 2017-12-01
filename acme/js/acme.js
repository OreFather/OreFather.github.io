$(document).ready(function(){
    $.getJSON("js/acme.json", function(json){
        $("#listI1").append(json.Anvils[0].name);
        $("#listI2").append(json.Explosives[0].name);
        $("#listI3").append(json.Decoys[0].name);
        $("#listI4").append(json.Traps[0].name);
        console.log("JS li load complete");
    });
});