package com.cucumber.steps;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GmailStepFile {

	static WebDriver driver = null;

	public void gotoGmailSingupPage() {

		System.setProperty("webdriver.chrome.driver", "E:/BuzzyBrains/Softwares/chromedriver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://accounts.google.com/SignUp");

	}

	@When("^I fill the details as \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")

	public void fillDetails(String fname, String lname, String newmailid, String passwd, String passwdagain,
			String phone, String recovermail) {

		//refreshing page so previous filled data get cleared
		driver.navigate().refresh();

		driver.findElement(By.id("FirstName")).sendKeys(fname);

		driver.findElement(By.id("LastName")).sendKeys(lname);

		driver.findElement(By.id("GmailAddress")).sendKeys(newmailid);

		driver.findElement(By.id("Passwd")).sendKeys(passwd);

		driver.findElement(By.id("PasswdAgain")).sendKeys(passwdagain);

		driver.findElement(By.id("RecoveryPhoneNumber")).sendKeys(phone);

		driver.findElement(By.id("RecoveryEmailAddress")).sendKeys(recovermail);
	}

	@When("^I fill the details$")

	public void fillDetails(DataTable table) {
		
		List<List<String>> data = table.raw();

		//refreshing page so previous filled data get cleared
		driver.navigate().refresh();

		driver.findElement(By.id("FirstName")).sendKeys(data.get(1).get(1));

		driver.findElement(By.id("LastName")).sendKeys(data.get(2).get(1));

		driver.findElement(By.id("GmailAddress")).sendKeys(data.get(3).get(1));

		driver.findElement(By.id("Passwd")).sendKeys(data.get(4).get(1));

		driver.findElement(By.id("PasswdAgain")).sendKeys(data.get(5).get(1));

		driver.findElement(By.id("RecoveryPhoneNumber")).sendKeys(data.get(6).get(1));

		driver.findElement(By.id("RecoveryEmailAddress")).sendKeys(data.get(7).get(1));
	}

	@Then("^I see error message saying \"([^\"]*)\" located at \"([^\"]*)\"$")

	public void getErrorMessage(String expmessage, String locator) {

		String actualerrmsg = driver.findElement(By.id(locator)).getText();

		// verify actual vs expected
		Assert.assertEquals(actualerrmsg, expmessage);

	}

	@Then("^Page title is \"([^\"]*)\"$")

	public void verifyPageTitle(String exptitle) {

		String actualtitle = driver.getTitle();

		// verify actual vs expected
		Assert.assertEquals(actualtitle, exptitle);

	}

	public void closeBrowser() {
		driver.close();
	}

}
