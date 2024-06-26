# Permissions control using IAM groups (9.5) -> Demo
- Instructor used CloudFormation YAML template to deploy the infrastructure. Checkout the syntax in the resource directory.
- IAM group since has limited functionality, you won't see much options for the service while using web console.

# IAM Roles - The tech (8.5)
- IAM Roles differ from IAM user in many regard. 
- An external or internal identity (which can be a mobile app, an ec2, onsite linux machine) uses roles on a temporary basis to access resources in an AWS account.
- An IAM user is a principle. It is a virtual representation of someone (a developer).
- You use IAM role in a scenario where a lot of identity need the same access (let's say a bunch of EC2's communicating with another resource).
- IAM users can have identity, permissions and policies attached to them either via inline json or attached managed policies.
- IAM Roles have Trust Policy and Permission Policy. 
- Remember, you assume IAM Role to perform some action.
- Trust policy tells which identities can assume an IAM role. Only if an identity is allowed to assume a role in the trust policy will it get to access it.
- Trust policy can refer IAM user in the same AWS account or other accounts and also services like EC2 instances. It can also allow anonymous assumption of a role.
- Based on trust policy, if an identity is allowed to assume a role, Temporary Security Credentials is allocated for that identity to access resources specified in the permission policy (permission policy being the other attribute of an IAM Role.)
- Permission policy is used to check what temporary security credentials can access in the AWS account. If you change permission policy, the permission of the credentials also change.
- AWS Organization is used to mange roles, user and other IAM related stuff.
- Temporary Security Credentials are generated by an AWS Service called Secure Token Service.
- sts:AssumeRole -> Operation used to generate token.


# When to use IAM Roles (15.5)
- There are multiple ways of giving access to resources in your AWS account, and IAM role is one of them. 
- Let's say you are running a lambda function for some tasks. One way of providing access can be through tokens, but hard coding such values is not a good practice as it is cumbersome to update these tokens and secondly hard-coding these token can be a security risk.
- Principle is the identity/user which is trying to access some service.
- If for some purpose you have multiple principle trying to access a resource/service, then this is the ideal case to use roles. IAM user also comes with a hard limit of 5000.
- Another scenario for using a role can be a glass break scenario (emergency). Where you need more access then you usually get because of some emergency. But since there will be a glass wall you need to break (hypothetically), you would do that when you really need to.
- One more scenario where IAM roles is used is within a corporate environment with an on-prem identity management system. Let's say a corporate is using active directory for access management, then you can associate those active directory accounts with roles and use the accounts directly to access resources within AWS by indirectly assuming a role.
- In corporation with thousands of employees IAM roles are used instead of IAM user. An IAM user account needs to be managed, the more the number, the complicated it gets. On the other hand you can use few roles to give access to multiple accounts. 
- Web Identity Federation is also used for IAM Role. 

# Service-linked Roles and PassRole (5.25)
- PassRole is used to give services more permissions then the identity using that service.
- read more about it. Checkout the screenshots.

# AWS Security Token Service (7)
- sts:AssumeRole -> Generate temporary Credentials by using Security Token Service.
- They are similar to access keys but they expire and don't belong to an identity (compared to access keys which are attributes of an identity)
- They have limited access, which is defined in the associated permission policy.
- These tokens gets generated when they are requested by an identity (AWS or external)
- Checkout the flow chart screenshot of this video. It gives you an idea of how STS comes in the picture. 


# AWS Organizations (13)
- An AWS Organization lies outside the scope of an AWS Account. An AWS Account can create an organization.
- If an AWS Account creates an Organization, it becomes the Management Account (used to called Master) for that Organization.
- You can then send invitation to other AWS account to join the Organization created by the Management Account.
- The account that was used to create the organization can be referred to as master account, management account or payer account. All of them are synonymous.
- Members of the AWS Account send all the bills generated to the management account, which facilitates consolidated billing. Removes financial admin overhead.
- You can pay in advance using management account to get cheaper rates for services.
- Service Control Policy is a feature of AWS organization which can used to access control the member account.
- You can also add member accounts directly within the organization.
- Having an organization changes best practices. It gives securer alternatives to IAM user in the form of IAM roles. 

# AWS Organizations (20) -> Demo
- OrganizationAccountAccessRole is the default username that is used for Switching Role in an Organization structure.