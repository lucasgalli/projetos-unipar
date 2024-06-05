<?php
// Permite que qualquer origem acesse o recurso, útil para CORS
//O CORS (Cross-origin Resource Sharing) é um mecanismo usado para adicionar cabeçalhos HTTP que informam aos navegadores para permitir que uma aplicação Web
//header("Access-Control-Allow-Origin: *");
// Permite apenas os métodos POST, GET e OPTIONS para acessar o recurso
//header("Access-Control-Allow-Methods: POST");
// Permite que certos cabeçalhos sejam usados na solicitação
//header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Define o tipo de conteúdo como JSON e o charset como UTF-8
//header('Content-type: application/json; charset=utf-8');

// Definição das variáveis de conexão ao banco de dados
$servidor = 'localhost';
$database = 'enquetes';
$usuario = 'root';
$senha = 'mobis';

try {
    // Configura o Data Source Name (DSN) para a conexão PDO com MySQL
    $dsn = "mysql:host=$servidor;dbname=$database";
    // Cria uma nova instância de PDO com os parâmetros de conexão
    $conn = new PDO($dsn, $usuario, $senha, array(
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4", //utf8 Configura o conjunto de caracteres para UTF-8
        //PDO::ATTR_PERSISTENT => true // (Comentado) Configura a conexão persistente
    ));
} catch(PDOException $i) {
    // Em caso de erro na conexão, retorna um JSON com a mensagem de erro
    die(json_encode(["success" => false, "error" => "Connection failed: " . $conn->connect_error]));
}

?>