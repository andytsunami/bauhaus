<?php 
	
	ini_set('display_errors', 'on');
	require_once 'config.php';
	header('Content-type: application/json');
	header('Access-Control-Allow-Origin: *');
	
	$conexao = @mysql_connect($host, $usuario, $senha) or exit(mysql_error());
	mysql_set_charset("utf8", $conexao);
	
	mysql_select_db($banco);

	$sql = "SELECT id,uuid,acesso,nome,vg,computador,opiniao,email,tv FROM acesso order by id desc;";

	$query = mysql_query($sql,$conexao);

	$array = array();

	while($array[] = mysql_fetch_assoc($query)){
		
	}

	echo json_encode($array);





?>