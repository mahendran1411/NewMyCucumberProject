package org.stepDefinition;

import java.io.IOException;

import org.utilities.BaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends BaseClass {
@Before
public void configEdge() {
	System.out.println("Hooks Executed");
	    launchEdge();
	    loadUrl("https://www.courts.com.sg/");
	    winMax();

}
@After
public void afterEachScenario(Scenario s) throws IOException {
	String name = s.getName();
	String fileName = name.replace(" ", "-");
	
	saveScreenShot(fileName);
	closeEdge();
	System.out.println("Hooks After Executed");

}
}
