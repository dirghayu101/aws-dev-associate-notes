- Always have MFA enabled. By the end of this course you will have 4 MFA IDs. 2 for each (root and admin).
- Checkout free AWS services if you have to on: https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all
-  In the billing preference tab of your AWS account enable invoice delivery preferences and alert preferences. This will alert you about the cost incurred. Checkout: ./screenshots/billing-preference.png
-  Create a budget in the billing console to inform you about the cost incurred. Checkout: ./screenshots/budget-create.png
- If you are setting up an account checkout this checklist to follow the best convention: ./screenshots/creating-aws-account.png
- The main goal of using IAM is to manage who can access what. You should use IAM with the principle of least privileged access.
- Think of IAM like a database dedicated to your AWS account.
- IAM has three types of object/permission categories: User, Group and Roles. Checkout: ./screenshots/iam-basics.png
- IAM policy documents are used to allow or deny access to AWS services for User, Groups and roles. Checkout same screenshot as above.
- IAM's main role include authenticate, authorize and manage identities. Checkout: ./screenshots/iam-roles.png

# Identity Federation

# Authenticate vs Authorization
In simple terms, authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to.

Comparing these processes to a real-world example, when you go through security in an airport, you show your ID to authenticate your identity. Then, when you arrive at the gate, you present your boarding pass to the flight attendant, so they can authorize you to board your flight and allow access to the plane.

Checkout: ./screenshots/8-authentication-vs-authorization.png