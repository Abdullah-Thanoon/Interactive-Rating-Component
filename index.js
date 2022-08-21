$('.number').click (function(){
    $('#rate').html($(this).html());
});

$('.submit').one("click", function(){

    this.setAttribute("style", "color: hsl(25, 97%, 53%); background-color: white;");
    setTimeout(function(){
        document.getElementById("css").href="style2.css";
        document.getElementById("favicon").src="images/illustration-thank-you.svg";
        $('h3').text('Thank you!');
        $('p').text('We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!');
        $(".number, .sumbit").text('');
        x.style.display = "block";
    },1000);

    
    
});


var x = document.getElementById("selected");
x.style.display = "none";
