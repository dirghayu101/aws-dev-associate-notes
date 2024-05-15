# General Pointers:
- Every AWS account has an account root user. Account Root user has all the privileges and control of that account.
- Account root user cannot be restricted, we create IAM identity to give access on different level.
- So for the duration of the course you will be using two accounts, a general management account and a production account.
- Always think of AWS accounts as containers which you can use to modularize your infrastructure. They are disposable and try to use as many as you need.
- GMAIL feature to help in creating multiple accounts: ./screenshots/gmailTrick.png


# Best practices for an AWS account:
- AWS account name is the admin name. 
- Follow a similar naming convention for your admin username.   
    Email Address used: adrian+trainingawsgeneral@whatever.com
    Root name: AC-TRAINING-AWS-GENERAL
- US-east-1 should be your preferred location.
- Activate IAM user/role access to billing information. As you are not going to use your root user for accessing account this will help you in using your IAM identity for accessing the billing information.


# MFA Types: Inherent (fingerprint, face, voice, iris, tongue print), Location (your IP or maybe MAC address), Possession (MFA device, application).

# An important factor to take into consideration while using MFA is the convenience. Ideal MFA balances security with the convenience of the stake holder.