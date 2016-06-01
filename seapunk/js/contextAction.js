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
		               parent.$("#uuid").val(data);
		               parent.close();
		           }
		         });
            });

              $("#comp").click(function(){
              	$("#uuid").val(parent.$("#uuid").val());
            	$.ajax({
		           type: "POST",
		           url: $.paramsPage.contexto + "computador.php",
		           data: $("#form").serialize(), 
		           success: function(data)
		           {
		               console.log("Pesquisa computador preenchida.");
		               parent.close();
		           }
		         });
            });
      });