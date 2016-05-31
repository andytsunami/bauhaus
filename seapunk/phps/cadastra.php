<?php 
	
	ini_set('display_errors', 'on');
	require_once 'config.php';
	header('Content-Type: text/html; charset=utf-8');
	header('Access-Control-Allow-Origin: *');
	
	$conexao = @mysql_connect($host, $usuario, $senha) or exit(mysql_error());
	mysql_set_charset("utf8", $conexao);
	
	mysql_select_db($banco);

	$sql = "select id,uuid, nome from acesso;";

		$retorno = mysql_query($sql,$conexao) or exit(mysql_error());

		if(!empty($retorno)){
			while($linha = mysql_fetch_array($retorno)){
				echo $linha["nome"];
			}	
	}
?>