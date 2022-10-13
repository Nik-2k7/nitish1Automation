Feature('crowdstaffing');

Scenario('Login into Crowdstaffing Application-Admin App', ({ I }) => {
    I.amOnPage("https://auth.uat.crowdstaffing.com/");
    I.fillField('//input[@placeholder="Username or Crowdstaffing Email"]','superman');
    I.fillField('//input[@placeholder="Password"]', 'Th3@adm1n@acc0unt');
    I.click('//button[@type="submit"]');
    I.waitForNavigation({});
    I.wait(10);
    I.click('svg[fill="white"][width="9px"][height="7px"]');
    I.wait(2);
    I.click("//span[contains(text(),'Logout')]"); 
    I.click("//span[contains(text(),'Logout')]"); 
    pause();
});

// Scenario('Logout from Crowdstaffing Application', ({ I }) => {
//     I.wait(5);
                                
// });
