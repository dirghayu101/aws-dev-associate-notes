# Public vs Private Services in AWS:
- Good reference for this: https://medium.com/@wasimiqbal_39670/why-it-matters-to-understand-aws-public-zone-aws-private-zone-b2f2ef8e32a
- A common misunderstanding around this classification is that a public service is a service which could be accessed from the public internet and a private service which couldn’t be accessed from the internet.
- A service could be classified as Public or Private based on the way it is accessed. It is the networking setup which classify a service as Public or Private.
- AWS Public Services are accessed using Public Endpoints and operate from the AWS Public Zone. In other words, an AWS Public Service can be accessed from anywhere having the internet connection considering that identity accessing it has all required permissions in place. S3 is an example of AWS Public Service as it is accessed using public endpoints and doesn’t require a VPC to run.
- On the other hand, a Private AWS Service runs from AWS Private Zone commonly called Virtual Private Cloud(VPC).VPCs are purely isolated and there is no communication between them unless we allow that communication and at the same time nothing from internet can approach the AWS Private Zone unless we do some extra configuration.AWS Private Services such as EC2 runs within a VPC and can be accessed from the services which runs within that VPC or could also be accessed by the services which are connected to that VPC. 
- Although the way both type of services is accessed is completely different but one basic common requirement is that access should be in place i.e., the identity accessing the service should have permission to do so.No matter the service being accessed is public or private, the identity accessing the service should have permission to access that service.


# AWS Region:
- A region has geographic separation. Isolated Fault Domain. If something happens to that region, it stays there, doesn't spread.
- When you store your data or processing in a certain region, it will be impacted by rules governing that region. This provides geopolitical separation.
- You can use AWS regions for location control
- In your AWS console, you can change region based on the service you are using. Some services like IAM are global and don't require region selection.
- A region has multiple availability zone.

# AWS Edge Location: 
- These are local distribution points, much smaller than region.
- Includes edge computing zones and CDNs for content delivery.

# AWS Availability Zone:
- The most important thing that you should know about an availability zone is that it is a logical construct. You don't know how it is implemented on a physical level.
- It is a scope encapsulated inside a region. People often think of it as a data center, but that's not the case as the physical implementation of an availability zone hasn't been specified.
- Often there are scenarios when few availability zones within a region fails not all the region at the same time.


# Services categorization based on resilience:
- Globally resilient: These services databases are replicated globally. All the regions in the entire world should fail for these services to fail. Includes IAM and route 53.
- Region resilient: These services are replicated across availability zones in a region. All the availability zones in a region should fail simultaneously for them to fail.
- AZ resilient: Only exist in one availability zone in a region. If that AZ fails, these services will stop.

# VPC Basics:
- A virtual network inside AWS.
- VPC is created within a region and within an account.
- VPCs operate from multiple availability zone within a region.
- A vpc when created will be private and isolated. You can configure it. An exception is Default VPC.
- Two types of VPC: Default and Custom.
- VPC is resilient because it can have multiple subnets which you can deploy in different availability zone within that region. Your infrastructure can still work if any of those availability zones fail.
- Some services work based on the assumption that default VPC is working, so not deleting it is the convention.
- Default VPCs are configured to provide any services that run in any of their subnets with a public ipv4 address.
- You can create default VPC if you delete it by going to action tab in the VPC panel of AWS.
- Always use custom VPC for any project. That's the convention and best practice.