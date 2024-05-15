# Root user vs admin user in AWS:
- Admin user has all the privileges that a root user has.

# Still, there a few things that the root account can do that an Admin IAM user cannot but you're unlikely to run into them on a daily basis:
- Account management, particularly things like closing an account or changing the support tier.
- In some support tickets, the agents will refuse to talk to anyone other than the root user.
- Enable IAM billing access, this is a once per account setting that only the root user can enable which allows access to the billing information to IAM users.
- It is possible to trap yourself using DENY permissions, the example that comes to mind is setting a DENY all to everyone on an s3 bucket policy. This will prevent admin IAM users from deleting the bucket or even changing the policy. Only the root user can overrule this sort of thing.
-  Enable opt-in settings like resource id length changes for the entire account.
- `The convention for the admin name is "iamadmin".
- An IAM access key has two components: Access Key ID and Secret Access Key. Similar to username and password. Username is the public part of credential. Username and password in congestion are called credentials.
- Rotating access key refers to the process of changing the credential pair of access key (Secret access key and access key ID).
- Based on best practice convention, the root user ID should not be used to create any access key pair.
- You can only have two access keys for any AWS account.
- You can only see the secret access key once while it gets generated. You cannot after that, so record it once you are done generating it.
- To configure a profile in AWS CLI, use:
    aws configure --profile <profile-name>
Refer: ./screenshots/
- You should set default region to be us-east-1.
- To test if the above configuration has been successful:
    aws s3 ls --profile <profile-name>
This returns empty string if there are no S3 buckets, if it is giving error then there is a configuration error.