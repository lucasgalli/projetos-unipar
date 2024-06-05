<?php
require_once("conexao.php");

// Recebe os dados do formulário enviados via POST
$enquete = $_POST['titulo'];
$opcoes = $_POST['opcoes'];

try {

	//envolve a compilação da instrução
	//ajudar a melhorar o desempenho, especialmente se a mesma consulta for executada várias vezes com parâmetros diferentes
	//prevenir ataques de injeção de SQL, pois os parâmetros são vinculados à instrução de forma segura.
	$insertEnquete = $conn->prepare("INSERT INTO enquetes (titulo) VALUES (:enquete)")->execute(['enquete' => $enquete]);

	//$conn->query("INSERT INTO enquetes (titulo) VALUES ('$titulo')");

    // Obtém o ID da última enquete inserida
    $idEnquete = $conn->lastInsertId();
    
    // Prepara a inserção das opções na tabela 'opcoes'
    $insertOpcao = $conn->prepare("INSERT INTO opcoes (fk_enquete, id_opcao, opcao) VALUES (:fk_enquete, :id_opcao, :opcao)");
    foreach ($opcoes as $key => $opcao) {
        // Insere cada opção relacionada à enquete no banco de dados
        $insertOpcao->execute(['fk_enquete' => $idEnquete, 'id_opcao' => $idEnquete.''.$key, 'opcao' => $opcao]);
    }

    // Retorna um JSON indicando sucesso na operação
    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    // Em caso de erro na inserção, retorna um JSON com a mensagem de erro
    echo json_encode(["success" => false, "error" => $conn->error]);
}

// Encerra a conexão com o banco de dados, não usado caso a aplicação seja conexões persistentes.
//Conexões persistentes são gerenciadas pelo driver PDO,  PHP mantém a conexão aberta e a coloca em um pool de conexões para ser reutilizada.
//deve sobrar recursos no servidor para usar conexão persistente
$conn = null;

?>