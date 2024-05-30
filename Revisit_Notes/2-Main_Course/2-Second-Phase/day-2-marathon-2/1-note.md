# Notes from <Video name word to word>:
- pointers
- Summary of the video. What did you learn?

# Noted from <video name>
- pointers
- Summary of the video. What did you learn?

# KMS - encryption (13) -> (Demo)
- Symmetric Key Encryption -> Single key infrastructure.
- Asymmetric Key Encryption -> Public private key infrastructure.
- Checkout the command used in the resource directory.

# S3 object encryption (23) 
- Buckets are not encrypted, encryption takes place in the object level.
- Encryption of objects in the S3 bucket can be either server side or client side.
- You can use client side encryption along with server side encryption.
- In transit (via HTTPS), data always gets encrypted in both client and server side.
- Server Side Encryption is mandatory in AWS, so the data even if it is already encrypted will be encrypted again in S3.
- Three types of SSE: SSE with customer provided keys, SSE with Amazon S3-managed keys (default option) and SSE with KMS keys.
- Default option use AES-256 for encryption.
- In case of default option, a user with admin privilege on S3 bucket can view data. Consider this scenario in context to a financial organization. <- This is a big drawback.
- In case of customer provided key, the customer will send the object along with the key to encrypt the object with. <- Since this transfer takes place via HTTPS, they both are encrypted on transit.
- Since encryption happens in the S3, the CPU cost of encryption is taken care of by AWS.
- The key then is used to encrypt the object, and a hash of the key is tagged along with the object. This hash is tagged along to verify that the same key (sent by user) was used for encryption.
- After the key has been used to encrypt the object, it gets destroyed. And, cipher text along with the hash of the key will be stored. To retrieve the object you make a request with the encryption key. This encryption key will be matched against the hash to verify it.
- KMS keys are advantageous because you can achieve role separation through them. If the s3 admin doesn't have permission to access KMS key used for encrypting data in S3, they cannot access it.

# Object encryption and role separation (15) -> (Demo)
- SSE - KMS gives you a lot of flexibility. You can rotate the key as well which you cannot do for default.

# S3 Bucket Keys (6)
- SSE - KMS -> When an object reaches, S3, a request is made to KMS. KMS sends a plain text key (called Data Encryption Key) and a cipher key which is encrypted plain text key. The object is encrypted with the plain text key and then the plain text key is destroyed. The encrypted object is then stored along with with the cipher key. The cipher key can only be decrypted by KMS.
- This is CPU intensive. So to optimize it, we generate a single time bound DEK called Bucket Key along with its cipher form. The Bucket Key expires after a certain time period.
- Checkout this: https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html



# S3 Object Storage Class - Part 1 (9)
- Will discuss types of S3 services provided by AWS. Checkout Screenshots and compare.
- S3 Standard -> Suitable for most use cases.
- S3 Standard IA (Infrequent Access) -> Suitable if you don't retrieve the data often. Otherwise more expensive then the standard option. This should be used for long-lived data which is important but where access is infrequent.  
- S3 One Zone (Infrequent Access) -> Should be used for long-lived data which is non-critical and replaceable and where access is infrequent.

# S3 Object Storage Class - Part 2 (12)
- Checkout Screenshots.
- S3 Glacier - Instant -> More expensive retrieval, longer minimum. Should be used for long-lived data, accessed once per quarter with millisecond access.
- S3 Glacier - Flexible -> Objects are not readily retrievable. Analogy: Data is in chilled state, it need to be heated before accessing. This should be used for archival data where frequent or realtime access is not needed (e.g. yearly access). 
- S3 Glacier - Deep Archive -> Analogy: Data is frozen you can only use it after defrosting it. Should be used for archival data that rarely if ever needs to be accessed as it takes hours or days for retrieval. Used for legally obliged or regulatory data storage.
- S3 Intelligent Tiring -> It tiers object. It has following tier: Frequent Access (Similar to S3 Standard), Infrequent Access, Archive Instant Access, Archive Access and Deep Archive. Checkout Screenshot. This tiering charges for management and monitoring of data which is moved between access tiers. This should be used for long-lived data with changing or unknown patterns of access.


# S3 Lifecycle Configuration (8)
- Transition Action: Configuration to move between storage classes within S3.
- Expiration Action: Deletion of objects within a bucket based on some rules.
- Lifecycle Configuration manages a Bucket or a group of Objects within a bucket based on set rule criterions.
- Lifecycle configuration is a set of rules.
- An exception: S3 One zone Infrequent access cannot transition to S3 Glacier Instant Retrieval.
- Lifecycle transition has a limit of 30 days before it can be transitioned.

# S3 Replication (14)
- In different aws account replication, you need to allow data transfer from the source in the bucket policy.
- 