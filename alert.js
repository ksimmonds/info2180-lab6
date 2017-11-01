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
    
    $("#searchall").on("click", function(){
        var url = " https://info2180-lab6-ksimmonds.c9users.io/request.php?q=&all=true";
        $.ajax(url, {
           method: "GET",
           dataType: "xml",
        }).done(function(r){
           var definitions = $(r).find("definition");
           $("#result").html(""); 
           $("#result").append('<ol></ol>');
           
           $(definitions).each(function(){
               var retrieve = "<h3>" + $(this).attr("name") + "</h3>";
               retrieve += "<p>" + $(this).text() + "</p>";
               retrieve += "<p> -" + $(this).attr("author") + "</p>";
               $("#result ol").append("<li>" + retrieve + "</li>");
           });
        }).fail(function(e){
           $("#result").html(e);
        });
    });
});