document.getElementById("button").onclick = function() {
    alert("Thanks!");
};
    
$("#circle").click(function(){
    alert("I'm Here!");
});

$("#me").click(function(){
    alert("Yep, it's me!")
});

var test = document.getElementsByTagName("input");
for(var i=0; i<test.length-1; i++){
    test[i].style.width = "90%";
}
