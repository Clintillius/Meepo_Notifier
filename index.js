const puppeteer = require("puppeteer");
const nodemailer = require('nodemailer');
const loop = true;

async function main() {
  if(loop == true){
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.goto('https://www.meepoboard.com/collections/parts-accessories/products/100-mm-replaceable-pu-sleeves-for-hub-motor?variant=31885493141598');
    const statusCheck = await page.evaluate(() => window.find("sold out"));
    if (statusCheck === true){
      console.log('This item is still sold out...');
    }
    else{
      
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'email@gmail.com',//Enter your gmail here
        pass: 'password'}//Enter your gmail password here
        });
    
    var mailOptions = {
        from: 'email@gmail.com',//Enter your gmail here
        to: '########@msg.fi.google.com',//Enter your phone number and email to text gateway. Phone gateways here --> https://20somethingfinance.com/how-to-send-text-messages-sms-via-email-for-free/
        subject: 'Meepo Alert!!',
        text: 'Meepo 100mm wheels are in stock!!! BUY NOW!!'
        };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
            } 
        else {
        console.log('Email sent: ' + info.response);
            }
        });

    }
    await browser.close()
    await page.waitFor(3600000);
    main();
  };
}
main();
