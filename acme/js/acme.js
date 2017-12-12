$(document).ready(function(){
    $.getJSON("js/acme.json", function(json){
        $(".productContent").hide();
        $("#listI1").append(json.Anvils[0].name);
        $("#listI2").append(json.Explosives[0].name);
        $("#listI3").append(json.Decoys[0].name);
        $("#listI4").append(json.Traps[0].name);
        console.log("JS list load complete");
        $("title").append(" Home");
        $("#pageTitle").append("Welcome to A.C.M.E.");
        
        $("#listI1").click(function(){
            clearSlots();
            $("title").append(" Anvil");
            $(".productContent").show();
            $("#pageTitle").append("Solid Steel Anvil");
            var picLocal = json.Anvils[0].path;
            $("#productPic").append('<img src="' + picLocal + '" />');
            $("#productDesc").append(json.Anvils[0].description);
            $("#productMan").append("<b>Built by: </b>" + json.Anvils[0].manufacturer);
            $("#productReviews").append("<b>Customer Score: </b>" + json.Anvils[0].reviews + "/5");
            $("#productPrice").append("<b>Price: </b>$" + json.Anvils[0].price);
        })
        $("#listI2").click(function(){
            clearSlots();
            $("title").append(" T.N.T.");
            $(".productContent").show();
            $("#pageTitle").append("Top Tier T.N.T.");
            var picLocal = json.Explosives[0].path;
            $("#productPic").append('<img src="' + picLocal + '" />');
            $("#productDesc").append(json.Explosives[0].description);
            $("#productMan").append("<b>Built by: </b>" + json.Explosives[0].manufacturer);
            $("#productReviews").append("<b>Customer Score: </b>" + json.Explosives[0].reviews +"/5");
            $("#productPrice").append("<b>Price: </b>$" + json.Explosives[0].price);
        })
        $("#listI3").click(function(){
            clearSlots();
            $("title").append(" Decoy");
            $(".productContent").show();
            $("#pageTitle").append("Life-like Decoy");
            var picLocal = json.Decoys[0].path;
            $("#productPic").append('<img src="' + picLocal + '" />');
            $("#productDesc").append(json.Decoys[0].description);
            $("#productMan").append("<b>Built by: </b>" + json.Decoys[0].manufacturer);
            $("#productReviews").append("<b>Customer Score: </b>" + json.Decoys[0].reviews +"/5");
            $("#productPrice").append("<b>Price: </b>$" + json.Decoys[0].price);
        })
        $("#listI4").click(function(){
            clearSlots();
            $("title").append(" Trap");
            $(".productContent").show();
            $("#pageTitle").append("10-Tooth Trap");
            var picLocal = json.Traps[0].path;
            $("#productPic").append('<img src="' + picLocal + '" />');
            $("#productDesc").append(json.Traps[0].description);
            $("#productMan").append("<b>Built by: </b>" + json.Traps[0].manufacturer);
            $("#productReviews").append("<b>Customer Score: </b>" + json.Traps[0].reviews +"/5");
            $("#productPrice").append("<b>Price: </b>$" + json.Traps[0].price);
        })
    });
});
function clearSlots() {
    $("#homeContent").hide();
    $("#pageTitle").empty();
    $("#productPic").empty();
    $("#productDesc").empty();
    $("#productMan").empty();
    $("#productReviews").empty();
    $("#productPrice").empty();
    $("title").empty();
}