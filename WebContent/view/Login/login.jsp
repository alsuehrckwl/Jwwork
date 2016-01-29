<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="../layout/header.jsp" %>

<body class="container-fluid">
    <div class="row">
		<div class="col-md-4 col-md-offset-4">
			<div class="box">
				<div class="input-group">
					<span class="input-group-addon addon-google">
						<i class="fa fa-fw fa-2x fa-google fa-fw"></i>
					</span>
					<a class="btn btn-lg btn-block btn-google" href="#"> Register with Facebook</a>
				</div>
				
				<div class="input-group">
					<span class="input-group-addon addon-facebook">
						<i class="fa fa-fw fa-2x fa-facebook fa-fw"></i>
					</span>
					<a class="btn btn-lg btn-block btn-facebook" href="#"> Register with Facebook</a>
				</div>

				<div class="input-group">
					<span class="input-group-addon addon-twitter">
						<i class="fa fa-fw fa-2x fa-twitter fa-fw"></i>
					</span>
					<a class="btn btn-lg btn-block btn-twitter" href="#"> Register with Twitter</a>
				</div>

				<form role="form" action="login.do?cmd=loginProcess" autocomplete="off" method="POST">
					<div class="divider-form"></div>
					<div class="row omb_row-sm-offset-3">
				
							<label for="InputEmail1">Id & Email Address</label>
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-user"></i></span>
								<input type="text" class="form-control" name="mem_email" placeholder="id or email address">
							</div>
							
							<label for="InputEmail1">Password</label>					
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-lock"></i></span>
								<input  type="password" class="form-control" name="mem_pwd" placeholder="Password">
							</div>

			
			    	</div>
			    	<div class="divider-form"></div>
    	
					<button type="submit" class="btn-block btn btn-lg btn-primary">로그인</button>

					<p class="text-center">회원가입 하러 가기 <a href="#">Sign in</a></p>
				</form>
			</div>
		</div>
	</div>