# Notes from <Video name word to word>:
- pointers
- Summary of the video. What did you learn?

# Noted from <video name>
- pointers
- Summary of the video. What did you learn?

# VPC Sizing and Structure - PART1 (11:48 )
- You have to consider VPC CIDR very carefully while designing a VPC.
- Checkout factors you need to consider while declaring a VPC.
- Case study: Animals4Life -> Checkout different animals for life case study file which is a sub-directory under designing VPC.
- VPC CIDR minimum is /28 (16 IPs) and CIDR maximum is /16 (65,536 IPs).
- Avoid commonly used IP CIDR ranges for avoiding any future issues.
- Reserve 2+ networks per region being used per account.

# VPC Sizing and Structure - PART2 (11:16 )
- VPC size types: micro, small, medium large and extra large. Checkout slides.
- How many availability zone does the VPC uses? Take 3 by default as it works for almost every availability zone and reserve one for future.
- In the architecture of animals4life, one entire component like HTTP request processing backend, has been placed in its own subnet. Similarly, Application (Frontend) and Database is in it own subnet.
- Spare is the additional subnet, created across 4 availability zones, which is not being used.
- While designing VPC, you consider the highest possible expansion possibilities.

# Custom VPCs - PART1 - THEORY (10:10 )
- VPC is an isolated blast radius. Nothing goes in and nothing goes out of VPC without explicit configuration.
- Default and Dedicated tenancy are the options you will come across while declaring a VPC. Don't use dedicated unless you have to (there is a requirement).
- VPC can be simple or multi-tier.
- Has an optional secondary IPv4 block.
- IPv6 is gradually  becoming the default IPs, they don't come with public or private distinctions.
- If you use IPv6, you won't be choosing it in AWS, you have to work with the ones allocated to you by AWS.
- To enable DNS in  your VPC, checkout the settings: enableDnsHostnames and enableDnsSupport.

# Custom VPCs - PART2 - DEMO  (5:40 )
- He enabled the option to allocated IPv6 to VPC. Since IPv6 doesn't have public and private distinction enabling this option can be advantageous while making some component of a VPC public.
- Edit VPC settings for DNS settings.
- You use VPC subnets for a multi-tier structure. 

# VPC Subnets (10:42 )
- In AWS diagram, conventionally, blue means private subnet and green means public subnets.
- A subnet is a subnetwork of a VPC. 
- Subnets are availability zone resilient. To make a highly available system, we put same microservices in multiple availability zone.
- A subnet is created and associated with one availability zone and you cannot have 1 subnet in more than 1 availability zone.
- A subnet that is using a particular CIDR range in a VPC, will block that CIDR range.
- Optionally you can allocate a IPv6 CIDR to a subnet. You need to enable this in the VPC to achieve this.
- Subnet by default can communicate with each other in the VPC. The perimeter/isolation is for something outside the VPC.
- Any subnet has 5 IP addresses reserved. These are:
- Consider this CIDR: 10.16.16.0/20, Ip ranges (10.16.16.0 to 10.16.31.255)
10.16 -> constant (First two numbers come under most significant 20 bits)
third number: 00010000 (16) (First 4 bits are fixed.)
12 digits can change: 4 of third number and eight of last (fourth) number
minimum third digit: 00010000 -> (16)
maximum third digit: 00011111 -> (31)
- Reserved 5 IPs:
    Network address: 10.16.16.0
    Network address + 1 -> 10.16.16.1 for VPC Router.
    Network address + 2 -> 10.16.16.2 for Reserved DNS.
    Network address + 3 -> 10.16.16.3 for Reserved future use.
    Broadcast address -> 10.16.31.255 for Broadcast.
- For every there is DHCP configured which gets inherited to subnet and their components. You can edit this.
- Auto assign public IPv4 and IPv6 configuration are set on subnet level. These get inherited to individual microservices in a VPC.

# Implement multi-tier VPC subnets  (15:03 ) -> Demo
- Checkout IPv6 Configuration specifically.
- You can configure Subnet setting which gets inherited to the services in subnet. Check those out, specifically auto-assign ipv4 and ipv6.

