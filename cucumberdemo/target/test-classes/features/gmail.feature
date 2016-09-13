Feature: Gmail Signup 

Scenario: verify signup page title	
	Then Page title is "Create your Google Account"
					
Scenario Outline: Field error message validation 
	When I fill the details as "<FirstName>","<LastName>","<MailId>","<password>","<CnfPassword>","<Phone>","<RecoverMail>" 
	Then I see error message saying "<Error>" located at "<Locator>" 
	
	Examples: 
		|FirstName|LastName|MailId     |Password     |CnfPassword  |Phone      |RecoverMail          |Error                                                                           |Locator                       |
		|akshay   |gupta   |akshay19vit|abcd1234@1324|abcd1234@1324|7387152444 |recover1234@gmail.com|That username is taken. Try another.                                            |errormsg_0_GmailAddress       |
		|akshay   |gupta   |akshay19432|abcd1234@1325|abcd1234@1324|7387152444 |recover1234@gmail.com|These passwords don't match. Try again?                                         |errormsg_0_PasswdAgain        |
		|akshay   |gupta   |akshay24463|abcd1234@1324|abcd1234@1324|73871522444|recover1234@gmail.com|This phone number format is not recognized. Please check the country and number.|errormsg_0_RecoveryPhoneNumber|
		
Scenario: Field error message validation using data table approach
	When I fill the details
	|Fields     |Value                |
	|FirstName  |akshay               |
	|LastName   |gupta                |
	|MailId     |akshay19vit          |
	|Password   |abcd1234@1324        |
	|CnfPassword|abcd1234@1324        |
	|Phone      |7387152444           |
	|RecoverMail|recover1234@gmail.com|
		 
Then I see error message saying "That username is taken. Try another." located at "errormsg_0_GmailAddress"  
	
	