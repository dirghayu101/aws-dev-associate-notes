Maximum ethernet v2 frame size is 1500 bytes (standard frame). Anything bigger than this is classified as a jumbo frame.

A jumbo frame usually has a maximum size of 9000 bytes.

There is always space between two consecutive frames in transit. (Time period when nothing is being transmitted). This is used for demarcation between frames.

Frame overhead is the header that we have to include in every frame for its identification. This include src and destination mac address and all of those.

We talk about frames in layer 2 (Data Link). To have jumbo frame, you need to ensure that the layers above data link (specifically transport layer) are also supporting jumbo frames.

Not everything support jumbo frames in AWS. Checkout: ref_ss/8_jumbo-frame-aws-support.png

Ref: ref_ss/8_jumbo-and-standard-frame_comp.png