<?php     
    // conectando com o banco de dados
    
    $host = "";
    $username = "";
    $password = "";
    $database = "";
    $conn =  mysqli_connect($host,$username,$password,$database) or die("Database Error");

    // executando a query

    $escapedInput = mysqli_real_escape_string($conn, $_POST['text']);
    $query = "SELECT replies FROM chatbot WHERE queries LIKE '%$escapedInput%'";
    $query_result = mysqli_query($conn, $query) or die('Error');

    // retornando o resultado

    if (mysqli_num_rows($query_result) > 0) {
        $fetch_data = mysqli_fetch_assoc($query_result);
        echo $fetch_data['replies'];
        
    } else{
        echo "Desculpe, ainda não consigo responder isso";
    }
    
?>