package com.cucumber.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.steps.GmailStepFile;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

//glue code we need to specify the package for the Step Files
@CucumberOptions(
features = "src/test/resources/features/gmail.feature",
glue = { "com.cucumber.steps" },
plugin={"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" }
)

public class CucumberRunner {
	
	static GmailStepFile gmailStepFile=new GmailStepFile();
	
	 @BeforeClass
	    public static void setUp(){
		 
		 gmailStepFile.gotoGmailSingupPage();
	       
	    }
	 
	 @AfterClass
	    public static void tearDown(){
		 
		 gmailStepFile.closeBrowser();
	       
	    }
}
