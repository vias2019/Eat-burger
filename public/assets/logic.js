$(document).ready(function(){
    $("#submit-button").on("click", function (){
        console.log("clicked");
        var data ={
           burger_name: $('#text').val().trim(),
             
        };
    
    
    $.post ("/api/burgers", data,  function(req,res){
        console.log(res);
        var newButton= $("<input/>").attr({
            type:'text'

        });
   
        var devourButton= $("<button>Devour</button>").attr({
            type:'button'

        }); 
       newButton.css( "display", "inline" );
       devourButton.css("display", "inline");
    newButton.addClass("input-group mb-3");
    devourButton.addClass("btn btn-outline-secondary");
    newButton.text(data.burger_name);
    devourButton.text('Devour');
    $("#resultButton").append(newButton);
    $("#resultButton").append(devourButton);

    
    });
    
    // $.get ("/", function (req, res) {
    //     console.log("here"+req.body());
    //   });
    
    
    });









});
