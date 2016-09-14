$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/gmail.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail SignIn \u0026 SignUp",
  "description": "",
  "id": "gmail-signin-\u0026-signup",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7061469598,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify gmail login page title",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-gmail-login-page-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Page title is \"Gmail\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "GmailStepFile.verifyPageTitle(String)"
});
