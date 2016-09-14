package com.cucumber.steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GmailStepFile {

	static WebDriver driver = null;

	public void setup() {
		System.setProperty("webdriver.chrome.driver", "E:/BuzzyBrains/Softwares/chromedriver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Before("@signup")
	public void gotoGmailSingupPage() {

		driver.navigate().refresh();
		if (!driver.getCurrentUrl().contains("SignUp")) {
			driver.get("http://www.gmail.com");
			driver.findElement(By.id("link-signup")).click();
		}

	}

	@Before("@login")
	public void gotoGmailLoginPage() {

		if (!driver.getCurrentUrl().contains("ServiceLogin")) {

			driver.get("http://www.gmail.com");
		}

	}

	@When("^I fill the details as \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")

	public void fillDetails(String fname, String lname, String newmailid, String passwd, String passwdagain,
			String phone, String recovermail) {

		// refreshing page so previous filled data get cleared
		driver.navigate().refresh();

		driver.findElement(By.id("FirstName")).sendKeys(fname);

		driver.findElement(By.id("LastName")).sendKeys(lname);

		driver.findElement(By.id("GmailAddress")).sendKeys(newmailid);

		driver.findElement(By.id("Passwd")).sendKeys(passwd);

		driver.findElement(By.id("PasswdAgain")).sendKeys(passwdagain);

		driver.findElement(By.id("RecoveryPhoneNumber")).sendKeys(phone);

		driver.findElement(By.id("RecoveryEmailAddress")).sendKeys(recovermail);
	}

	@When("^I enter mail id as \"([^\"]*)\"$")

	public void enterMailId(String mail) {

		driver.findElement(By.id("Email")).clear();
		driver.findElement(By.id("Email")).sendKeys(mail);
		driver.findElement(By.id("next")).click();

	}

	@And("^password as \"([^\"]*)\"$")

	public void enterPassword(String passwd) throws InterruptedException {

		driver.findElement(By.id("Passwd")).sendKeys(passwd);

		if (driver.findElement(By.id("PersistentCookie")).isSelected()) {

			driver.findElement(By.id("PersistentCookie")).click();
		}

		driver.findElement(By.id("signIn")).click();

	}

	@Then("^I see error message saying \"([^\"]*)\" located at \"([^\"]*)\"$")

	public void getErrorMessage(String expmessage, String locator) {

		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id(locator), expmessage));

		String actualerrmsg = driver.findElement(By.id(locator)).getText();

		// verify actual vs expected
		Assert.assertEquals(actualerrmsg, expmessage);

	}

	@Then("^I see invalid mail id error \"([^\"]*)\"$")

	public void getLoginMessage(String expmessage) {

		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("errormsg_0_Email"), expmessage));
		String actualerrmsg = driver.findElement(By.id("errormsg_0_Email")).getText();

		// verify actual vs expected
		Assert.assertEquals(expmessage, actualerrmsg);

	}

	@Then("^I see wrong password error \"([^\"]*)\"$")

	public void getPasswordError(String expmessage) {

		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("errormsg_0_Passwd"), expmessage));

		String actualerrmsg = driver.findElement(By.id("errormsg_0_Passwd")).getText();

		// verify actual vs expected
		Assert.assertEquals(actualerrmsg, expmessage);

	}

	@Then("^Page title is \"([^\"]*)\"$")

	public void verifyPageTitle(String exptitle) {

		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.titleIs(exptitle));
		String actualtitle = driver.getTitle();
		// verify actual vs expected
		Assert.assertEquals(actualtitle, exptitle);

	}

	@When("^I click on next step$")
	public void i_click_on_next_step() throws InterruptedException {

		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.elementToBeClickable(By.id("submitbutton")));
		driver.findElement(By.id("LastName")).sendKeys("last_name");
		driver.findElement(By.id("submitbutton")).click();
		Thread.sleep(3000);

	}

	@Then("^I see name field mandatory$")
	public void i_see_name_field_mandatory() throws InterruptedException {

		String expected_error = "You can't leave this empty.";
		Assert.assertEquals(expected_error, driver.findElement(By.id("errormsg_0_FirstName")).getText());

	}

	@Then("^I see username field mandatory$")
	public void i_see_username_field_mandatory() {
		Assert.assertEquals("You can't leave this empty.",
				driver.findElement(By.id("errormsg_0_GmailAddress")).getText());

	}

	@Then("^I see password field mandatory$")
	public void i_see_password_field_mandatory() {
		Assert.assertEquals("You can't leave this empty.", driver.findElement(By.id("errormsg_0_Passwd")).getText());
	}

	@Then("^I see confirm password field mandatory$")
	public void i_see_confirm_password_field_mandatory() {
		Assert.assertEquals("You can't leave this empty.",
				driver.findElement(By.id("errormsg_0_PasswdAgain")).getText());

	}

	@Then("^I see birthday field mandatory$")
	public void i_see_birthday_field_mandatory() {
		Assert.assertEquals("You can't leave this empty.", driver.findElement(By.id("errormsg_0_BirthYear")).getText());
	}

	@Then("^I see gender field mandatory$")
	public void i_see_geender_field_mandatory() {
		Assert.assertEquals("You can't leave this empty.", driver.findElement(By.id("errormsg_0_Gender")).getText());
	}

	public void closeBrowser() {
		driver.close();
	}

}
