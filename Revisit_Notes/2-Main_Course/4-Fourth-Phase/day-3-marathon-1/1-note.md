# Notes from <Video name word to word>:
- pointers
- Summary of the video. What did you learn?

# Noted from <video name>


# 173-> CloudFormation Conditions
- Checkout and analyze the example screenshots attached carefully.
- The optional Conditions section contains statements that define the circumstances under which entities are created or configured. 
- You might use conditions when you want to reuse a template that can create resources in different contexts, such as a test environment versus a production environment. 
- In your template, you can add an EnvironmentType input parameter, which accepts either prod or test as inputs. 
- Conditions are evaluated based on predefined pseudo parameters or input parameter values that you specify when you create or update a stack. 
- Within each condition, you can reference another condition, a parameter value, or a mapping. 
- After you define all your conditions, you can associate them with resources and resource properties in the Resources and Outputs sections of a template


# CloudFormation DependsOn
- CloudFormation creates a dependency tree before creating resources.
- CloudFormation usually defines dependency by default but it is considered a good practice to explicitly state dependencies just in case to avoid any errors.
- When you reference a resource in attribute of another resource (say internet gateway for vpc), you create an implicit dependency. Cloudformation use this to create dependency tree.
- An elastic IP requires an IGW attached to a VPC in order to work but there is no dependency in the template: implicit (e.g. !Ref) or explicit. <- This might work or not, based on the random oder in which cloudformation choose to initialize resources. You can resolve this using an explicit depends on relationship declaration in the elastic IP declaration. 


# CloudFormation Wait Conditions & cfn-signal
- CloudFormation really doesn't know when the resources lets say ec2 or any other gets completely provisioned and ready to work. <- This might be because of a security reason.
- But this creates problem as the template also sometimes includes what needs to be done after a resource gets provisioned (say like user data in ec2).
- You use creation policy to counter this. 
- CreationPolicy, WaitConditions and cfn-signal can all be used together to prevent the status if a resource from reaching create complete until AWS CloudFormation receives a specified number of success signals or the timeout period is exceeded.The cfn-signal helper script signals AWS CloudFormation to indicate whether Amazon EC2 instances have been successfully created or updated.
- It is used in a very different way, above example is not at all how they work, it is just to understand the concept. Check the screenshot folder for a precise example.
- You use it by installing a utility in your ec2 which will send signal to cloudformation, you can configure when to send that signal.
- You can also add the listening logic in your cloudformation template, this logic will listen for those signals.
- Wait condition is used to pause the template formation process. Let's say you can split the creation process into two parts and do something in between. My limited practical exposure can't come up with a scenario where there will be a use of this, but it can be a really powerful feature.


# CloudFormation Nested Stacks
- Stacks are designed to be isolated. Referring one VPC created in one stack in other stack is tedious. It is possible but not a good practice and is discouraged.
- This is because a single stack is designed to have a lifecycle, it creates and dies together.
- Let's say you are writing a cloudformation stack and you have some parameters in that stack, the first best practice here will be to supply some default values to those parameters. Having as many parameters as facilitates portability is a good practice as well.
- Now, let's say you are referring the above stack in a new stack that you are writing, then passing values to all attributes, even those with default values is also considered a good practice. This gives more information about what's happening. So having default values and overriding those default values both are considered good practices.
- You can have nested stacks, and you can refer the outputs from the nested stacks. Checkout screenshot.
- Nested stacks allow for a hierarchy of related templates to be combined to form a single product
- A root stack can contain and create nested stacks .. each of which can be passed parameters and provide back outputs.
- Nested stacks should be used when the resources being provisioned share a lifecycle and are related.
- Nested stacks are used to create templates and modularize infrastructure deployment.


# CloudFormation Cross-Stack References
- Cross stack reference is tedious (static typing is the only way), cross stack reference is the way to solve this issue.
- You use export and import <- Syntactical components of cross stack reference.
- Checkout the screenshot directory to understand the flow.
- Cross stack allow you to use resources in two different stack, whereas nested stack gives you a template for setup or to create modular components. They are two different thing, and you should understand the difference. 
- Cross stack references allow one stack to reference another
- Outputs in one stack reference logical resources or attributes in that stack
- They can be exported, and then using the !ImportValue intrinsic function, referenced from another stack.


