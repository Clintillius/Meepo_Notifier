Basic instructions:

[WINDOWS INSTRUCTIONS]

1 - Create a gmail account. (or use an existing account)
2 - Allow "less secure apps" on that gmail account --> https://myaccount.google.com/lesssecureapps
(If you understand basic coding/scripting, then modify the following instructions to your needs. Otherwise, follow along and it will work.)
3 - Create a new folder on your desktop named 'meepo100'
4 - Download and install Node.JS --> https://nodejs.org/dist/v12.18.0/node-v12.18.0-x86.msi
5 - Open a 'node.js command prompt' (start menu --> Node.JS --> node.js command prompt)
6 - In the terminal window, enter 'cd Desktop\meepo100'
7 - Download the index.js file in this Repo Project and place it in your 'meepo100' folder -->  (https://github.com/Clintillius/Meepo_Notifier/blob/master/index.js)
8 - Open the index.js file in your preferred editor and enter your created gmail information
      Line 19 - Gmail (example@gmail.com)
      Line 20 - Gmail password
      Line 24 - Gmail (example@gmail.com)
      Line 25 - Your cell number and SMS gateway (Example: 1234567890@txt.att.net (If at&t was your cell provider. Here is a full list. --> https://20somethingfinance.com/how-to-send-text-messages-sms-via-email-for-free/))
9 - Save changes to the index.js file
10 - In the terminal window, enter 'npm init' (just press enter through the following settings)
11 - In the terminal window, enter 'npm i puppeteer'
12 - In the terminal window, enter 'npm i nodemailer'

You are ready to go!

13 - In the terminal window, enter 'node index.js'

Note: this script is set to silently check the meepo website every hour and if set up correctly with the above settings, 
notify you via text if the website shows in stock.

Note Note: This script is BASIC and quickly thrown together. Not a representation of my best work. If you wish to improve it, do so.
