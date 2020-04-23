<?php

echo '<link rel="stylesheet" href="./style.css">'; 

function show($data, $flag = 0){
    echo '<pre>'; 
    print_r($data); 
    echo '</pre>'; 
    if($flag){
        $t = "<small style='backgound-color: yellow; padding: 5px;'> Visualização de variável </small>"; 
        die($t); 
    }
}

$post = $_POST; 

$nome   = $post['nome'] ?? null; 
$media  = $post['media'] ?? null; 
$array  = explode(',',$post['dados']) ?? array(); 

$sigma = 0; 

foreach ($array as $key => $value) {
    $sigma+= pow($value-$media,2); 
}

$variancia = $sigma/(count($array)-1); 
$desvio_padrao = sqrt($variancia); 
$coeficiente_variacao = ($desvio_padrao/$media)*100; 

echo '<h1> Funcionário: '.$nome.'</h1>'; 

echo '<h3> Dados obtidos </h3>'; 

echo '<ul>'; 
    echo '<li> Média: '.'<b>'.number_format($media,3).'</b>'.'</li>'; 
    echo '<li> Variância: '.'<b>'.number_format($variancia,3).'</b>'.'</li>'; 
    echo '<li> Desvio padrão: '.'<b>'.number_format($desvio_padrao,3).'</b>'.'</li>'; 
    echo '<li> Coeficiente de variação: '.'<b>'.'<b>'.number_format($coeficiente_variacao,3).'%'.'</b>'.'</li>'; 
echo '</ul>'; 

echo "<a href='./index.html' class='turn_to_home' onclick='Confirm({Deseja realmente voltar a home?});'> Voltar ao inicio </a>"; 