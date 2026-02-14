const { chromium } = require('playwright');

async function takeScreenshot() {
  console.log('🚀 Taking screenshot of Discord Clone...');
  
  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-dev-shm-usage']
    });
    
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 720 });
    
    console.log('📡 Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { 
      waitUntil: 'networkidle',
      timeout: 10000 
    });
    
    // Wait a bit more for React to render
    await page.waitForTimeout(2000);
    
    const screenshotPath = './discord-clone-screenshot.png';
    await page.screenshot({ 
      path: screenshotPath, 
      fullPage: false 
    });
    
    console.log(`✅ Screenshot saved: ${screenshotPath}`);
    
    // Also save the page title and some basic info
    const title = await page.title();
    console.log(`📄 Page title: ${title}`);
    
  } catch (error) {
    console.error('❌ Screenshot failed:', error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

takeScreenshot();