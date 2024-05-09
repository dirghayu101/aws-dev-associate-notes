# What's the difference between hashing and encryption?
-> The key point about hashing is that it produces fixed length output for a variable length input.

Instead of storing a big file, you can generate its hash and compare that.


# Characteristics of Hashing functions:
1. For two different input a hashing function always generate two different outputs.
2. Hashing is 1 way. You cannot generate the input based on the output hash value.
3. Same data should always return same hash. (If salt is not taken into consideration.)

Ref: .ref-ss/hashing-characteristics.png

For dealing with passwords, hashing is the preferred method. Since two same inputs always generate the same output for a hashing function (salt not taken into consideration), the backend will save hash instead of the password. As the hash is irreversible, the password will be safe.

Ref: .ref-ss/hashing-passwords.png

# Collision in hashing: 
If two different inputs generate the same output then it's called collision.

# Comparison of hashing and encryption:
Encryption and hashing are two different cryptographic techniques used for different purposes, especially when it comes to handling passwords:

1. Encryption:

   - Encryption is a reversible process where plaintext (original data) is transformed into ciphertext (encrypted data) using an encryption algorithm and a secret key.
   - The same secret key is used to encrypt and decrypt the data, allowing for reversible transformations.
   - Encryption is commonly used to protect data in transit (e.g., during communication over the internet) or data at rest (e.g., stored files).
   - If an attacker gains access to the encrypted data and the key, they can decrypt the data and access the original plaintext.
   - When dealing with passwords, encrypting them means that the encrypted form can potentially be decrypted, exposing the original password. This is problematic because if an attacker gains access to the encrypted passwords and the encryption keys, they can decrypt the passwords and gain unauthorized access to user accounts.

2. Hashing:

   - Hashing is a one-way process where plaintext data is transformed into a fixed-size string of characters (hash value) using a hash function.
   - The hash function is designed to be irreversible, meaning it's practically impossible to derive the original plaintext from the hash value.
   - Hashing is commonly used for storing passwords securely. When a user creates or updates their password, it is hashed and stored in a database. During authentication, the entered password is hashed and compared with the stored hash.
   - Even if an attacker gains access to the hashed passwords, it's extremely difficult to reverse the process and obtain the original passwords from the hash values. This makes hashing a more secure approach for password storage.

In summary, encryption is not suitable for securely storing passwords because it is reversible, while hashing is specifically designed for irreversible transformation, making it a safer choice for password storage and authentication purposes.


# Hashing to verify downloads:
Hashing is commonly used to verify the integrity of downloaded data by calculating a hash value for the downloaded file and comparing it with a pre-calculated hash value provided by the source. Here's how it works:

1. Calculating the Hash Value: Before making a file available for download, the source (e.g., a website, software repository) calculates a hash value for the file using a cryptographic hash function such as SHA-256 or MD5. This hash value serves as a unique fingerprint of the file's contents.

2. Providing the Hash Value: The source makes the calculated hash value available to users alongside the download link or on a dedicated webpage. Users can access this hash value to verify the integrity of the downloaded file.

3. Downloading the File: Users download the file from the source to their local system.

4. Calculating the Hash of the Downloaded File: After downloading the file, users calculate the hash value of the downloaded file using the same cryptographic hash function used by the source.

5. Comparing Hash Values: Users compare the calculated hash value of the downloaded file with the hash value provided by the source. If the two hash values match, it indicates that the downloaded file is identical to the original file provided by the source. This ensures the integrity of the downloaded data and confirms that it has not been tampered with during transit.

By comparing hash values, users can verify that the downloaded data has not been corrupted or modified in any way. This process is commonly used for downloading software, firmware updates, operating system images, and other files where data integrity is critical.

A vulnerability with this is that the hash provided by the source can be manipulated. We use digital signature to verify the authenticity of hash value received in this case.