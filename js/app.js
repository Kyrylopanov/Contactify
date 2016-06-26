
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
        
        function showOne(id) {
    $('.hide').not('#' + id).hide();
        }
        
        function showCity(id) {
    $('.hide').not('#' + id).hide();
        }
        
    if (personVal == "Giedrius") {   
showOne(1);
    };
        
        if (personVal == "Egidijus") {
showOne(2);
    };
        
        if (personVal == "Donatas") {
showOne(3);
    };
        
        if (personVal == "Vidmantas") {
showOne(4);
    };
        
        if (personVal == "Jolanta") {
showOne(5);
    };
        
         if (personVal == "Raminta") {
showOne(6);
    };
        if (city == "Vilnius") {   
showCity('1');
    };
        if (city == "Kaunas") {   
showCity('3');
    };
        if (city == "Taurage") {   
showCity('4');
    };
        if (city == "Klaipeda") {   
showCity('5');
    };
        if (city == "Liepalingis") {   
showCity('6');
    };
})
})//document.ready
