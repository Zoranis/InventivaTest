<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Account Administration</title>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">


	<style media="screen">

	body {padding-top:40px;}

	</style>

</head>
<body>

	<div class="container">

		<form id="accountsForm" class="form-horizontal">

			<div class="form-group row">
				<label for="text-input" class="col-2 col-form-label">User Name</label>
				<div class="col-7">
					<input class="form-control" name="userName" type="text" value="" id="userName" required>
				</div>
			</div>

			<div class="form-group row">
				<label for="password-input" class="col-2 col-form-label">Password</label>
				<div class="col-7">
					<input class="form-control" name="password" type="password" value="" id="password" required>
				</div>
			</div>

			<div class="form-group row">
				<label for="email-input" class="col-2 col-form-label">Email</label>
				<div class="col-7">
					<input class="form-control" name="email" type="email" value="" id="email" required>
				</div>
			</div>

			<div class="form-group row">
				<label for="text-input" class="col-2 col-form-label">Country</label>
				<div class="col-7">
					<!-- <input class="form-control" name="country" type="select" value="" id="country"> -->
					<select class="form-control" id="country" name="country">
						<!-- <option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option> -->
					</select>
				</div>
			</div>


			<div class="form-group row">
				<label for="tel-input" class="col-2 col-form-label">Phone</label>
				<div class="col-2">
					<input class="form-control phone-group" name="phonePrefix" type="tel" value="" id="phonePrefix" required>
				</div>
				-
				<div class="col-5">
					<input class="form-control phone-group" name="phoneSuffix" type="tel" value="" id="phoneSuffix" required>
				</div>
			</div>

			<div class="form-check">
				<label class="form-check-label">
					<input type="checkbox" name="termsApproved" class="form-check-input" id="termsApproved" required>
					Terms & Conditions
				</label>
			</div>

			<div class="form-group row">
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>

		</form>

	</div>




	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="crossorigin="anonymous"></script>
	<script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.js" charset="utf-8"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/additional-methods.min.js" charset="utf-8"></script>
	<script src="/js/accounts.js" charset="utf-8"></script>

</body>
</html>
