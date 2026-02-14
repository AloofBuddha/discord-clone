const puppeteer = require('puppeteer');

async function takeScreenshot() {
  console.log('🚀 Taking screenshot with Puppeteer...');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    
    console.log('📡 Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { 
      waitUntil: 'networkidle0',
      timeout: 15000 
    });
    
    // Wait for React to render
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const screenshotPath = './discord-clone-puppeteer.png';
    await page.screenshot({ 
      path: screenshotPath,
      fullPage: false
    });
    
    console.log(`✅ Screenshot saved: ${screenshotPath}`);
    
    // Get page info
    const title = await page.title();
    const url = page.url();
    console.log(`📄 Page: ${title} (${url})`);
    
  } catch (error) {
    console.error('❌ Puppeteer screenshot failed:', error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

takeScreenshot();