# VPC Routing, Internet Gateway & Bastion Hosts (17:35 )
- Every VPC has a VPC Router. This router is highly available and abstract it away.  
- For every subnet, "subnet-network-ip + 1" points to the VPC router.
- If you don't configure anything, by default VPC router just routes traffic between VPCs.
- VPC routers are controlled by route table. Each subnet have at least one associated route table. A VPC has a main route table and subnets created get associated to it by default.
- A route can be anything: 0.0.0.0/0 is also a route, so is 10.16.0.0/16. In case of match between two routes, the more specific routes take priority. 0.0.0.0/0 will be the least priority one, where the traffic will route to if it doesn't match any other address.
- Internet Gateway is region resilient. (available across availability zone).
- Let's say you allocate a public IP to an EC2 instance, then on thing important that you have to know is that at no point, your OS of ec2 will be aware that it has a public IP. The record will be stored in the gateway and all the packet that addresses something in the public zone will have their private IP record modified to the public IP they are mapped to. Checkout screenshots for reference. Exam questions will trick you by asking you to allocate a public IP directly to an EC2 OS, which is not how it takes place. 
- Bastion host are also known as jump boxes.
- In private VPC, the only entry points are bastion host.
- A subnet can be associated with only one route table at a time.

# Configuring A4L public subnets and Jumpbox - PART1  (13:45 )
- The naming convention he used is interesting. Each component has its own route table.
- For pointing to all IPv4: 0.0.0.0/0, for pointing to all IPv6 ::/0

# Configuring A4L public subnets and Jumpbox - PART2  (11:35 )
- Not much.

# Stateful vs Stateless Firewalls (14:04 )
- You know this, but still check the screenshots related.
- Whenever you are working with firewall think about perspectives. You define inbound and outbound rule while working which depends on the source and destination.
- When you are setting up rules for a stateless firewall, the value of ephemeral ports can be anything random. So, you setup outbound rules with allowing packets to be sent to the range of ephemeral ports. This is a security issue.

# Network Access Control Lists (NACLs) (12:38 )
- Every subnet has a network access control list. NACL doesn't apply if the communication is happening within a subnet.
- NACL is stateless.
- Rules in NACL are processed in order starting from the lowest rule number. 
- If while matching with NACL, a match occurs, the processing stops.
- 1024 - 65535 is the ephemeral port range.
- Default NACL has no effect as it allows all inbound and outbound traffic.
- In case if you create a Custom NACL, it will deny all inbound and outbound by default.
- NACL gives you a granular control compared to SG, that's why they are used.
- NACLs are used in combination with SG, you would use SG to allow traffic whereas NACL to deny it.
- Each subnet can only have one ACL whereas a NACL can have multiple subnets associated.

# Security Groups (SG) (11:48 )
- The biggest flaws of security group is that you cannot use them to explicitly deny traffic. More specifically, you cannot block specific bad actors using a security group.
- Security group accept IP/CIDR as well as logical resources in the parameter definition. You can use this functionality in a variety of ways. Mehdi's lab DBMS connection using SG chaining is one of the example. You can refer your own security group and others security group.
- Security group are associated with ENI. An elastic network interface is a logical networking component in a VPC that represents a virtual network card.
- Advantages of security group parameters being a logical unit: It scales well as you won't be adding and hard values. Say for example subnet range or specific ec2 IPs. Consider the example. 
- Logical addressing allow the system to modify IP automatically which reduces a lot of admin overhead.

# Network Address Translation (NAT) & NAT Gateway - PART1 (13:43 )"​​
- Gives public access to a private resource.
- NAT in conceptual level can be explained as a set of processes for remapping source and destination IP.
- Facilitates IP Masquerading. IP masquerading is hiding CIDR blocks behind one IP.
- You can have a self managed NAT by using an EC2 instance with public IP.
-  NAT use elastic IP, which is a static IP.
- NAT is AZ resilient, to make it region resilient, you have to deploy one NAT per AZ.

# Network Address Translation (NAT) & NAT Gateway - PART2 (11:08 )"
- You provision NAT gateway in an availability zone, not in a region.
- By default an ec2 instance will drop any traffic that is on its network card which doesn't match its own source and destination field. This characteristic won't allow you to use NAT on ec2 instance by default.
- To use NAT instance instead of gateway, you need to disable a feature called source and destination check. Remember this feature.
- NAT gateway: low maintenance and high performance.
- For maximum availability, you will use one NAT gateway in every availability zone you use.
- NAT instance: very flexible. You can also have security groups and NACL directly configured on that ec2, which will give you more flexible options.
- A NAT gateway unlike NAT instance cannot be used for port forwarding or as a bastion host.
- Unlike NAT instances, where you can have ACLs and SGs, a NAT gateway cannot have these and you can only have knuckles in NAT.
- You don't use NAT with IPv6 and they don't function with it.


# Implementing private internet access using NAT Gateways (19:25 )" -> Demo



# "Section Quiz - VPC Basics"


