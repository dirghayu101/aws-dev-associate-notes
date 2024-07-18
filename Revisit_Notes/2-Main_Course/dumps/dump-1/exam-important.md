- Error 502 in lambda.If your Lambda function's permissions are incorrect or the response to the API request isn't formatted correctly, then the API Gateway returns an HTTP 502 status code. -> Change the format of the lambda function reponse to the API call. -> Read about other HTTP errors? 

- 8-> S3 intelligent tiering will only be used when the access pattern is unknown. And the question states this explicitly or implicitly. -> S3 Glacier Deep Archieve standard retrieval takes 24 hours and bulk retrieval takes 48 hours.

- Canary Deployment -> Two part shift (5% then 95%, or 40% then 60%). Linear -> Traffic is shifted in equal increment with an equeal number of minutes between each increment. ->  AllAtOnce -> All at once traffic shift.

- RDS Proxy is used in many use cases

- Use security manager when encrypted, rotation at regular interval is the requirement.

- AWS System Manager Parameter Store vs AWS Security Manager --> Lots of questions from these.

- AWS CDK and AWS SDK? - Many related questions.

- Around the world means CloudFront.

- Fastest Response is always given by Global Secondary Index.

- Lots of questions from Amazon CloudFront.

- Exponential Backoff.

- 32-> Elastic Beanstalk? -> Deployment types: Canary, In-place, All-at-once, in-place, blue/green, immutable deployments? -> Read article deploying applications to EBS Environments.? -> Rollback process?

- 35-> Secret Manager vs Parameter Store use cases and differences? -> SNS topic?

- Secret key and access key use is not considered the most secure way. They will be eliminated in questions asking for the most secure way.

- 49-> EBS application maintain full capacity? -> Blue/green deployment? Immutable Deployment? Rolling with additional Batch deployment? Blue Green vs Immutable Deployment? Immutable use less resources comparatively.

- 50-> AWS CloudWatch vs AWS CloudTrail vs AWS X-Ray vs AWS Inspector Agents?