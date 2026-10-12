import { expect } from '@playwright/test';

export default class BaseClassForFB {
    constructor(page) {
        this.page = page;
    }

    async launchURL(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await locator.click();
    }

    async enterValue(locator, text) {
        await locator.fill(text);
    }

    async validateText(locator, text) {
        await expect(locator).toContainText(text);
    }

    async keyBoardAction() {
        await this.page.keyboard.press("Enter");
    }
}