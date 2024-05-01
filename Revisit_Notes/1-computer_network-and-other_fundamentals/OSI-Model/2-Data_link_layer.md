# Quick Notes:
0. Switch is the main device in layer 2.
1. A layer 2 network requires a functional layer 1 network. (Fundamental characteristic of OSI model)
2. One of the component of a mac address is OUI (Organizational Unique Identifier). The second part of a MAC address is Network Interface Controller.
3. In data link layer, the segmented data is referred to as a frame more specifically data link frame.
4. Layer 2 has a unique identification for identifying devices in the network (MAC address).
5. An ethernet frame that will be constructed in the layer 2 will have source and destination MAC address. What does it mean? You are starting device identification and MAC address is being used for this. 
6. When layer 2 is about to transfer something, it communicated with layer 1 to check for carrier signal. CSMA is used for this which stands for Carrier Sense Multiple Access.
7. Based on the carrier signal the packet is sent, thus preventing collision.
8. Collision can still take place if both the devices decides to send packet at the same time. Layer 2 has Collision detection functionality to counter this.
9. If a collision takes place, then a jam signal is sent to all the devices. All the devices in the network stops sending the packet for a random amount of time and sends it again. Let's say collision occurs again, then they will jam again but for a longer time and the transition will take place again (mathematically this reduces the probability of collision happening again.)
10. Switch is one of the data link layer device. It is designed to create a mac address table (after some time of operation between devices) and thus it reduces the probability of collision further. It's similar to hub in its other functionality.
11. Size of MAC address is 48 bits. MAC stands for Media Access Control Address.

# Ethernet Frame:
The term "Ethernet frame" is indeed closely associated with Ethernet technology, which traditionally operates over wired connections. However, even though Ethernet primarily refers to wired connections, the concept of an Ethernet frame is more about the data packet structure and how it is handled at the data link layer (Layer 2 of the OSI model).

When we talk about Ethernet frames, we're referring to a specific format for packaging data to be transmitted over a network. This format includes fields for things like source and destination MAC addresses, the data payload, and error checking information. 

Now, even though Ethernet frames are typically used in wired Ethernet networks, the same or similar concepts can apply to other network technologies, including Wi-Fi. In Wi-Fi networks, instead of Ethernet frames, you have Wi-Fi frames, which also encapsulate data for transmission over the wireless medium. These frames have similar components, such as source and destination MAC addresses, data payload, and error checking mechanisms.

So, while the term "Ethernet frame" may have originated in the context of wired Ethernet networks, it's often used more broadly to describe the basic unit of data transmission at the data link layer, regardless of the underlying physical medium. In essence, it's a way to describe the structure of data packets within a particular network technology.