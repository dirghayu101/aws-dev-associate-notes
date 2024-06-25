# Notes from <Video name word to word>:
- pointers
- Summary of the video. What did you learn?

# Noted from <video name>
- pointers
- Summary of the video. What did you learn?

# 121 Network Interfaces, Instance IPs and DNS 
- An instance can have multiple network interface. These interfaces can be in different subnets. The only requirement is that these should be in the same AZs as the EC2. 
- For an ec2 there is no DNS, no IP or no SG. These attributes are associated with Network interface.
- Network interface can have MacAddress (always), IPv4 Private IP address (always), IPv4 Public IP address (0 or 1), check ss.
- Security Groups are applied to network interface. <- There can be two interfaces attached to an EC2 with different subnet groups.
- Source Destination Check takes place in Network Interface. <- Previous lecture about NAT <- This setting need to be disabled to use EC2 as a NAT Gateway.
- You can detach secondary interfaces and move them to other interfaces. And also an ec2 can have multiple secondary network interface.
- When you stop an instance its public IPv4 is detached.
- If your EC2 has a domain name associated with it, it will resolve to private IP if the request is made within a VPC and to a public IP through IGW if request is made outside the VPC. # Exam important <- Security Feature. 
- When you allocate an elastic IP to an EC2 instance the allocated public IP will be removed an replaced. There is no possible way to get it back. <- Exam important.
- ENI (Elastic Network Interface commonly known as elastic IP) comes with MAC Addresses similar to network interface. -> Some softwares license using the mac address of device as it is static so you can use this attribute of elastic IP to have a MAC address of an ENI registered for some license and detach attach it to different EC2s as required. The ENI will be secondary though.   # Exam Important
- So Security Groups are associated with IP addresses indirectly rather then any other thing per say VPCs or whatever.
- Operating System never sees the Public IPv4 address.
- Normal Public IP is dynamic changes when instance stops or starts.


# 122 Manual Install of Wordpress on EC2 - PART1 -> Demo
- Automation's advantage: Saving time and effort is still secondary, the errors you can reduce and consistency of different environments are a big factor as well.
- Check out associated wordpress script.



# 123 Manual Install of Wordpress on EC2 - PART2 -> Demo
- Checkout the wordpress script.


