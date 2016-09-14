package com.cucumber.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.steps.GmailStepFile;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;

@RunWith(ExtendedCucumber.class)

//generate advanced aggregate test reports
@ExtendedCucumberOptions(jsonReport = "src/test/resources/reports/cucumber.json",
        retryCount = 3,
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        toPDF = false,
        excludeCoverageTags = {"@flaky" },
        includeCoverageTags = {"@passed" },
        outputFolder = "src/test/resources/reports")

// glue code we need to specify the package for the Step Files
@CucumberOptions(features = { "src/test/resources/features/gmail.feature" }, glue = { "com.cucumber.steps" }, plugin = {
		"html:src/test/resources/reports/cucumber-html-report",
		"json:src/test/resources/reports/cucumber.json" }, tags = { "~@ignore" })

public class CucumberRunner {

	static GmailStepFile gmailStepFile = new GmailStepFile();

	@BeforeClass
	public static void setup() {
		gmailStepFile.setup();

	}

	@AfterClass
	public static void tearDown() throws Exception {

		gmailStepFile.closeBrowser();

		
	}
}
