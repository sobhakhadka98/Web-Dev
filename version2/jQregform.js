$("#courses").click(function(){
    if($("#courses").val()==1 || $("#courses").val()==4)
        $(".specialization").show();
    else
        $(".specialization").hide();
    if($("#courses").val()==4 || $("#courses").val()==5)
        $("#bachelor").show();
    else
        $("#bachelor").hide();
});

$("#repeat").click(function(){
    if($("#repeat").is(":checked")){
        $("#street2").val($("#street1").val());
        $("#city2").val($("#city1").val());
        $("#state2").val($("#state1").val());
        $("#zip2").val($("#zip1").val());
        $("#country2").val($("#country1").val());
    } else {
        $("#street2").val("");
        $("#city2").val("");
        $("#state2").val("");
        $("#zip2").val(null);
        $("#country2").val("");
    }
})