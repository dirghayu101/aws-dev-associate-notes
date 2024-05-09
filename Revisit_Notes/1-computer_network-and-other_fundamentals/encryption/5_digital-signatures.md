Checkout: ./ref-ss/digital-signature-explanation.png

Then checkout: ./ref-ss/digital-signature-pictorial.png  

# "Private key is used to sign the generated hash." What does signing the hash really mean?
When you sign a hash with a private key, you're essentially creating a digital signature. Here's what happens in the process:

1. Hashing: First, the data (such as a message or a file) is hashed using a cryptographic hash function. This produces a fixed-size string of characters, often represented in hexadecimal format. The hash is unique to the data being hashed, meaning even a small change in the data will result in a significantly different hash.

2. Signing: The hash is then encrypted using the private key of the sender. This creates the digital signature. The signature is unique to both the data and the private key used to create it.

3. Verification: To verify the signature, the recipient uses the corresponding public key to decrypt it, which reveals the original hash. The recipient then independently hashes the received data to produce a hash. If the two hashes match, it confirms that the data has not been altered since it was signed and that it indeed came from the holder of the private key.

Signing the hash rather than the entire data provides a few advantages:

- Efficiency: Hashing algorithms are usually faster than encryption algorithms, so signing just the hash can be more efficient.
- Security: It's computationally infeasible to derive the original data from the hash or the signature, especially when using strong cryptographic algorithms.
- Compactness: Hashes are usually fixed-size, so the signature is of a predictable size regardless of the size of the original data.

Overall, signing a hash provides a secure and efficient way to ensure data integrity and verify the authenticity of the sender.

