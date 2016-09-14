package com.cucumber.runner;

import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;

public class Temp {

	public static void main(String[] args) {

		CucumberResultsOverview results = new CucumberResultsOverview();
		results.setOutputDirectory("target");
		results.setOutputName("cucumber-results");
		results.setSourceFile("./target/cucumber-json-report.json");
		try {
			results.executeFeaturesOverviewReport();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
