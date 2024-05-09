Here are the two concepts under encryption:

1. Signing: Now you already know what the data in transit look like with all those packet structure, frame structure and other standardization on the internet. Anyone can pretend to be anyone. So signing is used to verify your identity. Like you are google.com, you are twitter or whatever.com

2. Steganography: Use of images or other similar thing to hide that you have used an encryption algorithm. Main goal is to hide the use of encryption.


Signing overview: The data is signed by hashing the message with a hashing algorithm and the sender’s private key. This produces a hash digest, which can only be recreated through use of one of the keys in the key pair created by the sender. The recipient then receives the message, the hash digest, and the public key, if they did not already have it. The recipient then uses the sender’s public key to hash the message they have received. If the resulting hash digest matches the hash digest that has been sent along with the message, then the identity of the sender has been confirmed. This also confirms that the data has not been changed in transit. However, signing alone does not ensure the data has not been intercepted and read.

The biggest problem with symmetric encryption is storing / transiting the key. Symmetric encryption often create catch-22 situation. One of the possible solution is to never putting the key in transit because that's where all the disadvantages of symmetric encryption are. AWS Key Management Service use this logic. To understand it checkout the following screenshots:
1. ./ref-ss/encryption-envelope-encryption-flow
2. ./ref-ss/encryption-envelope-decryption-flow

# Reference Screenshots:
./ref-ss/encryption-steganography.png
./ref-ss/encryption-signing.png
