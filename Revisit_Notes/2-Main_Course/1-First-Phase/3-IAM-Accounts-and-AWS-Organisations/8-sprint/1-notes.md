- I didn't specify any hard coded name for the S3 bucket in my IAM policy, so cloud formation automatically generated a name by combining the variable name (of the resource definition) and the stack name (cloudformation stack) along with some random string.
- Adding on to the previous point, even IAM user definition in the cloud formation template had no explicit definition so AWS combined stack and virtual reference name for the user name which is IAM-sally-edZTTkTIntoN.
- Checkout 's3-full-admin-access.json', this is a policy that you can attach for admin privilege in the s3 microservice.
- Checkout json and yaml file in this sprint.

# IAM Groups:
- IAM groups have no credentials of their own (username, password). Questions come from this to confuse people.
- Containers for IAM user. You cannot login to IAM groups and their purpose of existence is to organize IAM users better.
- Don't overestimate what they can functionally do. A big mistake that novice developers make.
- An IAM user can be a member of multiple IAM groups.
- You can associate policies to a group which will then apply to the groups members. Consider this scenario, if a developer is part of two groups then both groups' policies will apply on him, and if there are any inline policies, they will be applied as well. In total then the developer will have 3 policies applicable on him.
- A user can only be member of 10 groups, and a group can have a maximum of 5000 members (5000 is the hard limit of the number of IAM users you can have in an account).
- There is a soft limit of 300 groups per account.
- Groups don't allow nesting. A group can have no sub groups.
- Groups are also not a true identity, they cannot be referenced as a principle in a policy. You can refer users and roles.

