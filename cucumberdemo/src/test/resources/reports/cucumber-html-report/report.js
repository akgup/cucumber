$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/gmail.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail SignIn \u0026 SignUp",
  "description": "",
  "id": "gmail-signin-\u0026-signup",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5012665075,
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
formatter.result({
  "duration": 222055553,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify invalid/blank mail id error message",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-invalid/blank-mail-id-error-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter mail id as \"\u003cMail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see invalid mail id error \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-invalid/blank-mail-id-error-message;",
  "rows": [
    {
      "cells": [
        "Mail",
        "Error"
      ],
      "line": 12,
      "id": "gmail-signin-\u0026-signup;verify-invalid/blank-mail-id-error-message;;1"
    },
    {
      "cells": [
        "abc43urrrfe",
        "Sorry, Google doesn\u0027t recognize that email."
      ],
      "line": 13,
      "id": "gmail-signin-\u0026-signup;verify-invalid/blank-mail-id-error-message;;2"
    },
    {
      "cells": [
        "",
        "Please enter your email."
      ],
      "line": 14,
      "id": "gmail-signin-\u0026-signup;verify-invalid/blank-mail-id-error-message;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9412602,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify invalid/blank mail id error message",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-invalid/blank-mail-id-error-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter mail id as \"abc43urrrfe\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see invalid mail id error \"Sorry, Google doesn\u0027t recognize that email.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abc43urrrfe",
      "offset": 20
    }
  ],
  "location": "GmailStepFile.enterMailId(String)"
});
formatter.result({
  "duration": 363196768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, Google doesn\u0027t recognize that email.",
      "offset": 29
    }
  ],
  "location": "GmailStepFile.getLoginMessage(String)"
});
formatter.result({
  "duration": 675892476,
  "status": "passed"
});
formatter.before({
  "duration": 7805612,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify invalid/blank mail id error message",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-invalid/blank-mail-id-error-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter mail id as \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see invalid mail id error \"Please enter your email.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "GmailStepFile.enterMailId(String)"
});
formatter.result({
  "duration": 123238632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email.",
      "offset": 29
    }
  ],
  "location": "GmailStepFile.getLoginMessage(String)"
});
formatter.result({
  "duration": 655594806,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify invalid password/blank error message",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-invalid-password/blank-error-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter mail id as \"\u003cMail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I see wrong password error \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-invalid-password/blank-error-message;",
  "rows": [
    {
      "cells": [
        "Mail",
        "Password",
        "Error"
      ],
      "line": 23,
      "id": "gmail-signin-\u0026-signup;verify-invalid-password/blank-error-message;;1"
    },
    {
      "cells": [
        "akshay19vit",
        "244567bdkbf",
        "Wrong password. Try again."
      ],
      "line": 24,
      "id": "gmail-signin-\u0026-signup;verify-invalid-password/blank-error-message;;2"
    },
    {
      "cells": [
        "akshay19vit",
        "",
        "Please enter your password."
      ],
      "line": 25,
      "id": "gmail-signin-\u0026-signup;verify-invalid-password/blank-error-message;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10924372,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify invalid password/blank error message",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-invalid-password/blank-error-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter mail id as \"akshay19vit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "password as \"244567bdkbf\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I see wrong password error \"Wrong password. Try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "akshay19vit",
      "offset": 20
    }
  ],
  "location": "GmailStepFile.enterMailId(String)"
});
formatter.result({
  "duration": 131269530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "244567bdkbf",
      "offset": 13
    }
  ],
  "location": "GmailStepFile.enterPassword(String)"
});
formatter.result({
  "duration": 671841369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong password. Try again.",
      "offset": 28
    }
  ],
  "location": "GmailStepFile.getPasswordError(String)"
});
formatter.result({
  "duration": 971544607,
  "status": "passed"
});
formatter.before({
  "duration": 754743174,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify invalid password/blank error message",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-invalid-password/blank-error-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter mail id as \"akshay19vit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "password as \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I see wrong password error \"Please enter your password.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "akshay19vit",
      "offset": 20
    }
  ],
  "location": "GmailStepFile.enterMailId(String)"
});
formatter.result({
  "duration": 256313290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "GmailStepFile.enterPassword(String)"
});
formatter.result({
  "duration": 605569440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your password.",
      "offset": 28
    }
  ],
  "location": "GmailStepFile.getPasswordError(String)"
});
formatter.result({
  "duration": 628198178,
  "status": "passed"
});
formatter.before({
  "duration": 1534286101,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify signup page title",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-signup-page-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@signup"
    }
  ]
});
formatter.step({
  "line": 29,
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
  "duration": 1159485455,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Field error message validation",
  "description": "",
  "id": "gmail-signin-\u0026-signup;field-error-message-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@signup"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I fill the details as \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cMailId\u003e\",\"\u003cPassword\u003e\",\"\u003cCnfPassword\u003e\",\"\u003cPhone\u003e\",\"\u003cRecoverMail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I see error message saying \"\u003cError\u003e\" located at \"\u003cLocator\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "gmail-signin-\u0026-signup;field-error-message-validation;",
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
      "line": 37,
      "id": "gmail-signin-\u0026-signup;field-error-message-validation;;1"
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
      "line": 38,
      "id": "gmail-signin-\u0026-signup;field-error-message-validation;;2"
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
      "line": 39,
      "id": "gmail-signin-\u0026-signup;field-error-message-validation;;3"
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
      "line": 40,
      "id": "gmail-signin-\u0026-signup;field-error-message-validation;;4"
    },
    {
      "cells": [
        "akshay",
        "gupta",
        "akshay\u0026*@!$",
        "abcd1234@1324",
        "abcd1234@1324",
        "7387152444",
        "recover1234@gmail.com",
        "Please use only letters (a-z), numbers, and periods.",
        "errormsg_0_GmailAddress"
      ],
      "line": 41,
      "id": "gmail-signin-\u0026-signup;field-error-message-validation;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 702694281,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Field error message validation",
  "description": "",
  "id": "gmail-signin-\u0026-signup;field-error-message-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@signup"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I fill the details as \"akshay\",\"gupta\",\"akshay19vit\",\"abcd1234@1324\",\"abcd1234@1324\",\"7387152444\",\"recover1234@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
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
      "val": "abcd1234@1324",
      "offset": 54
    },
    {
      "val": "abcd1234@1324",
      "offset": 70
    },
    {
      "val": "7387152444",
      "offset": 86
    },
    {
      "val": "recover1234@gmail.com",
      "offset": 99
    }
  ],
  "location": "GmailStepFile.fillDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2893148939,
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
  "duration": 319890290,
  "status": "passed"
});
formatter.before({
  "duration": 555901454,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Field error message validation",
  "description": "",
  "id": "gmail-signin-\u0026-signup;field-error-message-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@signup"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I fill the details as \"akshay\",\"gupta\",\"akshay19432\",\"abcd1234@1325\",\"abcd1234@1324\",\"7387152444\",\"recover1234@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
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
      "val": "abcd1234@1325",
      "offset": 54
    },
    {
      "val": "abcd1234@1324",
      "offset": 70
    },
    {
      "val": "7387152444",
      "offset": 86
    },
    {
      "val": "recover1234@gmail.com",
      "offset": 99
    }
  ],
  "location": "GmailStepFile.fillDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2319398793,
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
  "duration": 316693733,
  "status": "passed"
});
formatter.before({
  "duration": 821421104,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Field error message validation",
  "description": "",
  "id": "gmail-signin-\u0026-signup;field-error-message-validation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@signup"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I fill the details as \"akshay\",\"gupta\",\"akshay24463\",\"abcd1234@1324\",\"abcd1234@1324\",\"73871522444\",\"recover1234@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
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
      "val": "abcd1234@1324",
      "offset": 54
    },
    {
      "val": "abcd1234@1324",
      "offset": 70
    },
    {
      "val": "73871522444",
      "offset": 86
    },
    {
      "val": "recover1234@gmail.com",
      "offset": 100
    }
  ],
  "location": "GmailStepFile.fillDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2387455996,
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
  "duration": 304234496,
  "status": "passed"
});
formatter.before({
  "duration": 592497553,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Field error message validation",
  "description": "",
  "id": "gmail-signin-\u0026-signup;field-error-message-validation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@signup"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I fill the details as \"akshay\",\"gupta\",\"akshay\u0026*@!$\",\"abcd1234@1324\",\"abcd1234@1324\",\"7387152444\",\"recover1234@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I see error message saying \"Please use only letters (a-z), numbers, and periods.\" located at \"errormsg_0_GmailAddress\"",
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
      "val": "akshay\u0026*@!$",
      "offset": 40
    },
    {
      "val": "abcd1234@1324",
      "offset": 54
    },
    {
      "val": "abcd1234@1324",
      "offset": 70
    },
    {
      "val": "7387152444",
      "offset": 86
    },
    {
      "val": "recover1234@gmail.com",
      "offset": 99
    }
  ],
  "location": "GmailStepFile.fillDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2417199089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please use only letters (a-z), numbers, and periods.",
      "offset": 28
    },
    {
      "val": "errormsg_0_GmailAddress",
      "offset": 94
    }
  ],
  "location": "GmailStepFile.getErrorMessage(String,String)"
});
formatter.result({
  "duration": 267954041,
  "status": "passed"
});
formatter.before({
  "duration": 475872459,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify mandatory fields",
  "description": "",
  "id": "gmail-signin-\u0026-signup;verify-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@signup"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I click on next step",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I see name field mandatory",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I see username field mandatory",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I see password field mandatory",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I see confirm password field mandatory",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I see birthday field mandatory",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I see gender field mandatory",
  "keyword": "And "
});
formatter.match({
  "location": "GmailStepFile.i_click_on_next_step()"
});
formatter.result({
  "duration": 3700119288,
  "status": "passed"
});
formatter.match({
  "location": "GmailStepFile.i_see_name_field_mandatory()"
});
formatter.result({
  "duration": 55301365,
  "status": "passed"
});
formatter.match({
  "location": "GmailStepFile.i_see_username_field_mandatory()"
});
formatter.result({
  "duration": 45553265,
  "status": "passed"
});
formatter.match({
  "location": "GmailStepFile.i_see_password_field_mandatory()"
});
formatter.result({
  "duration": 64177088,
  "status": "passed"
});
formatter.match({
  "location": "GmailStepFile.i_see_confirm_password_field_mandatory()"
});
formatter.result({
  "duration": 63977329,
  "status": "passed"
});
formatter.match({
  "location": "GmailStepFile.i_see_birthday_field_mandatory()"
});
formatter.result({
  "duration": 63906421,
  "status": "passed"
});
formatter.match({
  "location": "GmailStepFile.i_see_geender_field_mandatory()"
});
formatter.result({
  "duration": 56266532,
  "status": "passed"
});
});