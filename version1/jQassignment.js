$("#courses").click(function(){
    if($("#courses").val()==1 || $("#courses").val()==4)
        $("#spec").show();
    else
        $("#spec").hide();
    if($("#courses").val()==4 || $("#courses").val()==5)
        $("#bachelor").show();
    else
        $("#bachelor").hide();
});