
$(document).ready(function(){
    
    // Regexp 
    $(".text-name").on("input", function(){
        var regexp = /[^a-zA-Z]/g;
        if($(this).val().match(regexp)){
            $(this).val( $(this).val().replace(regexp,'') );
            }
    });
    
     // Sort by name, Sort by City
    $('#btnFilter').click(function() {
        
        var personVal = $("#enterName").val();
        var city = $("#select-city").val();
        
        
    if (personVal == "Giedrius") {  
            $('.hide2').hide();
            $('.hide3').hide();
            $('.hide4').hide();
            $('.hide5').hide();
            $('.hide6').hide();
$('.hide1').show();
    };
        
        if (personVal == "Egidijus") {
            $('.hide1').hide();
            $('.hide3').hide();
            $('.hide4').hide();
            $('.hide5').hide();
            $('.hide6').hide();
$('.hide2').show();
    };
        
        if (personVal == "Donatas") {
            $('.hide1').hide();
            $('.hide2').hide();
            $('.hide4').hide();
            $('.hide5').hide();
            $('.hide6').hide();
$('.hide3').show();
    };
        
        if (personVal == "Vidmantas") {
            $('.hide1').hide();
            $('.hide2').hide();
            $('.hide3').hide();
            $('.hide5').hide();
            $('.hide6').hide();
$('.hide4').show();
    };
        
        if (personVal == "Jolanta") {
            $('.hide1').hide();
            $('.hide2').hide();
            $('.hide3').hide();
            $('.hide4').hide();
            $('.hide6').hide();
$('.hide5').show();
    };
        
         if (personVal == "Raminta") {
            $('.hide1').hide();
            $('.hide2').hide();
            $('.hide3').hide();
            $('.hide4').hide();
            $('.hide5').hide();
$('.hide6').show();
             
             
    };
        if (city == "Vilnius") {   
            $('.hide1').show();
            $('.hide2').show();
            $('.hide3').hide();
            $('.hide4').hide();
            $('.hide5').hide();
            $('.hide6').hide();
    };
        if (city == "Kaunas") {   
            $('.hide3').show();
            $('.hide1').hide();
            $('.hide2').hide();
            $('.hide4').hide();
            $('.hide5').hide();
            $('.hide6').hide();
    };
        if (city == "Taurage") {  
            $('.hide4').show();
            $('.hide1').hide();
            $('.hide2').hide();
            $('.hide3').hide();
            $('.hide5').hide();
            $('.hide6').hide();
    };
        if (city == "Klaipeda") {   
            $('.hide5').show();
            $('.hide1').hide();
            $('.hide2').hide();
            $('.hide3').hide();
            $('.hide4').hide();
            $('.hide6').hide();
    };
        if (city == "Liepalingis") {   
            $('.hide6').show();
            $('.hide1').hide();
            $('.hide2').hide();
            $('.hide3').hide();
            $('.hide4').hide();
            $('.hide5').hide();
    };
})
})//document.ready
