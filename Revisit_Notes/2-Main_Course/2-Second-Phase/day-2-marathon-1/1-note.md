# S3 Security (18.5)
- S3 is private by default.
- Only identity that has access to s3 by default is account root user.
- S3 has S3 bucket policy. This is a form of resource policy. Attached to the resource (not identity), resource's context here is AWS microservice.
- Resource policy attach to a particular resource. Other accounts get access through resource policy.
- Resource policy can give anonymous access to a bucket.
- Principal in policy definition is used for anyone who is trying to access. Can be a living user like and IAM identity or anything assuming an IAM role.
- Checkout screenshot related to bucket policy for more reference. Explicit deny overrules anything else.
- Anonymous principle means, any random person in the internet. Anonymous principle aren't authenticated by AWS.
- If you are doing cross account access, the identity in the other AWS account should have the permission to access S3 in general, and the bucket should also have allow access and principle specification in its policy.
- Other form of security in S3 bucket is Access Control Lists. These are legacy. They shouldn't be used. Access control list applies on a specific bucket or a specific object.
- You cannot create ACL for a set of object. You shouldn't use ACL.
- Another security boundary is Block Public Access option. This was recently introduced. It has 5 options. Checkout screenshots and read those option. You can read the detail of options in the console as well.

# When to use identity policy or bucket policy for anything related to bucket? Take the below factors into consideration:
- Identity policy - Can control access for different resources.
- Identity policy - Use it if you prefer to use IAM.
- Identity policy - Only applies to the same account.
- Bucket policy - Just controls S3.
- Bucket policy - Can grant anonymous or cross-account access.
- ACLs - Never use them unless you have to.

# S3 Static Hosting (10.5):
- Static website is hosted in S3 in two use cases.
- First is to store static assets like images. This is called offloading. Storing in an EC2 is expensive, so we use S3. This is called Offloading.
- Second is to store out of band pages. Let's say you have some issue with your server. 401 or whatever. Then S3 will be used to serve a page that there is some issue. You cannot do this through your backend because it is down. This is called Out-of-band pages.
- Transferring data into S3 is free, but moving data out is charged.

# Creating a static website with S3 (18) -> Demo 
- Checkout the website resources in the static website hosting directory.

# Object Versioning and MFA Delete (8)
- Object versioning can be Disabled, Enabled and Suspended. 
- Disabled can be enabled, but it's not the other way around. (Screenshot)
- Enabled can be suspended and suspended can become enabled again.
- Versioning helps in storing multiple version of an object.
- When you disable versioning, the id field of any object in your bucket will be set to null.
- If you enable versioning, an ID will be allocated to the object. 
- If a versioned object is modified, a new object with a different ID will be created and at the same time, the older version will be retained.
- The last mutated object will be stored as the latest or current version of the object. If you still try to retrieve the same object which is versioned without specifying any version, you will retrieve the latest version by default.
- Delete Marker is a special version which is created when you delete an object in a version enabled bucket. Delete Marker is a newer version of the object, which will hide all previous version. If you delete the delete marker then, you un-delete the deleted object.
- Object versioning cannot be switched off, it can only be suspended.
- If you enable versioning, space will be consumed by all version. This can possibly take a toll on the bill.
- MFA -> Exam important. -> Gets enabled when you enable versioning.
- MFA is then required once you have enabled versioning to change the bucket state.
- MFA will be required to delete versions.


# S3 versioning (15) -> Demo
- Checkout screenshots related to this. Will give you an idea about the console options.


# S3 performance optimization (12)
- Type: single part, multi part S3 accelerated transfer.
- S3 use single put upload to upload data into the bucket by default for data less than 100 MB. You can do single stream upload of data up-to 5GB, but multi stream is recommended for anything over 100 mb.
- S3 convert the data into a single data stream and upload it. This is problematic, since data is a single stream, a single failure means that the entire stream needs to be re-uploaded.
- This requires full restart if there is any failure. Speed and reliability is less because there is only 1 stream.
- The threshold to do multipart upload is 100 megabyte.
- S3 accelerated transfer use AWS edge locations.
- checkout screenshots related to this.

# S3 performance (5) -> Demo
- http://s3-accelerate-speedtest.s3-accelerate.amazonaws.com/en/accelerate-speed-comparsion.html -> Cool tool for comparison from your current location.

# Key Management Service (18.5)
- Regional and Public Service. 
- KMS keys never leave KMS. <- Security feature.
- Role separation -> KMS needs a lot of granular permissions.
- Data encryption key -> If you want to encrypt some data, this key is generated in KMS. This key encrypts the data, then a cypher version of this key is generated which is stored alongside the encrypted data. The plain text version of the key is then discarded.
- FIPS 140-2 (L2) -> memorize -> Exam important -> US Security Standard used in KMS. Some of KMS functionality use L3 (level 3) instead of L2.
- Symmetric Keys
- Asymmetric Keys
- KMS Keys:
- Checkout screenshots related.
- KMS keys are isolated to a region and never leave that region.
- They can be multi-region if required.
- KMS keys can be AWS owned or Customer Manged. Customer keys are more configurable. 
- You can have aliases of an KMS key.
- Every KMS key has a key policy associated with it.
- KMS keys can only encrypt data up-to 4kb in size, so it uses DMK to perform any other sort of encryption.