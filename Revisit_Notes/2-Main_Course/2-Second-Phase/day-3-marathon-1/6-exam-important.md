Write important points related to development and exams in general.

- S3 Replication is a very important topic for exam and questions are asked from that topic re-watch the video.

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
- Replication is very important, some reference links: https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html
https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html
https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-s3-replication-time-control-for-predictable-replication-time-backed-by-sla/
- Default limit of S3 bucket is 100.