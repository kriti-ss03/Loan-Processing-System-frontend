const { Builder, By, until } = require('selenium-webdriver');

async function testViewApplication(id) {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the URL with the given ID
    await driver.get(`http://localhost:4200/viewapplication/${id}`);

    // Wait for the header to be present and visible
    let header = await driver.wait(until.elementLocated(By.css('.container h2')), 10000);
    await driver.wait(until.elementIsVisible(header), 10000);
    let headerText = await header.getText();
    if(headerText != 'View Application'){
        throw new Error(`Header text mismatch: expected 'View Application', got '${headerText}'`)
    }

    // Define the form fields
    let formFields = [
        'firstName', 'middleName', 'lastName', 'dateOfBirth', 'maritalStatus',
        'ssnNumber', 'loanAmount', 'loanPurpose', 'description', 'addressLine1',
        'addressLine2', 'city', 'state', 'postalCode', 'phoneOffice',
        'phoneHome', 'phoneMobile', 'emailAddress', 'employerName',
        'annualSalary', 'designation'
      ];
  
      // Fetch and print values for each form field


      for (let field of formFields) {
        try {
          let input = await driver.wait(until.elementLocated(By.css(`input[formControlName="${field}"], textarea[formControlName="${field}"]`)), 10000);
          await driver.wait(until.elementIsVisible(input), 10000);
          //console.log(input)
          await driver.sleep(500);
          let value = await input.getAttribute('value');
          console.log(`${field}: ${value}`);
        } catch (error) {
          console.log(`Error fetching value for ${field}: ${error}`);
        }
      }

    // Optionally, verify the presence of application details if those elements are uncommented
    // let applicationDetails = [
    //   { label: 'Application ID:', selector: 'applicationId' },
    //   { label: 'Application Status:', selector: 'applicationStatus' },
    //   { label: 'Score:', selector: 'score' },
    //   { label: 'Decline Reason:', selector: 'declineReason' }
    // ];

    // for (let detail of applicationDetails) {
    //   try {
    //     let detailElement = await driver.wait(until.elementLocated(By.xpath(`//p[contains(text(), '${detail.label}')]`)), 10000);
    //     await driver.wait(until.elementIsVisible(detailElement), 10000);
    //     let detailText = await detailElement.getText();
    //     console.log(`${detail.label} ${detailText}`);
    //   } catch (error) {
    //     console.log(`Error fetching detail for ${detail.label}: ${error}`);
    //   }
    // }

    // Verify the presence and functionality of the 'Back' button
    let backButton = await driver.wait(until.elementLocated(By.id('back')), 10000);
    await driver.wait(until.elementIsVisible(backButton), 10000);
    let backButtonText = await backButton.getText()
    if(backButtonText !== 'Back'){
        throw new Error(`Back button text mismatch, expected Back, got ${backButtonText}`)
    }
    console.log(`Back button text verified: ${backButtonText}`);

    // Optionally, you can click the back button to verify it works
    await backButton.click();

    // Wait for navigation to occur (adjust the URL or path accordingly)
    await driver.wait(until.urlIs('http://localhost:4200/viewapps'), 15000); // Wait up to 15 seconds for navigation
    console.log('Navigation after clicking Back button is correct.');

    await driver.navigate().back();
    console.log('Returned to the view application page.');
    
  } finally {
    // Quit the WebDriver
    await driver.sleep(3000);
    await driver.quit();
  }
}

// Call the function with the desired ID
testViewApplication(115); // Replace with the ID you want to test
