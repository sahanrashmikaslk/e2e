const { Builder, until, By } = require('selenium-webdriver');

async function testDynamicContent() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:4200/dashboards/project');
        let dynamicContent = await driver.wait(
            until.elementLocated(By.className("text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate ng-star-inserted")),
        10000
        );

        console.log(await dynamicElement.getText());

    } finally {
        await driver.quit();
    }
}