# CloudFormation Stack Sets
- StackSets are a feature of CloudFormation allowing infrastructure to be deployed and managed across multiple regions and multiple accounts from a single location.
- Additionally it adds a dynamic architecture - allowing automatic operations based on accounts being added or removed from the scope of a StackSet.


# CloudFormation Deletion Policy
- You can set deletion policy with three possible options: default (deletion), retain (not delete) or snapshot (supported only in some, check SS)
- With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted. 
- You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy attribute, AWS CloudFormation deletes the resource by default.


# CloudFormation Stack Roles
- Helps in role permission. Checkout screenshots.
- A role will be created which has the permission to create, update and delete AWS infrastructure/resources and this role can only be assumed by cloud formation. The person writing the cloud formation template will only have permission to pass this role, the role cannot be assumed by the infrastructure engineer in any way and the infrastructure engineer in this scenario can only pass this role.
- Stack roles allow an IAM role to be passed into the stack via PassRole
- A stack uses this role, rather than the identity interacting with the stack to create, update and delete AWS resources.
- It allows role separation and is a powerful security feature.


# CloudFormation Init
- Checkout screenshot and see the flow.
- Demo will make more sense.
- CloudFormationInit and cfn-init are tools which allow a desired state configuration management system to be implemented within CloudFormation
- Use the AWS::CloudFormation::Init type to include metadata on an Amazon EC2 instance for the cfn-init helper script. If your template calls the cfn-init script, the script looks for resource metadata rooted in the AWS::CloudFormation::Init metadata key. cfn-init supports all metadata types for Linux systems & It supports some metadata types for Windows

# CloudFormation cfn-hup
- Demo will make more sense.
- Checkout screenshots. 

# wait conditions, cfnsignal, cfninit and cfnhup-PART1 -> Demo
- This lesson has attached resources in resource section.
- Analyze 1_userdata.yaml -> It has some problems.
- The stack will show you it has completed deployment, when it has not. You have a sleep process running, which disrupts the flow. This misinformation can cause problems, let's say if you would have had something like creating snapshot after creating an ec2, it might have not been created but you would create a snapshot.
- Another problem is that it doesn't update the user data parameter value when you update stack. This is because user data script runs only once when the ec2 bootstraps.
- Analyze 2_userdata_with_signal.yaml. It uses creation policy. It waits for the signal from ec2 for 15 minutes. And, in the user data field you specify ec2 to send signal when the setup is complete.
- These steps in conjunction synchronize the actual ec2 deployment. But, this doesn't solve the update problem since the user data field cannot be changed after bootstrapping the ec2.

# wait conditions, cfnsignal, cfninit and cfnhup-PART2 -> Demo
- This lesson has attached resources in resource section.
- Analyze 3_cfinit_with_signal.yaml.
- As you can see, you are defining the final state of configuration and it is cloudformation's duty to get their. You don't need to care how it gets there. In other case you were writing a script, here you don't.
- sudo cat /var/log/cloud-init-output.log       # Your supplied user data logs.
- sudo cat /var/log/cfn-init-cmd.log            # What cfn-init commands were used to reach the desired state.
- sudo cat /var/log/cfn-init.log                # Granular look of above commands.
- sudo cat /var/log/cfn-hup.log                 # cfn-hup use case logs.
- The problem with init is that it won't change the deployed stack's configuration upon updating.
- Analyze 4_cfninit_with_signal_and_cfnhup.yaml
- I didn't understand it completely, but here is what's happening. A listener will be keeping a check on parameters in the stack, and if those parameters change because of stack updates, certain code will run, which is defined in the yaml file. This can be a really powerful feature.


# CloudFormation ChangeSets -> Has a demo component.
- It is just a tool you can use to see what updates you are making better.
- When you need to update a stack, understanding how your changes will affect running resources before you implement them can help you update stacks with confidence. 
- Change sets allow you to preview how proposed changes to a stack might impact your running resources, for example, whether your changes will delete or replace any critical resources, AWS CloudFormation makes the changes to your stack only when you decide to execute the change set, allowing you to decide whether to proceed with your proposed changes or explore other changes by creating another change set.


# CloudFormation Custom Resources
- Custom resources enable you to write custom provisioning logic in templates that AWS CloudFormation runs anytime you create, update (if you changed the custom resource), or delete stacks
- Checkout Screenshots.


