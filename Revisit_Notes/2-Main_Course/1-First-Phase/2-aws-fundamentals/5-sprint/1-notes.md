# Cloud Watch Basics:
- Native collection: EC2 instance's metrics like CPU utilization gets collected by cloudwatch by default. This is called native collection. So, AWS services can be handled natively and don't require extra setups.
- But for using cloudwatch on services or systems outside the AWS environment, you need to install cloudwatch agent.
- Cloudwatch's three major services are metrics (collection natively or through agent), logs and events (like termination of ec2 instance or what should be done in certain times aka schedule something). 

# Cloud Watch Concepts:
- Namespace in Cloudwatch: Think of it as a container for monitoring data.
- Default namespace AWS/service: This is where all the metrics go for different services by default. For ec2 this will be AWS/ec2 namespace.
- Data-point: Data-point is the data recorded for any metric collected like CPU utilization, Network I/O, Disk I/O, etc. It will have two components i.e., timestamp and value. 
- Dimensions: Think of dimension as metadata about data-point. It will be used to identify the data like instance-id of the source where the data is coming from and so on.
- Alarm has three stages: insufficient data, okay or alarm. Based on a state you can perform an action.