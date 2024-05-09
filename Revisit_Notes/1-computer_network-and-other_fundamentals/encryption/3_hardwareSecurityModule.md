If your processor is the only unit performing cryptographic operation, you will have to replicate those keys in several storage media. This create a security risk as those keys can be stolen from different places where they have been replicated. 

Checkout: ./ref-ss/without-hsm.png for reference.

HSM is a unit which solves this problem by performing all the cryptographic operation. The private keys are generated and deleted here and usually never leaves this module. It's a hardware unit.

Checkout: ./ref-ss/with-hsm.png and ./ref-ss/hsm-infrastructure.png