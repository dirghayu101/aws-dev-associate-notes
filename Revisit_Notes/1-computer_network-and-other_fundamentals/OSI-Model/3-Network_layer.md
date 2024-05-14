# Quick notes about Layer 3:
0. Layer 3, the data is called Packet.
1. There are no standardized protocols for layer 2 communication. Ethernet frames communicate differently and the structure of the frame is also different which depends on the layer 2 device encapsulating.
2. When we are talking about network layer, we are thinking bout inter-connected networks (abbreviated to internet). If we just talk about layer 2 and layer 1, we are talking about a local area network.
3. Layer 3 protocol, can span across/encapsulate multiple layer 2 protocol. 
4. Router is a layer 3 device. Router remove frame encapsulation and add new frame encapsulation at every hop. Hop is an internet node you will go through while moving towards your destination.
5. Layer 3 is all about IP (internet protocol). Layer 3 came in the picture to facilitate inter-connection of LAN. 
6. IP has two versions currently (v4 and v6). IPv4 and IPv6.
7. Header of IPv4 has multiple components. Important header component include TTL (time to live), protocol (layer 4's like ICMP, TCP or UDP), source and destination IP, etc.
8. TTL is important. It tells for how long a packet will be considered valid (more like alive). Otherwise a packet which would not be able to reach its destination will go on to jump hops indefinitely infinitely.
9. In IPv6, instead of TTL we have hop limit. Self explanatory.

# Quick Note about IPv4:
- IP Octet are described from left to right. So, the first octet will be first 8 bit. Or in this IP address: 133.33.3.7, it will be 133.
- An IPv4 has two parts network and host part. You will start counting the network part from the first octet.
- Subnet mask denotation: /16 or 255.255.0.0 are the same. If you do "OR operation" of 255.255.0.0 with the IP address, you will get just the host part.

# What exactly is the use of subnet mask?
- Subnet Mask allows a host to determine if an IP address it needs to communicate with is local or remote, based on this it determines if it has to use gateway (0.0.0.0).

# About route table:
- Every router has a route table. It has two columns, the first one is destination and the second one is target (also called next hop).
- If the IP address doesn't meet any of the destination field in the route table, it is sent to the default route which is 0.0.0.0 in most cases.
- Router compares the destination IP of a packet and checks the route table for the matching destination. Packet is forwarded to the next hop/target accordingly or to the default target.
- Router can communicate with other router and they populate their route table in this way, and it uses Border Gateway Protocol for this purpose.
- Every time a packet is transiting to a destination, it is getting de-encapsulated and encapsulated as a frame. 
- So every time when a packet is transiting, you have to resolve the temporary IP to a MAC address for this encapsulation process.
- When a packet reaches the destination IP router, ARP is used to convert that IP to the MAC address.

Border Gateway Protocol (BGP) is the postal service of the Internet. When someone drops a letter into a mailbox, the Postal Service processes that piece of mail and chooses a fast, efficient route to deliver that letter to its recipient. Similarly, when someone submits data via the Internet, BGP is responsible for looking at all of the available paths that data could travel and picking the best route, which usually means hopping between autonomous systems.

The Address Resolution Protocol (ARP) is a communication protocol used for discovering the link layer address, such as a MAC address, associated with a given internet layer address, typically an IPv4 address.

# Refer: ./ref_SS/2-Network_layer.png

# Protocols used by Layer 3:
- Border Gateway Protocol: Ref: https://en.wikipedia.org/wiki/Border_Gateway_Protocol
- Address Resolution Protocol
