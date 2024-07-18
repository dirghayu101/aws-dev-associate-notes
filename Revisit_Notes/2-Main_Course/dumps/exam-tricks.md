- Decrease the number of connection -> means use proxy.

- Object Caching, Offload your database, horizontal scaline, simple caching, multithreaded multicored performance -> Memcached. 

- Advanced datatype use case, persistence built-in, long lived data, publish and subscribe capabilities, multi-az with failover, geospatial support -> Redis.

- Use security manager when -> encrypted, rotation at regular interval is the requirement.

- If something needs to be distributed around the world -> CloudFront.

- Fastest Response is always given by Global Secondary Index.

- Exponential Backoff for any throughput related DynamoDB error.

- If the question says cost effective, it most likely means that you have to solve the problem using the existing service as new service will introduce new charges.

- 35-> Secret Manager vs Parameter Store use cases and differences? ->m Many many questions.

- Least Operational Efforts - try to use existing service, not adding extra. -> Secrets Manager wasn't used to store credentials because it was an extra service in one scenario.

