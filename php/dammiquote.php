<?php
$rand=rand ( 1 , 1000000 ); 

$url="https://quotesondesign.com/?q=$rand";
$html= file_get_contents($url);
$html = iconv('UTF-8', 'ISO-8859-1//TRANSLIT', $html);

$doc = new DOMDocument();
libxml_use_internal_errors(true);

$doc->loadHTML($html);


$quote=$doc->getElementById("quote-content")->textContent;

$autore=$doc->getElementById("quote-title")->textContent;
$source=$doc->getElementById("quote-source")->textContent;

$dato=array("id"=>$rand,"quote"=>$quote ,"autore"=> trim($autore),"source"=>trim($source));
echo json_encode($dato, JSON_PRETTY_PRINT);
?>