const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification - RideEasy</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
		</style>
	
	</head>
	
	<body>
		<div class="container">
			<a href="https://vehiclestore.atulmaurya.in">
				<img class="logo" src="https://res.cloudinary.com/dhhx2qn2o/image/upload/v1713259928/codehelp/ejuzsl6huxhjtmlg2fta.jpg" alt="RideEasy Logo">
			</a>
			<div class="message">OTP Verification - RideEasy</div>
			<div class="body">
				<p>Dear User,</p>
				<p>Welcome to <strong>RideEasy</strong> — your trusted vehicle rental partner. To continue with your registration, please use the OTP (One-Time Password) below to verify your account:</p>
				<h2 class="highlight">${otp}</h2>
				<p>This OTP is valid for 5 minutes. If you did not initiate this request, you can safely ignore this email.</p>
				<p>Once verified, you'll be able to book and manage vehicle rentals with ease through our platform.</p>
			</div>
			<div class="support">Need help? Reach out to our support team at 
				<a href="atul.fzdlko2001@gmail.com">atul.fzdlko2001@gmail.com</a>. We're here to assist you!
			</div>
		</div>
	</body>
	
	</html>`;
};

module.exports = otpTemplate;
