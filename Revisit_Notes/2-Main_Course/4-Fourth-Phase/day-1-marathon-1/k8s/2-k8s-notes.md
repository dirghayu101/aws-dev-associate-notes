# Distributed System: (https://medium.com/star-gazers/comprehensive-guide-to-distributed-systems-d89449a7ff77)

- Distributed System is fault tolerant and horizontally scalable comparatively much more easily when compared to a non-distributed system.


- Broadly speaking, they allow us to achieve following
    Horizontal scalability
    High efficiency for given infra costs
    High availability


- Doesn’t non-distributed systems offer the same set of features? No. At least not without incurring heavy costs.


- Disadvantages of distributed systems:
    - Complexity increases many fold
    - Understanding overall system takes expertise from multiple domains
    - Data duplicacy occurs, generally
    - Data migrations become more difficult
    - Networking costs increses
    - Securing the system becomes more difficult
    - Deployments and troubleshooting becomes difficult


- When to use a distributed system
    - Whenever a non-distributed system starts to incur heavy cost/performance ratio.
    - You effectively trade-off simplicity for performance at a given cost


- When NOT to use a distributed-system
    - Till you’re able to maintain acceptable cost/performance ratio. The lower, the better


- Important Terms:
    
    - Reliability: Ability of a system to perform its required functions under stated conditions for a specific period of time. It is a measure of continuity of correct service. Reliability is a safety guarantee stating that nothing bad will happen (under the stated conditions)

    - Availability: The proportion of time for which a system can perform its function as seen from a client’s perspective. It is measured in percentage units w.r.t. time. It is defined as probability value. A 99.999% available system means it can go down for max 5.26 minutes/year, or max 26.30 seconds/month. This is also known as 5 nines of availability. 

    - Scalability: The property of a system to be able to meet increased load by adding proprtional amount of resources. In simple sense, this means the system can handle increased amount of load by simply consuming more resources, without letting it’s performance get impacted in a negative manner.

    - Fault Tolerance: The ability of a system to detect a fault, and instantaneously switch to the redundant copy of the component with almost negligible downtime. Loss may includes network failures, cpu, ram, disk, power failures, etc.. This mostly relates to the hardware part.

    - High Availability: Similar to fault tolerance, but more cost effective at the expense of comparatively more, but acceptable downtime. This works on the software side, and uses redundant systems and smart fault detection and correction strategies for it to function.
    Read this: https://www.techtarget.com/searchdatacenter/definition/high-availability
        - Principles to design highly available system: 
            - Eliminate any single points of failure. 
            - Build in reliable failover. If a system component fails, a similar component must be immediately available to take over for the failed component.
            - Implement automatic failure detection. Failures or faults must be immediately detected and acted upon. Ideally, the system will have built-in automation to handle the failure on its own. It should also have built-in mechanisms for avoiding common-cause failures, where two or more systems or components fail simultaneously, likely from the same cause.
            - Ensure no data loss. When a component fails, it is possible for data to be lost if data protections have not been put into place. An HA system should include the mechanisms necessary to avoid or minimize data loss during system failure.

    - Consistency: Ability of a system to maintain a single, up-to-date copy of the data, irrespective of how widely distributed it is.

    - Atomicity: Ability of a system to either correctly apply all given operations, or none.

    - Durability: Ability of a system to be able to persist information correctly even across hardware failures, once the information has been committed to its’s persistence backend, whatever that may be.

    - Latency: Time delay between cause and effect. In distributed system terms, it generally refers to delay in propagating any change in data across one part of the system to other.

    - Replication: Act of making multiple copies of a subject. In our case, the data. Used to improve data availability and accessibility, and to improve system resilience and reliability.

    - Transaction: A single logical unit of work. It either completes fully, or none.

    - Sharding (Partitioning): Partitioning of related data across more than one locations (machines/nodes) to either achieve higher concurrency, or allow holding more data as allowed on one location, or both. It is also known as horizontal partitioning of data as a database table is split horizontally (across rows) as opposed to across columns (as in vertical partitioning). 
    
    Sharding is a method of database architecture, mainly employed for horizontal partitioning across multiple machines or databases. Each shard functions as a separate database, and together, they comprise a single logical database. Sharding distributes data according to a specific key, such as customer ID or geographic location, with the goal of decreasing the load on each database and thereby improving performance.

    For example, an e-commerce platform experiencing heavy transaction volumes could use sharding to distribute customer data across different databases based on geographic location, thus ensuring even distribution of requests and reducing latency for users. The database is segmented into multiple shards based on customer geographic location (Americas, Europe, Asia, etc.).

    (Ref: https://www.pingcap.com/article/sharding-vs-partitioning-a-detailed-comparison/)

    - Accuracy and Correctness: Accuracy means your clock is changing at the same rate as the perfect clock. Correctness means the clocks register the same time.


- CAP Theorem:
    
    - CAP refers to Consistency, Availability, Partition tolerance. The theorem, in it’s very basic sense, states that in a distributed system, one can only have either the consistent system, or the available system, in a partitioned network state. Partitioned network simply means a component is not reachable due to network failure.

    - The theorem helps us to decide what is more important for our current use-case. For transactional data, the choice is consistency, while for high throughput data that can deal with a little lag (like analytics data), consistency can be traded off to achieve better availability, for given associated costs.
    
    - A system that is partition-tolerant can sustain any amount of network failure that doesn’t result in a failure of the entire network. Data records are sufficiently replicated across combinations of nodes and networks to keep the system up through intermittent outages.

    - When dealing with modern distributed systems, Partition Tolerance is not an option. It’s a necessity. Hence, we have to trade between Consistency and Availability.

    - A variant of this is BASE theorem which effectively trades away consistency for other properties, effectively, eventual consistency while gaining far greater availability and scalability. This stands for Basically Available Soft State and Eventually Consistent.


- PACELC Theorem:

    - This is an extension to CAP theorem and helps to make better decision wherein network is NOT partitioned.

    - It states that in case of network partitioning (P) in a distributed computer system, one has to choose between availability (A) and consistency © (as per the CAP theorem), but else (E), even when the system is running normally in the absence of partitions, one has to choose between latency (L) and consistency ©.

    - What this is trying to say is that even when network is functionally in desired state, one has to chose between latency and consistency, and can’t have both, to their best possible values.


- ACID Properties:
    
    - It is a set of properties of database transactions intended to guarantee data validity, despite errors, power failures, and other mishaps. Relational databases are primary candidates of such properties, though other types might also support (partially or fully)

    - A: Atomicity: This property states that a transaction must be treated as an atomic unit, that is, either all of its operations are executed or none. There must be no state in a database where a transaction is left partially completed
    
    - C: Consistency: The database must remain in a consistent state after any transaction. No transaction should have any adverse effect on the data residing in the database. If the database was in a consistent state before the execution of a transaction, it must remain consistent after the execution of the transaction as well

    - I: Isolation: In a database system where more than one transaction are being executed simultaneously and in parallel, the property of isolation states that all the transactions will be carried out and executed as if it is the only transaction in the system. No transaction will affect the existence of any other transaction.

    - D: Durability: The database should be durable enough to hold all its latest updates even if the system fails or restarts.


