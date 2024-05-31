# S3 Replication (14)
- Two types of S3 replication available: Cross Region Replication (CRR) and Same Region Replication (SRR)
- These two replications also differ based on whether you are performing the replication between same AWS accounts or different AWS accounts.
- A replication configuration is applied on the source bucket. In replication configuration you assign an IAM role to the source bucket and specify about the destination.
- In case of different/cross account replication, providing the IAM role just from the source AWS account is not sufficient as AWS bucket in the other account does not trust the IAM of a different account, thus you configure the destination account's S3's bucket policy as well.
- Replication option 1: what to replicate? (All objects or subset, default is all objects) -> You can apply filters.
- Replication option 2: what should be the storage class? (Default option will be to maintain.) -> replication in most cases is used to create a secondary copy. -> So, the secondary copy is usually lower tier (S3 Standard IA or glacier or something)
- Replication option 3: Ownership of the objects replicated? (Default owner is the source account, default in case of cross aws account replication is the destination bucket)
- Replication option 4: Replication Time Control (RTC) -> 15 minute replication -> Synchronous

# Exam Pointers from S3 replication:
- By Default replication is not retroactive, you enable replication on a pair of bucket. If you enable replication on a bucket which already has objects, those objects will not be replicated.
- Both source and destination need to have versioning enabled. A bucket cannot be enabled for replication without versioning.
- Batch replication can be used to replicate existing object.
- By default, replication is one way (Source to Destination). Bi-directional replication option has been recently made available, you need to configure for that (not default)
- Replication is capable of handling objects which are unencrypted, or encrypted using SSE-S3 & SSE-KMS (With extra configuration). SSE-C encryption was recently added as a replication option, historically it was incompatible.
- The source bucket owner needs permission to objects in that bucket for successful replication. Sometimes some buckets have objects which are not owned by the source bucket owner (Someone else uploaded), those objects wouldn't replicate.
- System events are not replicated (only user events are). Glacier or Glacier Deep Archive cannot be replicated.
- Delete markers are not replicated (by default). You can configure to allow it.

# Replication Use Cases:
- SRR (Same Region Replication) - Log Aggregation of different things.
- SRR - Production and Test account synchronization.
- SRR - Resilience with strict sovereignty.
- CRR (Cross Region Replication) - Global Resilience Improvement.
- CRR - For Latency Reduction.

# Cross-Region Replication of an S3 Static Website (20) -> Demo
- Checkout screenshots related to S3 Replication Demo.
- He uses a term Replication SLA repeatedly. This is what it means: This Amazon S3 Replication Time Control Feature Service Level Agreement (“SLA”) is a policy governing the use of the Amazon S3 Replication Time Control Feature (“RTC Feature”). 

# S3 Pre Signed URLs (11)
- Long term identity for pre-signed URL like IAM User, IAM role not suitable as it is not a long term identity.
- To give access to objects in an S3 bucket, you have the following options: Give principle an AWS identity, Give principle some AWS credentials or make all the objects in the public. All of these are not considered good practice.
- We use Presigned URL to give access. The principle will be accessing the object as the IAM user creating the presigned URL. They have expiration time and all of that.
- Since identities are short term, you shouldn't create pre-signed URLs using identities.
- Checkout screenshots for more information.
- When an IAM user creates a Pre Signed URL, the principle will access the object which the URL maps to via the IAM user's credentials. This checks for real time permission of IAM user. If the IAM user doesn't have permission to access the bucket object while the principle is trying to access it, the principle would not be able to access the object. It gives you realtime access based on the permission of IAM user who generated the URL.
- Even if you don't have permission, you are still allowed to create a pre-signed URL.
- You can also create pre-signed URL for an object that doesn't exist. 
- If you generate a pre-signed URL using an IAM Role like an EC2 instant, the URL will stop working when the role stops working.
- You were only allowed to generate pre signed URL using terminal, but now you can generate is using the console as well.

# Creating and using PresignedURLs (18) -> Demo
- Command used: 
```bash
    aws s3 presign s3://bucketName/objectName.extension --expires-in 180
```
- 180 in above command is in seconds.


# S3 Select and Glacier Select (5.5) 
- These are ways to retrieve parts of object of an entire object.
- S3 can store huge objects (up to 5 TB), checkout SS for more info.
- SQL like statement helps you in retrieving part of the object.
- Let's say you need part of a 5TB object in the client side. One way can be to retrieve the entire object and then filter it out in the client side. But you will still incur fee for 5TB data transfer which won't make this process optimized. So, you can filter in the server side to optimize it. <- Concept.


# Cross-origin resource sharing (9.5) 
- Policy you write for cross domain access. Checkout SS and read mozilla docs.
- This is a web server concept, not something particular to cloud. Knowing about it helps.


# S3 Events (4)
- Event Bridge is preferred to use instead.


# S3 Access Logs (3)
- Logs are stored as newline delimited JSON, not simple JSON.
- Storing logs of a source bucket in a different destination bucket. -> Because of audit requirements, understanding object access in the source bucket or other such things.


# S3 Requester Pays (4.5)
- You already know that moving data into AWS is free, but moving data out of AWS gets charged.
- S3 Requester Pays is configuration where the requester who is moving out the data from your S3 bucket will be charged instead of you.


# S3 Object Lock (10)
- Object lock can only be enabled in new buckets, for existing bucket you have to make a request to AWS.
- This feature requires versioning to be enabled in the bucket. And you cannot disable this feature once you enable it for a bucket.
- Object lock can be of three types: legal hold lock, governance lock and compliance lock. 
- WORM Model (Write Once Read Many) for an object.
- Checkout screenshots.  


# Section Quiz (10)
- 71%.
