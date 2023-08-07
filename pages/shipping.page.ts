import { type Locator, type Page, expect } from '@playwright/test';

export class ShippingPage {
    readonly page: Page
    readonly SHIP_METHOD_5: Locator
    readonly NEXT_BTN: Locator
    readonly COUNTRY_VALUE: Locator
    readonly STATE_VALUE: Locator

    constructor(page: Page) {
        this.page = page
        this.SHIP_METHOD_5 = page.locator('input.radio')
        this.NEXT_BTN = page.locator('[data-role="opc-continue"]')
        this.COUNTRY_VALUE = page.locator('[name="country_id"]')
        this.STATE_VALUE = page.locator('[name="shippingAddress.region_id"] > div > select')
    }

    async waitForPageToLoad() {
        await this.page.waitForURL('**/checkout/#shipping')
        await expect(this.SHIP_METHOD_5.first()).toBeVisible()
    }

   
}