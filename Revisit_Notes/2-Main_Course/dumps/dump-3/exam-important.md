- Question 76 -> Linear deployment vs canary deployment. We would have chosen linear deployment if it's time taken for deployment would have been lesser than that of canary.

- Deployment types are important.

- 85-> Lambda@Edge, CloudFront, AWS SAM Template? -> The S3 bucket is configured as an origin for the CloudFront distribution? -> Lambda@Edge function can only be created in us-east-1 region. 

- 88-> Signed request, Canonical request, Signature version 4? -> Query String parameter that is named X-Amz-Signature? -> Http header: authorization?

- 108-> AWS Security Token Service? -> Origin set to S3 bucket in CloudFront? -> What does CloudFront really do? -> CloudFront functions have an execution time of few milliseconds. This makes them less functional. Lambda@Edge functions vs CloudFront functions? -> 
