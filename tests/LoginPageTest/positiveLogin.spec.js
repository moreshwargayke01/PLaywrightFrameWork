import { test, expect } from "../../fixture/baseFixture.js";

test("Valid user can login", async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login("standard_user", "secret_sauce");
  await expect(loginPage.page.locator(".title")).toHaveText("Products");
});

//DEV QA STG PROD
//ITF SIT PREF UAT

//logging
//data driver - test data
//report 
//debu
