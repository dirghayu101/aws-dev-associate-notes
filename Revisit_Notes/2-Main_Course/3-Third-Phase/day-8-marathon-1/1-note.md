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


# 122 Manual Install of Wordpress on EC2 - PART1 



# 123 Manual Install of Wordpress on EC2 - PART2 



# 124 Amazon Machine Images (AMI) 



# 125 Creating an Animals4life AMI - PART1 



# 126 Creating an Animals4life AMI - PART2 



# 127 Copying & Sharing an AMI 



# 128 EC2 Purchase Options - PART1 



# 129 EC2 Purchase Options - PART2 



# 130 Reserved Instances - the rest 



# 131 Instance Status Checks & Auto Recovery 



# 132 Shutdown, Terminate & Termination Protection 



# 133 Horizontal & Vertical Scaling 



# 134 Instance Metadata 



# 135 Section 



# 136 CloudWatch Architecture - PART1 



# 137 CloudWatch Architecture - PART2 



# 138 CloudWatch Logs Architecture 



# 139 AWS X-Ray 



# 140 Lambda & AWS X-ray 



# 141 VPC Flow logs 



# 142 Section Quiz 