# 124 Amazon Machine Images (AMI) 
- AMIs have three permission options: you can set them to be publicly accessible, private to your account or grant specific account permission to access them.
- You know how EBS is an independent component associated with EC2, and you also know about creating snapshot of an EBS and storing it in S3 bucket with versioning enabled.
- You can create image of a running EC2 instance which has been already provisioned and configured (let's say http setup or something), now this is also called an AMI and you will own it and can give any of the above available permissions.
- When you create an image of an ec2, it gets stored as an AMI and if there is any EBS volume attached a snapshot will be created and referred in the image. Since EBS snapshot are versioned, so newer versions won't affect the image.
- Now when you create an instance from a custom AMI, the AMI will refer EBS snapshots and allocate them to the created instance as well.
- If you create an AMI you will also be charged for the snapshot stored in S3.
- AMI is regional (I think this is a limitation because of that snapshot association, although you can replicate them across region.)
- AMI Baking is a common term used in the cloud community. Configuring an EC2 and creating an AMI for reuse.
- AMI is immutable.
- AMI can be copied between regions.
- The default access permission of an AMI is your account.
- Checkout SS for this lesson.


# 125 Creating an Animals4life AMI - PART1 -> Demo



# 126 Creating an Animals4life AMI - PART2  -> Demo
- To get a consistent environment you always create image after stopping the instance.
- You will see a snapshot being created once you start the process of creating an AMI.


# 127 Copying & Sharing an AMI 
- Sometimes you might not be able to see some service you created because you created it in a different region from the one you are currently working on. To fix it you can simply change the region or follow a set convention. Like all the instances should be in Canada Central and all the resources should be in Canada Central or something like that. That's why in Cantril's course he stresses to switch us-east-1 all the time. Just rephrase, regions have availability zones.
- Don't fall for questions which will ask you to use an AMI for several regions.


# 128 EC2 Purchase Options - PART1 
- Options: On Demand, Spot
- On Demand are designed to be used for short term things. They are used when case involves provisioning an instance, using it for short period of time followed by deleting it.
- Spot instances are provisioned in the EC2 host with unused free space.
- I liked the idea of spot instances. So the price of spot instances are floating, you setup a maximum price and there will be a price set by amazon. If the price of AWS is less than the max price you set, you are fine and you will still be only paying the price set by amazon. But let's say if the price rise because of increase in demand and if the AWS price is more than your max set price, your instances will be terminated.
- Spot instances can reduce cost significantly but are not reliable. You use these for stateless processing. If something has a bursty capacity need and on demand is expensive and also interrupts can be tolerated as the work can be redone, then spot instances will be a good fit. State agnostic batch processing is also a good use case for spot instances.


# 129 EC2 Purchase Options - PART2 
- Options: Reserved (Referred to as Standard Reserved because there are other types), Dedicated Host, Dedicated Instance
- Reserved instance can be a zonal reserve or a regional reserve.
- Often a reservation will be made in an AZ or a region but resources won't be utilized -> This leads to wastage because you pay regardless of whether you use some instances or not.
- If you go for reserved purchase option then you have two options as well: upfront payment, partial upfront and no upfront payment (agreeing with AWS T&C). The discount offered is based on this, with full upfront getting the most and no upfront the least.
- Dedicated hosts are used mostly in a very specific use case: "Licensing based on sockets/core." I don't know much about it but conceptually it is similar to network interface's mac address being used for licensing as it is unique.
- Instances are not charged for if you are using dedicated host.
- Dedicated Instance are mostly used when there is an industry requirement because of which you cannot share the underlying physical infrastructure with any other ec2 than your own.
- It is cheaper than Dedicated Host. But how is AWS benefitting if in both case you are owning the hardware? 
- Read this to understand: https://stackoverflow.com/questions/64309679/aws-dedicated-host-vs-dedicated-instance-why-the-first-is-more-expensive-than 
- Q: I'm studying for my Associate Architect exam at AWS, and I can't find an explanation for this question. Why Dedicated Host are more expensive than Dedicated Instances? I understand the main differences between the two, it is just that in my brain it doesn't make sense.
This is my perspective: if you ask for a dedicated host, you control the entire hardware. CPUs, RAM, Sockets, etc. You can use your own license (BYOL). But if you ask for a Dedicated Instance, the hardware it is still just for you. Your AWS account is still the only one using that hardware. You have less control over it, but even though you are locking down a single piece of hardware just for your purposes.
So, why dedicated hosts are more expensive than dedicated instances, if after all, in either case, you "own" the hardware? Again, in either case, AWS won't be able to use that hardware for something else.
- A: Dedicated Instance does not work like this. Your instance runs on some dedicated hardware. Its not lockdown to you. If you stop/start instance, you can get some other hardware somewhere else. Basically, the hardware is "yours" (you are not sharing it with others) for the time your instance is running. You stop/start it, you may get different physical machine later on (maybe older, maybe newer, maybe its specs will be a bit different), and so on. So your instance is moved around on different physical servers - whichever is not occupied by others at the time.
With Dedicated Host the physical server is basically yours. It does not change, it's always the same physical machine for as long as you are paying.


# 130 Reserved Instances - the rest 
- Types: Scheduled
- Checkout Scheduled Reserved use cases like: weekly analysis related sales data that runs every friday for 24 hours. 
- You get a slightly cheaper price than on demand ec2 in case of reserved instances.
- Minimum requirement for scheduled reserved: 1200 hours per year & 1 year period.

# 131 Instance Status Checks & Auto Recovery 
- Check the instance status screenshots.
- You can setup EC2 recovery using cloud9. -> Alarm Action Setup.