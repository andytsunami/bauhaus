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

              $("#tv").click(function(){
              	$("#uuid").val(parent.$("#uuid").val());
            	$.ajax({
		           type: "POST",
		           url: $.paramsPage.contexto + "televisao.php",
		           data: $("#form").serialize(), 
		           success: function(data)
		           {
		               console.log("Pesquisa televisao preenchida." + data);
		               parent.close();
		           }
		         });
            });

              $("#vg").click(function(){
              	$("#uuid").val(parent.$("#uuid").val());
            	$.ajax({
		           type: "POST",
		           url: $.paramsPage.contexto + "videoGame.php",
		           data: $("#form").serialize(), 
		           success: function(data)
		           {
		               console.log("Pesquisa videogame preenchida." + data);
		               parent.close();
		           }
		         });
            });
      });