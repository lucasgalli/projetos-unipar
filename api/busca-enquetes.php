<?php
require_once("conexao.php");

try {
    $buscaEnquetes = $conn->prepare("SELECT enquetes.id, id_opcao, opcao, titulo FROM enquetes 
										INNER JOIN opcoes
										ON opcoes.fk_enquete=enquetes.id
										WHERE 1");
    $buscaEnquetes->execute();
    $enquetes = $buscaEnquetes->fetchAll(PDO::FETCH_ASSOC);

	$return = array();

	foreach ($enquetes as $key => $enquete) {

		$idEnquete = $enquete['id'];
		
		$return[$idEnquete]['enquete'] = $enquete['titulo'];
		$return[$idEnquete]['opcoes'][$enquete['id_opcao']] = $enquete['opcao'];

	}

	/*echo '<pre>';
	print_r($return);
	echo '</pre>';*/

	echo json_encode($return);
} catch (PDOException $e) {
    // Display error message
    echo 'Error: ' . $e->getMessage();
}
?>