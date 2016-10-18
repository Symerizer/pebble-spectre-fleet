<?php
require('library/simple_html_dom.php');
header('Content-type: application/json; charset=utf-8');

$dom = file_get_html('https://spectrefleet.com/motd');

$i = 0;
$dataArray = [];
foreach($dom->find('tr') as $col){
    foreach($col->children() as $rowData){
        $dataArray[$i][] = $rowData->plaintext;
    }
    $i++;
}

echo json_encode($dataArray);
