$(document).ready(function(){
    
    $("#search").on("click", function(){
         
        var query = $("#query").val();
        var url = "https://info2180-lab6-ksimmonds.c9users.io/request.php?q=definition";
        $.ajax({url:url,
            method: "GET",
        }).done(function(r){
            alert(r);
        }).fail(function(e){
            alert(e);
        });
        
        
    });
});