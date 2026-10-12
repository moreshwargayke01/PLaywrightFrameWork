import BaseClassForFB from './basePageForFB.js';
export default class FB_Login_Validate extends BaseClassForFB {
    constructor(page) {
        super(page);
        this.inputEmail = page.locator('//input[@id="_R_c9l6neappb6amH1_"]');
        this.inputPassword = page.locator('//input[@id="_R_cdl6neappb6amH1_"]');
        this.textValidate = page.locator('//span[contains(text(),"Log in to Facebook")]');
    }
async LoginToApp(){
            await this.launchURL("https://www.facebook.com/");
        }
        async validationText(){
            await this.validateText(this.textValidate,'Log in to Facebook');
        }
async enteingCred(uname, pass){
            await this.enterValue(this.inputEmail, uname);
            await this.enterValue(this.inputPassword, pass); 
              await  this.keyBoardAction();

        }

    }

