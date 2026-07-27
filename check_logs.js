const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        page.on('console', msg => {
            console.log(`[PAGE LOG] ${msg.type().toUpperCase()} - ${msg.text()}`);
        });
        
        page.on('pageerror', error => {
            console.log(`[PAGE ERROR] ${error.message}`);
        });
        
        await page.goto('http://localhost:8080', { waitUntil: 'networkidle0', timeout: 10000 });
        
        await browser.close();
    } catch (e) {
        console.error(e);
    }
})();
