 $(document).ready(function(){
 	$.paramsPage = {
		contexto: "http://josepaulodesigndigital.com/seapunk/",
		uuid: ""
	};

            $("#enviar").click(function(){
            	$.ajax({
		           type: "POST",
		           url: $.paramsPage.contexto + "cadastra.php",
		           data: $("#form").serialize(), 
		           success: function(data)
		           {
		               alert(data);
		           }
		         });
            });
      });