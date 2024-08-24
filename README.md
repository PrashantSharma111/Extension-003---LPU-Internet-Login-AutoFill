# LPU Internet Login Autofill Extension
## Description

This Chrome extension simplifies login to your college's internet portal by automatically filling in your credentials. Save your username and password securely in the provided content.js file, and enjoy the convenience of seamless login whenever you access the portal.

## Features

Auto-fills Login Credentials: The extension automatically populates the username and password fields on your college's login page, saving you time and effort.
Secure Credential Storage: Your credentials are stored directly within the content.js file, ensuring they remain within your browser environment and are not transmitted to any external servers. (Note: While convenient, storing credentials in plain text is not the most secure approach. Consider using encryption or a password manager for enhanced security.)
Installation:

## Clone the Repository
Open your terminal and navigate to your desired directory. Run the following command to clone this repository:

```Bash
git clone https://github.com/YKGupta/Extension-003---LPU-Internet-Login-AutoFill.git
cd Extension-003---LPU-Internet-Login-AutoFill
```
## Usage

### Save Your Credentials
Locate the content.js file within the scripts folder.
Edit content.js: Update the following lines with your actual college login credentials:

```js
username.value = "<YOUR USERNAME>";
password.value = "<YOUR PASSWORD>";
```

Replace <code>YOUR USERNAME</code> with your registration number and <code>YOUR PASSWORD</code> with your password, omitting the angular brackets.
> [!CAUTION]
> Storing credentials in plain text within the code presents a security risk.

### Load the Extension in Chrome

Open Chrome and navigate to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the <code>Extension-003---LPU-Internet-Login-AutoFill</code> directory containing the extension's files.   

Navigate to the [Login Page](https://internet.lpu.in/24online/webpages/client.jsp): When you access the login page, the extension should automatically fill in the username and password fields.
