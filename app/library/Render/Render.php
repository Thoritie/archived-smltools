<?php
namespace Library\Render;

class Render
{
    //ฟังก์ชั่นในการตัด tag script เพื่อแยกการ render ไว้ล่างสุดของหน้าเว็บ

    public function getScript($string){
        $start = "<!-- blockJS -->";
        $end = "<!-- /.blockJS -->";
        $string = ' ' . $string;
        $ini = strpos($string, $start);
        if ($ini == 0) return '';
        $ini += strlen($start);
        $len = strpos($string, $end, $ini) - $ini;
        return substr($string, $ini, $len);
    }

    public function getContent($string){
        $response = preg_replace('#<script(.*?)>(.*?)</script>#is', '', $string);
        $response = str_replace("<!-- blockJS -->", " ", $response);
        $response = str_replace("<!-- /.blockJS -->", " ", $response);
        return $response;
    }

}