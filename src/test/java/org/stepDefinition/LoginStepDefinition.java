package org.stepDefinition;
import java.util.List;
import java.util.Map;

//EX:3  Create a feature file for courts login page
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.utilities.BaseClass;
import org.utilities.LoginPojo;

import io.cucumber.java.en.*;

public class LoginStepDefinition extends BaseClass {
	@Given("User should launch the egde browser and load the url")
	public void user_should_launch_the_egde_browser_and_load_the_url() {
//	    launchEdge();
//	    loadUrl("https://www.courts.com.sg/");
//	    winMax();
	}

	@When("User should click the Signin button")
	public void user_should_click_the_Signin_button() throws InterruptedException {
		LoginPojo l = new LoginPojo();
		WebElement courtssignin = l.getCourtssignin();
		btnClick(courtssignin);
		Thread.sleep(2000);
	}

	@When("User should input invalid EmailAddress and invalid Password in the textbox")
	public void user_should_input_invalid_EmailAddress_and_invalid_Password_in_the_textbox() {
		LoginPojo l = new LoginPojo();
		WebElement courtsemail = l.getCourtsemail();
		fill(courtsemail, "kumar@gmail.com");
		WebElement courtspass = l.getCourtspass();
		fill(courtspass, "1234");
	}

	@When("User should click the Login button")
	public void user_should_click_the_Login_button() {
		LoginPojo l = new LoginPojo();
		WebElement courtslogin = l.getCourtslogin();
		btnClick(courtslogin);
	}
	@When("User should print the title of page")
	public void user_should_print_the_title_of_page() {
	   printTitle();
	}

	@When("User should print the current url of my page")
	public void user_should_print_the_current_url_of_my_page() {
	   printCurrentUrl();
	}
	@Then("User should navigate to invalid login or password page")
	public void user_should_navigate_to_invalid_login_or_password_page() {
	   String url = driver.getCurrentUrl();
	   Assert.assertTrue("Login Successfully", url.contains("referer"));
//	   closeEdge();
	   System.out.println("Test Case Success");
	}
	@When("User should input valid EmailAddress and invalid Password in the textbox")
	public void userShouldInputValidEmailAddressAndInvalidPasswordInTheTextbox() {
		LoginPojo l = new LoginPojo();
		WebElement courtsemail = l.getCourtsemail();
		fill(courtsemail, "rkmahendran93@gmail.com");
		WebElement courtspass = l.getCourtspass();
		fill(courtspass, "1234");
	}
	@When("User should input valid EmailAddress {string} and invalid Password {string} in the textbox")
	public void userShouldInputValidEmailAddressAndInvalidPasswordInTheTextbox(String s1, String s2) {
		LoginPojo l = new LoginPojo();
		WebElement courtsemail = l.getCourtsemail();
		fill(courtsemail, s1);
		WebElement courtspass = l.getCourtspass();
		fill(courtspass, s2);
	}
	@When("User should input invalid EmailAddress and invalid PassworD in the textbox")
	public void userShouldInputInvalidEmailAddressAndInvalidPassworDInTheTextbox(io.cucumber.datatable.DataTable d) throws InterruptedException {
		LoginPojo l = new LoginPojo();
		WebElement courtsemail = l.getCourtsemail();
		WebElement courtspass = l.getCourtspass();
		
//		List<String> li = d.asList(); //--->1D List
//		String email = li.get(2); //love99@gmail.com
//		String pass = li.get(5);//siva52
		
//		List<List<String>> li = d.asLists(); //All rows  ----->2DLIST
//		List<String> a = li.get(1);
//		String email = a.get(2); //kamal@gmail.com
//		List<String> b = li.get(0);
//		String pass = b.get(3); //sa8563
		
		  //1D--> Map --> With Header
//		   Map<String, String> mp = d.asMap(String.class, String.class);
//		   
//		   //mp.get(key);
//		   String email = mp.get("Mail"); //vimal@gmail.com
//		   String pass = mp.get("Pass"); //raj@52
		 // 2D-->Map-->With Header
		   List<Map<String, String>> mp = d.asMaps();
		   //mp.get(key)
		   Map<String, String> m = mp.get(1); //ravi@gmail.com 
		   String email = m.get("Mail");
		   
		   Map<String, String> x= mp.get(0); //pay@56
		   String pass = x.get("Pass");
		   
		
		fill(courtsemail, email); 
		fill(courtspass, pass); 
		Thread.sleep(2000);
	}
}
