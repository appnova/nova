<?php
	function __autoload($class){
		if(is_file("class/".$class.".php")){
			require_once("class/".$class.".php");
		}
	}
?>