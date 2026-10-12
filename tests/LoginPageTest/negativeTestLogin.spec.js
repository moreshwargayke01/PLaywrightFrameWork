// import { test, expect } from "../../fixture/baseFixture.js";
// import env from "../../config/env.config.js";
// import pages from "../..pages/LoginPage.js"

// test("invalid pass", async ({ page }) => {
//   //await loginPage.open();

//   //await loginPage.login(env.username, env.password);

//   const loginPag= new pages(page);
//   loginPag.open();
// await loginPag.login("standard_user","secret_sa");
//   await expect(loginPag.errorMessage).toBeVisible();
//   await expect(loginPag.errorMessage).toHaveText(
//     "Epic sadface: Username and password do not match any user in this service",
//   );
// })