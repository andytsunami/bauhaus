<?php 
	
	ini_set('display_errors', 'on');
	require_once 'config.php';
	header('Content-Type: text/html; charset=utf-8');
	header('Access-Control-Allow-Origin: *');
	
	$conexao = @mysql_connect($host, $usuario, $senha) or exit(mysql_error());
	mysql_set_charset("utf8", $conexao);
	
	mysql_select_db($banco);

	$preenchido = (!empty($_POST['uuid']) AND !empty($_POST['vg']));
	

	if($preenchido){
		$uuid = htmlentities($_POST['uuid'],ENT_QUOTES);
		$vg = htmlentities($_POST['vg'],ENT_QUOTES);


		$sql = "UPDATE acesso SET vg = '{$vg}' WHERE uuid = '{$uuid}';";

			$retorno = mysql_query($sql,$conexao) or exit(mysql_error());

			if($retorno) {
					echo "salvo video game";
			}
	} else {
		echo "vazio";
	}
?>