Feature: Gmail SignIn & SignUp

@login 
Scenario: Verify gmail login page title	
    Then Page title is "Gmail"
    
@login 
Scenario Outline: Verify invalid/blank mail id error message	
    When I enter mail id as "<Mail>"
    Then I see invalid mail id error "<Error>" 
Examples:
|Mail       |Error                                      |
|abc43urrrfe|Sorry, Google doesn't recognize that email.|
|           |Please enter your email.                   |


@login 
Scenario Outline: Verify invalid password/blank error message	
    When I enter mail id as "<Mail>"
    And password as "<Password>"
    Then I see wrong password error "<Error>" 
Examples:
|Mail       |Password   |Error                      |
|akshay19vit|244567bdkbf|Wrong password. Try again. |
|akshay19vit|           |Please enter your password.|

@signup 
Scenario: Verify signup page title	
    Then Page title is "Create your Google Account"


@signup	
Scenario Outline: Field error message validation 
   	When I fill the details as "<FirstName>","<LastName>","<MailId>","<Password>","<CnfPassword>","<Phone>","<RecoverMail>" 
	Then I see error message saying "<Error>" located at "<Locator>" 	
	Examples: 
		|FirstName|LastName|MailId     |Password     |CnfPassword  |Phone      |RecoverMail          |Error                                                                           |Locator                       |
		|akshay   |gupta   |akshay19vit|abcd1234@1324|abcd1234@1324|7387152444 |recover1234@gmail.com|That username is taken. Try another.                                            |errormsg_0_GmailAddress       |
		|akshay   |gupta   |akshay19432|abcd1234@1325|abcd1234@1324|7387152444 |recover1234@gmail.com|These passwords don't match. Try again?                                         |errormsg_0_PasswdAgain        |
		|akshay   |gupta   |akshay24463|abcd1234@1324|abcd1234@1324|73871522444|recover1234@gmail.com|This phone number format is not recognized. Please check the country and number.|errormsg_0_RecoveryPhoneNumber|
		|akshay   |gupta   |akshay&*@!$|abcd1234@1324|abcd1234@1324|7387152444 |recover1234@gmail.com|Please use only letters (a-z), numbers, and periods.                            |errormsg_0_GmailAddress       |
		
		
@signup
Scenario: Verify mandatory fields
When I click on next step
Then I see name field mandatory
And I see username field mandatory
And I see password field mandatory
And I see confirm password field mandatory
And I see birthday field mandatory
And I see gender field mandatory
 

