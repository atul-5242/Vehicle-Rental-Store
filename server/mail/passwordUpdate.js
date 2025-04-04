exports.passwordUpdated = (email, name) => {
	return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Password Update Confirmation</title>
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
            <div class="message">Password Updated Successfully</div>
            <div class="body">
                <p>Hi ${name},</p>
                <p>This is to confirm that the password for your RideEasy account linked with <span class="highlight">${email}</span> has been successfully changed.</p>
                <p>If you didn’t initiate this change, please contact our support team immediately to secure your account.</p>
            </div>
            <div class="support">
                Need help? Contact us at <a href="atul.fzdlko2001@gmail.com">atul.fzdlko2001@gmail.com</a>. We're always ready to help!
            </div>
        </div>
    </body>
    
    </html>`;
};
