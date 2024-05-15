# Quick Pointers:
- To configure a profile in AWS CLI, use:
    aws configure --profile <profile-name>
Refer: ./screenshots/aws-cli-configuration-using_profile.png

- You should set default region to be us-east-1.

- To test if the above configuration has been successful:
    aws s3 ls --profile <profile-name>
This returns empty string if there are no S3 buckets, if it is giving error then there is a configuration error.

