# IAM Policies:
- IAM policies get attached to identities in AWS. Identities in AWS include IAM user, IAM groups and IAM roles.
- IAM policy just grant or deny access, these policy documents are written in JSON.
- When an identity access any resources in AWS, it has to authenticate itself.

# Policy Conflict and consistent rules:
- In case of policy conflict (allowed at one place, denied at another), the access rules related to a resource are first taken together then access is determined based on some consistent rules.
- The first rule is priority will be given to explicit deny. Explicit deny cannot be overruled.
- Second priority is given to explicit allow. Explicit deny can overrule it.
- If neither explicit allow or explicit deny is there then default access is given. The default access is deny, AKA Default Deny (Implicit).
- You only have access if you have an explicit allow otherwise you cannot access. Even if you have explicit access, if you also have explicit deny, it will overrule the allow.
- Policy gets really complicated in real life. Let's say you are an employee, you will have access policy associated with your employee role, then policy for current project role, then let's say you are accessing a resource, there will also be a resource policy associated with that resource.

# IAM policy types:
- IAM policy implementation types: Inline Policy and Managed Policy.
- Inline policy scenario: Let's say you start working in a project in your company because of which the aws admin, wrote an access policy in your IAM user. This will be an inline policy. This is not scalable and creates isolated permission, which need to be managed on a very granular level.
- Managed policy: In this case you would have created a centralized managed policy.
- When will use inline? Special case or exception case. Never they are used generally.

# IAM User:
- IAM Users are an identity used for anything requiring long-term AWS access e.g. Humans, Applications or service account.
- Principal is any client (can be human, even an ec2 instance) who wants to access a resource in the AWS environment.
- Principal after authentication is known as authenticated identity.
- For authentication principal can use Username and password or access key.


# ARN (Amazon Resource Name):
- Uniquely identifies resources within an AWS account.
- "::" means, there is no specification. Something that doesn't need explicit declaration.
- Wildcard ('*') can be used.

# Important for exam:
- 5000 IAM users per account.
- A single IAM User can be a member of 10 groups.

# Note: The above metrics are important as they affect the way you design your solution.

If this 5000 rules impact your solution, the alternative services used for mitigating these are IAM Roles and Identity Federation.