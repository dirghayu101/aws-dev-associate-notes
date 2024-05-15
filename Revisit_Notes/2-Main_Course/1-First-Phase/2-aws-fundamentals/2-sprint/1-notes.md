# EC2 Basics:
- Since you declare an EC2 instance in an availability zone, it is availability zone resilient. If the availability zone fails, the instance will fail.
- It is IAAS - provides virtual machine which are commonly called instances. Since it is IAAS, you are responsible for OS and upward stack in the infrastructure stack. Checkout 1-different-services-as-platform.png for reference.
- On-demand billing.
- Different instance sizes and capabilities. Some of these can be changed after initialization.
- It is a private service. Uses VPC networking.
- Can use local on-host storage or Elastic Block Storage (EBS).

# EC2 lifecycle:
- In Running state an instance consume CPU, memory (primary), storage (secondary) and network services. So you are charged for all those.
- In stopped state an instance won't be consuming any CPU, memory (primary storage) or network services. Storage is still allocated which has OS and other files/application, thus you will be charged for that.
- Once you terminate an instance, you won't be charged for any of the above mentioned consumption point, but it is irreversible.

# AMI (Amazon Machine Image):
- An AMI can be used to create an EC2 instance or an AMI can be created from an EC2 instance. An AMI contains root volume for the OS.
- Block Device Mapping:

# Connecting to EC2:
- For Window's instances you use RDP for connection which runs on the port 3389, whereas for linux instances you use SSH for connection which runs on port 22.
- Cloud Watch is the service that collects all the statistics from your other services. Specifically EC2 instance in this context.