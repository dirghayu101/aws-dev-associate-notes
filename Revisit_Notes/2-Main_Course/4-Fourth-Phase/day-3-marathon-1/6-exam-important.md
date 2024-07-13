Write important points related to development and exams in general.

- An elastic IP requires an IGW attached to a VPC in order to work but there is no dependency in the template: implicit (e.g. !Ref) or explicit. <- This might work or not, based on the random oder in which cloudformation choose to initialize resources. You can resolve this using an explicit depends on relationship declaration in the elastic IP declaration. <- Checkout cloud formation depends on directory under screenshot resource (number 2).

- Cross stack allow you to use resources in two different stack, whereas nested stack gives you a template for setup or to create modular components. They are two different thing, and you should understand the difference. 

- sudo cat /var/log/cloud-init-output.log       # Your supplied user data logs.
- sudo cat /var/log/cfn-init-cmd.log            # What cfn-init commands were used to reach the desired state.
- sudo cat /var/log/cfn-init.log                # Granular look of above commands.
- sudo cat /var/log/cfn-hup.log                 # cfn-hup use case logs.


# Cloud Formation Custom Resource -> Demo
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


# DNS:
- A Record: An A record or a DNS host record points a hostname or domain to an IPv4 address. For example, it converts hostinger.com to 104.19.184.120. 
- An AAAA record works similarly, but it transforms a hostname to an IPv6 address instead.
- An SRV record connects a hostname to a particular service. Compared to other DNS records, SRV records store more information, including the port number. 
- A TXT record allows domain administrators to include readable notes for both humans and machines. It doesn’t directly impact your DNS settings, but it tells other parties important information about your domain.
- An MX record, which stands for mail exchanger, identifies a mail server used to process incoming emails received by a particular domain name.
- A CNAME record or a “canonical name” record establishes a particular domain as an alias for another domain. When end-users enter one of the alias domain names in their web browsers, they’ll be taken to the same IP address.
- Each time you modify or add a new DNS record, there will be a period where the DNS record is being updated across the world’s servers. This is called the DNS propagation period.