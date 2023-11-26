package org.stepDefinition;
//EX:4  Create a feature file for courts Page.
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.utilities.BaseClass;
import org.utilities.LoginPojo;

import io.cucumber.java.en.*;

public class ForgottenStepDefinition extends BaseClass{
	@Given("User should open egde browser and load url")
	public void userShouldOpenEgdeBrowserAndLoadUrl() {
//		  launchEdge();
//		    loadUrl("https://www.courts.com.sg/");
//		    winMax();
	}

	@When("User should click the Signin Button")
	public void userShouldClickTheSigninButton() throws InterruptedException {
		LoginPojo l = new LoginPojo();
		WebElement courtssignin = l.getCourtssignin();
		btnClick(courtssignin);
		Thread.sleep(2000);
	}

	@When("User should click the Forgot Password button")
	public void userShouldClickTheForgotPasswordButton() {
		LoginPojo l = new LoginPojo();
		WebElement courtsforgotten = l.getCourtsforgotten();
		btnClick(courtsforgotten);
	}

	@When("User should input invalid EmailAddress on the textbox")
	public void userShouldInputInvalidEmailAddressOnTheTextbox() {
		LoginPojo l = new LoginPojo();
		WebElement courtsforgotmail = l.getCourtsforgotmail();
		fill(courtsforgotmail, "kumar81@gmail.com");
	}

	@When("User should click the Reset My Password button")
	public void userShouldClickTheResetMyPasswordButton() throws InterruptedException {
		LoginPojo l = new LoginPojo();
		WebElement courtsforgotreset = l.getCourtsforgotreset();
		btnClick(courtsforgotreset);
		Thread.sleep(2000);
	}

	@When("User should print the Title of page")
	public void userShouldPrintTheTitleOfPage() {
	   printTitle();
	}

	@When("User should print the Current url of my page")
	public void userShouldPrintTheCurrentUrlOfMyPage() {
	   printCurrentUrl();
	}

	@Then("User should navigate to referer page")
	public void userShouldNavigateToRefererPage() {
	    String url = driver.getCurrentUrl();
	    Assert.assertTrue("Reset Successfully", url.contains("forgotpassword"));
//	    closeEdge();
		   System.out.println("Test Case Success");
	}

}
