$(function () {
    $("#toggle").css( "display", "none" );
});

function getData(input) {
    $.ajax({
        url: input,
        dataType: "jsonp",
        success: function (data) {
            let location = data['location']['city'] + ", " + data['location']['state'];
            let temp_f = data['current_observation']['temp_f'];
            console.log("Current temperature in " + location + " is: " + temp_f);
            let summary_data = data['current_observation']['weather'];
            let wind = data['current_observation']['wind_dir'] + " @ " + data['current_observation']['wind_mph'] + " MPH ";
            let hi = data['forecast']['simpleforecast']['forecastday'][1]['high']['fahrenheit'];
            let lo = data['forecast']['simpleforecast']['forecastday'][1]['low']['fahrenheit'];
            let icon = data['current_observation']['icon_url'];


            $("#location").text(location);
            //$("#temp").html(Math.round(temp_f) + "&#8457;");
            $("#temp").html(parseInt(temp_f) + "&#8457;");
            $("#high-low").html(parseInt(hi) + "&#8457; / " + parseInt(lo) + "&#8457;");
            $("#summary").text(summary_data);
            $("#wind").text(wind);
            $("title").html(location + " | Weather Site | joedawalker.github.io");
            //$("#sum-img").attr("src", icon);
            $("#cur-sum-img, #sum-img").attr("src", icon);





            $("#cover").fadeOut(250);
        }
    });

}

$('#query').keyup(function(){
    // All code will be inside of this block
    $("#toggle").css( "display", "none" );
    let value = $('#query').val();
    let rExp = new RegExp(value, "i");
    $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data);
        let output = '<ol class="sreturn">';
        $.each(data.RESULTS, function(key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="https://api.wunderground.com/api/23ff9a854543e5a5/geolookup/conditions/forecast' + val.l + '.json" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page

        $(".sreturn").on("click", "a", function (evt) {
            evt.preventDefault();
            // get the location of the wu api file corresponding with the clicked location
            let link = $(this).attr('href');
            console.log(link);
            $("ol").detach(".sreturn");

            $("#toggle").css( "display", "block" );
            getData(link);
        });
    }); // end getJSON


}); // end keyup