<?php

require_once("conexao.php");

/* echo '<pre>';
print_r($_POST);
exit(); */

$idOpcao = $_POST['id_opcao'];

try {
	if(!empty($_POST['incremento'])){
		$conn->prepare("INSERT INTO votos(fk_opcao) VALUES (:fk_opcao)")->execute(['fk_opcao' => $idOpcao]);
	}else{
		$conn->prepare("DELETE FROM votos WHERE fk_opcao = :fk_opcao LIMIT 1")->execute([':fk_opcao' => $idOpcao]);
	}

	echo json_encode(["success" => true]);
} catch (PDOException $e) {
    // Em caso de erro na inserção, retorna um JSON com a mensagem de erro
    echo json_encode(["success" => false, "error" => $conn->error]);
}

$conn = null;
?>