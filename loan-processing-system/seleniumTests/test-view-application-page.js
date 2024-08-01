const { Builder, By, until } = require('selenium-webdriver');

async function viewApplicationTest(id) {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Step 1: Navigate to the view application page
    await driver.get(`http://localhost:4200/viewapplication/${id}`); // URL
    console.log('Navigated to the view application page.');

    // Step 2: Wait for the page to load and check for the presence of key elements
    await driver.wait(until.elementLocated(By.xpath("//h1[text()='View Application']")), 10000);
    console.log('Page title is present.');

    // Check for the presence of various elements
    let elementsToCheck = [
      "//strong[text()='Application ID:']",
      "//strong[text()='Application Status:']",
      "//strong[text()='Score:']",
      "//label[text()='First Name:']",
      "//label[text()='Middle Name:']",
      "//label[text()='Last Name:']",
      "//label[text()='Date of Birth:']",
      "//label[text()='Marital Status:']",
      "//label[text()='SSN Number:']",
      "//label[text()='Loan Amount:']",
      "//label[text()='Loan Purpose:']",
      "//label[text()='Description:']",
      "//label[text()='Address Line 1:']",
      "//label[text()='Address Line 2:']",
      "//label[text()='City:']",
      "//label[text()='State:']",
      "//label[text()='Postal Code:']",
      "//label[text()='Home Phone:']",
      "//label[text()='Office Phone:']",
      "//label[text()='Mobile:']",
      "//label[text()='Email Address:']",
      "//label[text()='Employer Name:']",
      "//label[text()='Annual Salary:']",
      "//label[text()='Work Experience:']",
      "//label[text()='Designation:']"
    ];

    for (let xpath of elementsToCheck) {
      await driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
      console.log(`Element with XPath ${xpath} is present.`);
    }

    console.log('All key elements are present on the page.');

  } catch (error) {
    console.error(`An error occurred: ${error}`);
  } finally {
    await driver.quit();
  }
};

viewApplicationTest(115)


