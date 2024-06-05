# Notes from <Video name word to word>:
- pointers
- Summary of the video. What did you learn?

# Noted from <video name>
- pointers
- Summary of the video. What did you learn?

# Policy interpretation deep dive - Example 3 (11) ->
-  Checkout policy file in the previous marathon directory.
- The directory is a user home's linux based structure.


# AWS permission evaluation (11) -> 
- Different policies that impact resources an identity or a role can access: Organization SCPs, Resource Policies, IAM Identity Boundaries, Session Policies, and Identity Policies.
- Checkout the policy based authorization flow chart.
- Process flow starts with checking explicit deny, as an explicit deny overrules anything. After checking if there is any explicit deny, and let's say there isn't any, then the access will be implicitly denied access. In this scenario we will look for any explicit allow.
- Permission should be allowed in two different accounts for allowing resource access between two accounts. 


# CloudHSM (14)    -> 
- KSM for its functionality use a hardware unit called HSM (Hardware Security Module). The problem with KSM is that AWS has access to this HSM module in KSM.
- Now, because of this some demanding environment because of restriction aren't comfortable with this arrangement, thus there is another service known as CloudHSM provided by AWS.
- CloudHSM is provisioned by AWS but is fully managed by customer.
- CloudHSM is FIPS 140-2 Level 3 Compliant. So, if there is any project with this security compliance requirement you have to use either an on prem compliant option or CloudHSM. Questions are asked based on this.
- KMS is FIPS 140-2 level 2 compliant overall, some aspect of it are level 3 compliant.
- CloudHSM by design is not very integrated with AWS. You communicated with it via special API. Checkout the names of those in the screenshot for CloudHSM topic.
- Checkout the slide related to CloudHSM. It has some keyword that will be useful in exam.
- Checkout workflow of cloudHSM.
- High availability is the goal if you are using CloudHSM.
- CloudHSM client with industry standard and highly secure APIs are used for accessing cloudHSM.
- Checkout CloudHSM use cases slides.
- Since CloudHSM by design is not very integrated with AWS, anything that requires close integration with AWS will be using KMS whereas something which has to meet some regulatory requirement will use KSM.