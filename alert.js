$(document).ready(function(){
    
    $("#search").on("click", function(){
        var query = $("#query").val();
        var url = "https://info2180-lab6-ksimmonds.c9users.io/request.php?q="+query;
        $.ajax(url,{
            method: "GET",
        }).done(function(r){
            $("#result").html(r);
        }).fail(function(e){
            $("#result").html(e);
        });
    });
});