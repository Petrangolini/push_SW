const push=require('web-push');


let vapidkeys={
  publicKey: 'BL4vHCuYFTwZ0GJicFlY4d3lNAf4__GD7JH7y1vmTAK4LTdNXSUM43PNbwuscavArzfzqBEqLHl2uR4Z3InkDjs',
  privateKey: 'JcuOHdCWLDG6KI1s3-HwcsG4yKb6al9gtm95LCTy5G4'
};

push.setVapidDetails('mailto:petrangolini.paolo@gmail.com',vapidkeys.publicKey,vapidkeys.privateKey)

let sub={}

push.sendNotification(sub, "test message");
