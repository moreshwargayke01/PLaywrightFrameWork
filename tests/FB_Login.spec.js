import{test,expect} from '@playwright/test';
import FB_Login_Validate from '../pages/FB_Login_Validate.js';

test('validate FB login', async ({page})=>{
    let lpage= new FB_Login_Validate(page);
    lpage.LoginToApp();
    lpage.validationText();
    lpage.enteingCred("Moreshwar", "Pass123");
    

})