# CloudFormation Custom Resources-PART1 -> Demo
- Checkout the associated resource directory yaml files.
- Pretty straightforward. Cloudformation cannot delete an S3 bucket with any object inside it.
- 


# CloudFormation Custom Resources-PART2 -> Demo
- Checkout the associated resource directory yaml files.
- Checkout customresource.yaml
- This is the custom resource definition:
  copyanimalpics:
    Type: "Custom::S3Objects"
    Properties:
      ServiceToken: !GetAtt CopyS3ObjectsFunction.Arn
      SourceBucket: "cl-randomstuffforlessons"
      SourcePrefix: "customresource"
      Bucket: !Ref animalpics
- Here ServiceToken is referring to the lambda function that has code to execute upon creation or deletion API calls.
- SourceBucket and SourcePrefix are two attributes defined in the lambda function whose values are being supplied in the custom resource.
- This is often asked in exams.



# R53 Public Hosted Zones
- Hosted Zones are Globally resilient. Multiple regional outage won't affect it.
- Hosted Zones are authoritative for a domain. -> Main authority for any cache change.
- Different DNS record types: www, mx, txt, cname
- A Record: An A record or a DNS host record points a hostname or domain to an IPv4 address. For example, it converts hostinger.com to 104.19.184.120. 
- An AAAA record works similarly, but it transforms a hostname to an IPv6 address instead.
- An SRV record connects a hostname to a particular service. Compared to other DNS records, SRV records store more information, including the port number. 
- A TXT record allows domain administrators to include readable notes for both humans and machines. It doesn’t directly impact your DNS settings, but it tells other parties important information about your domain.
- An MX record, which stands for mail exchanger, identifies a mail server used to process incoming emails received by a particular domain name.
- A CNAME record or a “canonical name” record establishes a particular domain as an alias for another domain. When end-users enter one of the alias domain names in their web browsers, they’ll be taken to the same IP address.
- Each time you modify or add a new DNS record, there will be a period where the DNS record is being updated across the world’s servers. This is called the DNS propagation period.
- Walking the DNS tree.
- A public hosted zone is a container that holds information about how you want to route traffic on the internet for a specific domain which is accessible from the public internet

# R53 Private Hosted Zones
- Private hosted zone need to be associated to a VPC to use it. Note the keyword associate here.
- A private hosted zone is a container that holds information about how you want Amazon Route 53 to respond to DNS queries for a domain and its subdomains within one or more VPCs that you create with the Amazon VPC service.


# CNAME vs R53 Alias
- 


# Simple Routing



# R53 Health Checks



# Failover Routing



# Using R53 and Failover Routing-PART1



# Using R53 and Failover Routing-PART2



# Multi Value Routing



# Weighted Routing



# Latency Routing



# Geolocation Routing



# Geoproximity Routing



# R53 Interoperability



# CloudFront - Architecture



# CloudFront (CF) - Behaviours



# CloudFront - TTL and Invalidations



# CloudFront - SSL/TLS



# CloudFront (CF) - Origin Types & Origin Architecture



# AWS Certificate Manager (ACM)



# CloudFront (CF) - Adding a CDN to a static Website-PART1 



# CloudFront (CF) - Adding a CDN to a static Website-PART2 



# CloudFront (CF) - Adding an Alternate CNAME and SSL



# CloudFront - Security - OAI & Custom Origins 



# CloudFront (CF) - Using Origin Access Control (OAC) (new version of OAI)



# CloudFront - Security - Private Distributions



# CloudFront - Geo-Restriction



# CloudFront - Field Level Encryption



# CloudFront - lambda@edge



# Database Refresher & MODELS - PART1



# Database Refresher & MODELS - PART2



# Databases on EC2



# Splitting Wordpress Monolith => APP & DB



# Relational Database Service (RDS) Architecture



# Migrating EC2 DB into RDS - PART1



# Migrating EC2 DB into RDS - PART2



# Relational Database Service (RDS) MultiAZ - Instance and Cluster



# RDS Automatic Backup, RDS Snapshots and Restore



# RDS Read-Replicas



# MultiAZ & Snapshot Restore with RDS - PART1



# MultiAZ & Snapshot Restore with RDS - PART2



# RDS Data Security



# Aurora Architecture



# Aurora Serverless



# Secrets Manager



# EFS Architecture



# Implementing EFS - PART1



# Implementing EFS - PART2



# 241-> Using EFS with Wordpress#


