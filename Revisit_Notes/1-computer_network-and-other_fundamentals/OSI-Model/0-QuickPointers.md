# Quick Pointers that I am forgetting:
- Physical Layer device typical example is Hub. And the data will be in their bit form. Collision takes place.
- Data Link layer's device example is Switch. Switch is relatively intelligent. There are measures to solve collision of data stream. Data is called frame in this. It also has MAC address so devices can be uniquely identified.
- Layer 1 and Layer 2 i.e. Physical and Data Link layers haven't been standardized. There are no standard protocols or header structure for these. But starting after those, most layers have some common communication protocol. 
- Network Layer's device is router. Data is broken down into IP Packets in this. ARP (Address Resolution Protocol) and BGP (Border Gateway Protocol) takes place here.
- 



Data is called by the following names in different layer:
1. Physical layer: stream of bits.
2. Data link layer: Data Frame
3. Network Layer: Packets
4. Transport Layer: Segments
5. Session Layer: No specific name
6. Presentation Layer: no specific name
7. Application Layer: no specific name


Specific layer functionalities briefly:
In the OSI model, data at different layers is referred to by different names:

1. Physical Layer: At this layer, the data is transmitted as raw bits over the physical medium. There isn't a specific term for the data itself, as it's essentially just electrical or optical signals.

2. Data Link Layer: Here, data is encapsulated into frames for transmission over the physical layer. Frames contain not only the raw data but also control information such as addressing and error detection/correction bits.

3. Network Layer: At this layer, data is encapsulated into packets. Packets contain not only the raw data but also routing information such as source and destination IP addresses.

4. Transport Layer: In this layer, data is encapsulated into segments (or datagrams in the case of UDP). Segments include data from the upper layers, as well as information such as port numbers and sequence numbers.

5. Session Layer: The data at this layer is often referred to simply as data or messages. This layer manages the establishment, maintenance, and termination of sessions between applications.

6. Presentation Layer: Here, the data is represented and formatted in a way that is suitable for the application layer to interpret. This layer handles tasks such as data encryption, compression, and formatting conversion.

7. Application Layer: At the highest layer, the data is typically referred to as messages, requests, or responses, depending on the nature of the communication. This layer deals with application-specific data and protocols, such as HTTP for web browsing or SMTP for email.