		<div id="header" class="header">
			<div id="header_content">
			<img src="img/logo.png" height="40px" width="120px" alt="NOVA" class="">
			
			<div id="login" class="right">
			
			<form name="login" class="form_login" method="post" autocomplete="on" enctype="multipart/form-data" action="login.php">
				<input type="email" name="email" id="email" autocomplete="on" autofocus="autofocus" placeholder="E-mail" value="" class="input_dados" required/>
				<input type="password" name="senha" id="senha" placeholder="Password" value="" class="input_dados" required/>
				<input type="submit" name="submit_login" class="submit_login" class="botao" value="Login"/>
			</form>
			<?php require 'tiles/fb_login.php'; ?>
			</div>
			<!--END Form Login-->
		</div>
		</div><!--header-->