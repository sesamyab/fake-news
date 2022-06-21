import crypto from 'crypto';

export function verify(input: string) {
    let publicKey =
        '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsFATY4fG4n822Zn8bQps\nzyF9navI/O5lwEg12fEHJGq69EKEfX1xFBXYNj8xEg6ROe4Zl+ssG1Co3Mb3M8zS\nE9shGSNmMB86oqPOZ9RZTYmiGg/Uh6FqGuP/+SzUC6k8gGVzoo1gn06dqv/S06cT\n7GW616T57DVHS280FPZ1JLmu88VaBhY/8kgCAqEWgdveLYYWzJhuiTcocCUVRbIE\nlKwWzLbze4BpUQtLQmW5QL+zwYOYXlbamnN+2VP7ZshTqRZEG+LCwI9DEWVUZsdS\nBdDtG0xH8aTf1BxCAcdcFdPJM2lNa9DmQnNlcB420jL3vKu2mFxxE1Zn/5PIu19p\nmQIDAQAB\n-----END PUBLIC KEY-----\n';
    const verifier = crypto.createVerify('RSA-SHA256');

    verifier.update(input, 'ascii');

    return verifier.verify(publicKey, input);
}
