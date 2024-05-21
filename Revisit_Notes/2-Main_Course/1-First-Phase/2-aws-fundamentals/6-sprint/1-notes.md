# Quick Pointers:
- AWS is generally responsible for security of the cloud, whereas consumer is responsible for security in the cloud.


# High Availability: 
- The aim is to ensure an agreed level of operational performance, usually uptime, for a higher than a normal period. Doesn't take user experience into consideration. Just focusses on keeping system on the wire.
- The goal of high availability is to meet the downtime goals. Let's say the expected uptime is 99.999%, that means system can have a maximum downtime of no more than 5.26 minutes in a year.
- Higher availability can still have user disruption.

# Fault Tolerance:  
- Fault tolerance is about finding a failsafe in case of a failure. A fault tolerant system is highly available but cannot tolerate any disruption.
- It is the property that enables a system to continue operating properly in the event of the failure of some (one ore more faults within) of its components.
- Fault tolerant is harder to design, hard to implement and is expensive.
- People often put fault tolerance as a requirement when what they really need is high availability. A banking software or some healthcare related application needs to be fault tolerant, whereas an e-commerce can do with high availability.

# Disaster Recovery:
- A set of policies, tools and procedures to enable the recovery or continuation of vital technology infrastructure and systems following a natural or human-induced disaster.

# Route 53:
- Route 53 is a global service and is global resilient (Can tolerate failure of 1 or more regions).
- Zone file: The database in an Internet domain name system (DNS) server that contains the translations between domain names and their numeric IP addresses. A zone file is made up of "resource records" (RRs), which are lines of text that define the forward lookup of domains to IP, the reverse lookup of IP to domains, as well as the names of DNS and mail servers. Records for aliases and other information are also provided in zone files. Zone files have a .DB file extension.
- Zone file pertains to a specific domain name. Route 53 will create it for you if the domain name is available.
- Zone files are stored in the name server of Route 53, and then these name server records are stored in the top level domain (.com, .in, .org, etc).
- Once you point the name server records to your name server for a domain name, your name server becomes authoritative for that domain name.
- Zone files are called hosted zones in route 53 terminology. Route 53 is DNS as a service.
- Records are referred to as record-set in route 53.


# DNS records:
- Root domain: This refers to the entire address that identifies a specific website on the internet. In simpler terms, it's the complete website address minus the "http://" or "https://" part. For example, in the web address "www.google.com", "google.com" is the root domain. It encompasses both the specific name (google) and the TLD (.com).
- Top-level domain (TLD): This is the suffix at the very end of a domain name, following the dot. It indicates the category or purpose associated with the website. Common TLDs include .com (commercial), .org (organization), .net (network), and .edu (educational). So, in the example "google.com", ".com" is the TLD.
- Nameserver - These are the databases that actually respond to a DNS query. Users are redirected to these name-servers by top-level domain.
- A and AAAA Record: These map hostname to IP address. A record is IPv4 whereas AAAA record is IPv6.
- CName Record: Maps host to host. Let's say you have ftp, mail and www server installed on the same server. You can map these all to the same IP by creating CName records.
- MX Record: Very important for the working of email in the internet. MX is used to find the mail server (SMTP) for a domain.
- TXT Records: Can be used to add random text in the DNS record which can be used for some verification.
- TTL: When you are jumping the hop to get the DNS response, the response value are saved in DNS resolver or other storage cache. The nameserver response is considered authoritative (Single source of truth) but other places where the IP mapping gets stored is non-authoritative records. These records expire based on the TTL value which is provided in seconds.
- Sometimes TTL values are not changed and non-authoritative responses are used for making TCP requests, this cause failure as the DNS is misconfigured and doesn't have the most recent value.