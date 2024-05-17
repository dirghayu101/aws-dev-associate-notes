# S3 Characteristics:
- Think of S3 as your default storage service in AWS. You use other storage services only when S3 is not meeting your use-case.
- S3 has high scalability potential.
- S3 has regional based resilience (replicated across availability zone in a region).
- S3 object are stored in key and value pair. Key is the name that you give to an object. Value is the stored file. 
- The value of stored file in S3 can be in the range of zero bytes to 5 TB (one of the reason which makes it scalable.)
- Objects also have version ID, metadata, access control and sub-resources.
- S3 bucket name should be globally unique (across all AWS account). 
- A bucket can store unlimited objects with each object having a value ranging from 0 bute to 5 TB. So basically, it can store infinite amount of data.
- S3 buckets have a flat structure. (No hierarchy like file system)
- All resources in the AWS have a unique ARN associated with them. 
    ARN structure -> arn:aws:<service>:<region>:<account-number>:<resource-name>

# Exam important points:
- Bucket name should be globally unique.
- Name should be in the range of 3-63 characters, all characters lowercase and no underscores.
- Bucket name can only start with lowercase letter or a number.
- Bucket name cannot be in the format of ip address like 123.21.78.4
- There is a soft limit (default set by AWS) of 100 buckets per AWS account and a hard limit (you can increase it to max of 1000 by contacting AWS support) of 1000.  
- You can have 0 to infinite objects in a bucket each varying from 0 bytes to 5 TB.
- Key = object name and Value = Data.

