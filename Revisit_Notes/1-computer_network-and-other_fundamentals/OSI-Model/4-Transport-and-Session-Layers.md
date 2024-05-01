# Quick Notes Transport layer:
- Here the data with different headers is called a segment.
- This layer introduces ports mainly. For any bidirectional exchange in the internet the combination of source port + source IP + destination port + destination IP will be unique.
- TCP segments are within/inside the IP packet. Segments don't have anything to do with IP address so the data when it is passing through the layer 4 is called a segment and there is no mention of either IP address or MAC address. These add on as the data moves down towards the layer 1.
- Segments are exchanged between the client and the server port. This is called channel. (Abstract concept).
- TCP connections are bidirectional. Acknowledgement is sent from the client to the server. (Doesn't happen in UDP.)
- Ephemeral port is the port that has been selected in the client machine for facilitating communication with the server.


# What are the important header components introduced in the layer 4 TCP? TCP Specific:
- Source and Destination Port.
- Sequence Number: This is unique for each segment and is incremented as the segments are sent. This can be used for error correction or re-transmission. IP packets are also arranged based on this.
- Acknowledgement: This is used to acknowledge the packages that have been received. In TCP connection a Packet sent has to be acknowledged.
- Window: There is a window field in the TCP header which is used to control the flow speed of segments. Conceptually you can understand it like how many segments shall we receive before an acknowledgment will be sent.
- Checksum 
- Urgent Pointer: Indicates data that is to be delivered as quickly as possible. This pointer specifies the position where urgent data ends. 

# Flag 'N' Things: This is one of the important header of TCP. 

# Checkout ../ref_SS/4-Transport-and-Session-Layers.png for Flags 'N' Things component of the header and TCP communication steps.

# Importance of layer 4 with respect to problems generated in layer 3:
- One thing to remember about Network layer 3 is that all the packet generated in the layer 3 are independent of each other. And, they might not take the same routes/hopes to reach the destination. Many times packet might go missing (TTL and hop count field), and they won't reach the destination in sequence.
- Another thing about layer 3 is that has just source and destination IP field. For any device running in a network, the device uses a lot of network related services (your bash might be updating all the packages you have installed, this VS code will be updating the extensions you have installed, or you might be actively browsing the internet), but in layer 3 we just have source and destination IP nothing for distinguishing the specific services that are being used. Layer 4 introduces ports to solve this problem.
- TCP and UDP forms the basis of Transport Layer. TCP is more reliable than UDP whereas performance wise UDP is better.

# Ephemeral Port: An ephemeral port is a temporary communication hub used for Internet Protocol (IP) communications. It is created from a set range of port numbers by the IP software and used as an end client’s port assignment in direct communication with a well-known port used by a server. Ephemeral means temporary or short-lived, as is the characteristic of this type of port.

In client-server processes that use Transmission Control Protocol/Internet Protocol (TCP/IP) or User Datagram Protocol (UDP), the client initiates communication with a server through one of the many well-known ports. However, because the server does not initialize communication, it should not use a well-known port to send replies to the client, just in case a server-type application is running on that client device. Instead, the server to the client uses a new, temporarily assigned port that the client provides as the source port.

Ephemeral port are also known as high ports.

# Relevance of Ephemeral Port with respect to AWS:
So, as you already know about state vs stateless thingy (Security group and Network ACL). Since Network ACL are stateless, you need to specify both inbound and outbound rules. For outbound rules, you will have to allow communication with these ephemeral ports.

Stateless and Stateful reference: Very important concept: https://www.freecodecamp.org/news/stateful-vs-stateless-architectures-explained/