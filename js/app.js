$(document).ready(function(){
    
    
    var elementsArr = [],
		reset = false,
    //Connected with JSON
    AllShow = function () {

		var nameText = $('#enterName').val();
        var cityText = $('#select-city').val();
		
        // Make array for objects
        $.getJSON('./js/contacts.json', "", function (result) {
           
			// Push in array objects
            $.each(result, function (key, field) {
				
				//Functio to show table with AJAX JSON
				var printRow = function () {
					$('tbody').append('<tr id="1">' + key + '<td id="name">' + field.name + '</td> <td>' + field.surname + '</td><td id="city">' + field.city + '</td><td>' + field.email + '</td><td>' + field.phone + '<a href="#">Actions<img src="./images/actions.png" alt="actions"></a></td></tr>');
				};
				
			//Filter City, Name
			if ((nameText || cityText) && !cityText && field.name === nameText)
				printRow();
			if ((nameText || cityText) && field.name === nameText && field.city === cityText)
				printRow();
			if ((nameText || cityText) && !nameText && field.city === cityText)
				printRow();
			if (!nameText && !cityText)
				printRow();
            
				
				
				
			});
        });
	}; // End All show function
   
	// Regexp 
    $(".text-name").on("input", function () {
        var regexp = /[^a-zA-Z]/g;
        if($(this).val().match(regexp)) {
            $(this).val($(this).val().replace(regexp, '') );
            }
    });
    
    
    // Sort form
    $('table#fbody').each(function () {
        
        var $table = $(this);
        
        $('th', $table).each(function (column) {
            if ($(this).is('.alphabetic')) {
                $(this).click(function () {
                    var sortOrder = $('table#fbody').data('order'),
					rows = $table.find('tbody > tr').get();
                    
                    if(sortOrder == 'd' || sortOrder == ''){
                        $('table#fbody').data('order','a');
                        rows.sort(function(a,b){
                            var keyA = $(a).children('td').eq(column).text();
                            var keyB = $(b).children('td').eq(column).text();
                            
                            if (keyA < keyB){
                                return 1;
                            }
                            if (keyA > keyB){
                                return -1;
                            }
                            return 0;
                        });
                    }
                    else {
                        $('table#fbody').data('order','d');
                        rows.sort(function(a,b){
                            var keyA = $(a).children('td').eq(column).text();
                            var keyB = $(b).children('td').eq(column).text();
                            
                            if (keyA < keyB){
                                return -1;
                            }
                            if (keyA > keyB){
                                return 1;
                            }
                            return 0;
                        });
                        
                        }
                    // Enter to the table sorted elements
                    $.each(rows, function(index, row){
                        $table.children('tbody').append(row);
                    });
                });
            }
        });
    }); // End Sort form
    

    // Load json objects
    $('#btnFilter').on("click", function () {
        //Delete old table
        $('tbody').empty();
        AllShow();
    });
    
    //Reset button
    $('.container-btn1>.left-section').on("click", function () {
        //Delete old table
        $('tbody').empty();
		//resert #select-city to the zero.
		$('#select-city')[0].selectedIndex = 0;
		//Clear the text input
		$('#enterName')[0].value = "";
		//Enter the table with new values.
        AllShow();
    });
	
	// Load All show array when is loaded
	$(window).load(AllShow());

});// End document.ready
