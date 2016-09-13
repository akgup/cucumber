$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/gmail.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Signup",
  "description": "",
  "id": "gmail-signup",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify signup page title",
  "description": "",
  "id": "gmail-signup;verify-signup-page-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Page title is \"Create your Google Account\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Create your Google Account",
      "offset": 15
    }
  ],
  "location": "GmailStepFile.verifyPageTitle(String)"
});
formatter.result({
  "duration": 353415009,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Field error message validation",
  "description": "",
  "id": "gmail-signup;field-error-message-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I fill the details as \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cMailId\u003e\",\"\u003cpassword\u003e\",\"\u003cCnfPassword\u003e\",\"\u003cPhone\u003e\",\"\u003cRecoverMail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see error message saying \"\u003cError\u003e\" located at \"\u003cLocator\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "gmail-signup;field-error-message-validation;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "MailId",
        "Password",
        "CnfPassword",
        "Phone",
        "RecoverMail",
        "Error",
        "Locator"
      ],
      "line": 11,
      "id": "gmail-signup;field-error-message-validation;;1"
    },
    {
      "cells": [
        "akshay",
        "gupta",
        "akshay19vit",
        "abcd1234@1324",
        "abcd1234@1324",
        "7387152444",
        "recover1234@gmail.com",
        "That username is taken. Try another.",
        "errormsg_0_GmailAddress"
      ],
      "line": 12,
      "id": "gmail-signup;field-error-message-validation;;2"
    },
    {
      "cells": [
        "akshay",
        "gupta",
        "akshay19432",
        "abcd1234@1325",
        "abcd1234@1324",
        "7387152444",
        "recover1234@gmail.com",
        "These passwords don\u0027t match. Try again?",
        "errormsg_0_PasswdAgain"
      ],
      "line": 13,
      "id": "gmail-signup;field-error-message-validation;;3"
    },
    {
      "cells": [
        "akshay",
        "gupta",
        "akshay24463",
        "abcd1234@1324",
        "abcd1234@1324",
        "73871522444",
        "recover1234@gmail.com",
        "This phone number format is not recognized. Please check the country and number.",
        "errormsg_0_RecoveryPhoneNumber"
      ],
      "line": 14,
      "id": "gmail-signup;field-error-message-validation;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Field error message validation",
  "description": "",
  "id": "gmail-signup;field-error-message-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I fill the details as \"akshay\",\"gupta\",\"akshay19vit\",\"\u003cpassword\u003e\",\"abcd1234@1324\",\"7387152444\",\"recover1234@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see error message saying \"That username is taken. Try another.\" located at \"errormsg_0_GmailAddress\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "akshay",
      "offset": 23
    },
    {
      "val": "gupta",
      "offset": 32
    },
    {
      "val": "akshay19vit",
      "offset": 40
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 54
    },
    {
      "val": "abcd1234@1324",
      "offset": 67
    },
    {
      "val": "7387152444",
      "offset": 83
    },
    {
      "val": "recover1234@gmail.com",
      "offset": 96
    }
  ],
  "location": "GmailStepFile.fillDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3007848499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "That username is taken. Try another.",
      "offset": 28
    },
    {
      "val": "errormsg_0_GmailAddress",
      "offset": 78
    }
  ],
  "location": "GmailStepFile.getErrorMessage(String,String)"
});
formatter.result({
  "duration": 368501387,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Field error message validation",
  "description": "",
  "id": "gmail-signup;field-error-message-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I fill the details as \"akshay\",\"gupta\",\"akshay19432\",\"\u003cpassword\u003e\",\"abcd1234@1324\",\"7387152444\",\"recover1234@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see error message saying \"These passwords don\u0027t match. Try again?\" located at \"errormsg_0_PasswdAgain\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "akshay",
      "offset": 23
    },
    {
      "val": "gupta",
      "offset": 32
    },
    {
      "val": "akshay19432",
      "offset": 40
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 54
    },
    {
      "val": "abcd1234@1324",
      "offset": 67
    },
    {
      "val": "7387152444",
      "offset": 83
    },
    {
      "val": "recover1234@gmail.com",
      "offset": 96
    }
  ],
  "location": "GmailStepFile.fillDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2632915557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "These passwords don\u0027t match. Try again?",
      "offset": 28
    },
    {
      "val": "errormsg_0_PasswdAgain",
      "offset": 81
    }
  ],
  "location": "GmailStepFile.getErrorMessage(String,String)"
});
formatter.result({
  "duration": 298698778,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Field error message validation",
  "description": "",
  "id": "gmail-signup;field-error-message-validation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I fill the details as \"akshay\",\"gupta\",\"akshay24463\",\"\u003cpassword\u003e\",\"abcd1234@1324\",\"73871522444\",\"recover1234@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I see error message saying \"This phone number format is not recognized. Please check the country and number.\" located at \"errormsg_0_RecoveryPhoneNumber\"",
  "matchedColumns": [
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "akshay",
      "offset": 23
    },
    {
      "val": "gupta",
      "offset": 32
    },
    {
      "val": "akshay24463",
      "offset": 40
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 54
    },
    {
      "val": "abcd1234@1324",
      "offset": 67
    },
    {
      "val": "73871522444",
      "offset": 83
    },
    {
      "val": "recover1234@gmail.com",
      "offset": 97
    }
  ],
  "location": "GmailStepFile.fillDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2508773138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This phone number format is not recognized. Please check the country and number.",
      "offset": 28
    },
    {
      "val": "errormsg_0_RecoveryPhoneNumber",
      "offset": 122
    }
  ],
  "location": "GmailStepFile.getErrorMessage(String,String)"
});
formatter.result({
  "duration": 236070435,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Field error message validation using data table approach",
  "description": "",
  "id": "gmail-signup;field-error-message-validation-using-data-table-approach",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I fill the details",
  "rows": [
    {
      "cells": [
        "Fields",
        "Value"
      ],
      "line": 18
    },
    {
      "cells": [
        "FirstName",
        "akshay"
      ],
      "line": 19
    },
    {
      "cells": [
        "LastName",
        "gupta"
      ],
      "line": 20
    },
    {
      "cells": [
        "MailId",
        "akshay19vit"
      ],
      "line": 21
    },
    {
      "cells": [
        "Password",
        "abcd1234@1324"
      ],
      "line": 22
    },
    {
      "cells": [
        "CnfPassword",
        "abcd1234@1324"
      ],
      "line": 23
    },
    {
      "cells": [
        "Phone",
        "7387152444"
      ],
      "line": 24
    },
    {
      "cells": [
        "RecoverMail",
        "recover1234@gmail.com"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I see error message saying \"That username is taken. Try another.\" located at \"errormsg_0_GmailAddress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailStepFile.fillDetails(DataTable)"
});
formatter.result({
  "duration": 2437945809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "That username is taken. Try another.",
      "offset": 28
    },
    {
      "val": "errormsg_0_GmailAddress",
      "offset": 78
    }
  ],
  "location": "GmailStepFile.getErrorMessage(String,String)"
});
formatter.result({
  "duration": 262453869,
  "status": "passed"
});
});