const functions = require("firebase-functions");
const firebase_tools = require("firebase-tools");
var postmark = require("postmark");
require("firebase-functions/logger/compat");

exports.sendEmail = functions.https.onCall((data, context) => {
  var client = new postmark.ServerClient("25517a27-c9ee-49ed-a203-e3cfde01f497");

  const { toWho, subject, content } = data
  console.log('sending email to =', toWho)

  client.sendEmail({
    "From": "elton@explanations.app",
    "To": toWho,
    "Subject": subject,
    "HtmlBody": content, // "<strong>Hello</strong> dear Postmark user."
    "TextBody": content,
    "MessageStream": "outbound"
  })
})


exports.sendTextMessage = functions.https.onCall((data, context) => {
  const client = require('twilio')(process.env.TWILIO_ACCOUNTSID, process.env.TWILIO_AUTHTOKEN)
  const { content, toWho } = data;
  console.log('content =', content)
  console.log("toWho =", toWho)
  client.messages 
    .create({        
        body: content,
        messagingServiceSid: 'MGe595615f66055b9ee88ac19a9d0ddce5',
        to: toWho
      }) 
    .then(message => console.log('sent to =', toWho)) 
    .done();
});

exports.recursiveDelete = functions
  .runWith({ 
    timeoutSeconds: 540, memory: "2GB" 
  })
  .https.onCall(async (data, context) => {
    // Only allow admin users to execute this function.
    // if (!(context.auth && context.auth.token && context.auth.token.admin)) {
    //   throw new functions.https.HttpsError(
    //     'permission-denied',
    //     'Must be an administrative user to initiate delete.'
    //   );
    // }
    const path = data.path;
    console.log(`Requested to delete path ${path}`);
    // return "success";
    // recursiveDelete({ "path": "/classes/mDbUrvjy4pe8Q5s5wyoD/blackboards/M1v0XzFtwP1RLKxsMR4K/strokes" })

    // Run a recursive delete on the given document or collection path.
    // The 'token' must be set in the functions config, and can be generated
    // at the command line by running 'firebase login:ci'.
    return firebase_tools.firestore.delete(path, {
      project: process.env.GCLOUD_PROJECT,
      recursive: true,
      yes: true,
      force: true
      // token: functions.config().fb.token
    });
    // console.log("await complete - successfully deleted, returning now");
    // return {
    //   path: path 
    // };
});
