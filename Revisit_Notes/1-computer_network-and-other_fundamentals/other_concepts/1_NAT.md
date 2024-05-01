# Quick Pointers:
- IPv6 doesn't need NAT as there are so many IPs available that there isn't any need for private IPs.
- Refer: ../ref_SS/1_*_NAT.png
- Network address translation (NAT) is a method of mapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device.
- Reference for how NAT works: https://comptia.org/content/guides/what-is-network-address-translation
- The above point is a small article you can read about NAT. It is concise and will give you a clear picture.


# Points from the above article:
- Let’s say that there is a laptop connected to a home network using NAT. That network eventually connects to a router that addresses the internet. Suppose that someone uses that laptop to search for directions to their favorite restaurant. The laptop is using NAT. So, it sends this request in an IP packet to the router, which passes that request along to the internet and the search service you’re using. But before your request leaves your home network, the router first changes the internal IP address from a private local IP address to a public IP address. Your router effectively translates the private address you’re using to one that can be used on the internet, and then back again. Now you know that your humble little cable modem or DSL router has a little, automated translator working inside of it.

If the packet keeps a private address, the receiving server won’t know where to send the information back to. This is because a private IP address cannot be routed onto the internet. If your router were to try doing this, all internet routers are programmed to automatically drop private IP addresses. The nice thing is, though, that all routers sold today for home offices and small offices can readily translate back and forth between private IP address and publicly-routed IP addresses.

- Static NAT: When the local address is converted to a public one, this NAT chooses the same one. This means there will be a consistent public IP address associated with that router or NAT device. Refer: ../ref_SS/1_Static_NAT.png

- Dynamic NAT: Instead of choosing the same IP address every time, this NAT goes through a pool of public IP addresses. This results in the router or NAT device getting a different address each time the router translates the local address to a public address. Checkout: ../ref_SS/1_Dynamic_NAT.png

- PAT: PAT stands for port address translation. It’s a type of dynamic NAT, but it bands several local IP addresses to a singular public one. Organizations that want all their employees’ activity to use a singular IP address use a PAT, often under the supervision of a network administrator. In this port should be unique for communication. Refer: ../ref_SS/1_PAT_NAT.png


# AWS Important points:
- PAT gateway concept is used in NAT Gateway of AWS.
- Static NAT Gateway concept is used in Internet Gateway of AWS.
- What Is Port Address Translation (PAT)? | Definition from TechTarget
- PAT also helps to provide better security on the local network by hi`ding the internal IP addresses from public view.


