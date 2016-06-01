<?php 
	
	ini_set('display_errors', 'on');
	require_once 'config.php';
	header('Content-Type: text/html; charset=utf-8');
	header('Access-Control-Allow-Origin: *');
	
	$conexao = @mysql_connect($host, $usuario, $senha) or exit(mysql_error());
	mysql_set_charset("utf8", $conexao);
	
	mysql_select_db($banco);

	$uuid = "";
	$preenchido = (!empty($_POST['nome']) AND !empty($_POST['email']));

	/*if(!empty($_POST['uuid'])){
		$uuid = $_POST['uuid'];
	} else {
		$uuid = md5(uniqid(rand(), true));	
	}*/
	$uuid = md5(uniqid(rand(), true));

	if($preenchido){
		$nome = htmlentities($_POST['nome'],ENT_QUOTES);
		$email = htmlentities($_POST['email'],ENT_QUOTES);


		$sql = "INSERT INTO acesso (uuid,nome,email,acesso) VALUES('{$uuid}','{$nome}','{$email}',now());";

			$retorno = mysql_query($sql,$conexao) or exit(mysql_error());

			if($retorno) {
					echo $uuid;
			}
	} else {
		$sql = "INSERT INTO acesso (uuid,acesso) VALUES('{$uuid}',now());";

			$retorno = mysql_query($sql,$conexao) or exit(mysql_error());

			if($retorno) {
					echo $uuid;
			}
	}
?>