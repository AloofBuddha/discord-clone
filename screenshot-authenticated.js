const puppeteer = require('puppeteer');

async function takeAuthenticatedScreenshot() {
  console.log('🚀 Taking screenshot of authenticated Discord Clone...');
  
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
    
    // Wait for initial load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('📝 Filling login form...');
    
    // Fill in the login form
    await page.type('input[type="email"]', 'test@example.com');
    await page.type('input[type="password"]', 'password123');
    
    // Click login button
    await page.click('button[type="submit"]');
    
    console.log('⏳ Waiting for authentication and main interface...');
    
    // Wait for redirect and main interface to load
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    const screenshotPath = './discord-clone-authenticated.png';
    await page.screenshot({ 
      path: screenshotPath,
      fullPage: false
    });
    
    console.log(`✅ Authenticated screenshot saved: ${screenshotPath}`);
    
    // Get current page state
    const title = await page.title();
    const url = page.url();
    console.log(`📄 Page: ${title} (${url})`);
    
    // Check if we can see user info
    const pageContent = await page.content();
    const hasUsername = pageContent.includes('TestUser');
    console.log(`👤 User logged in: ${hasUsername ? 'YES' : 'NO'}`);
    
  } catch (error) {
    console.error('❌ Authenticated screenshot failed:', error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

takeAuthenticatedScreenshot();