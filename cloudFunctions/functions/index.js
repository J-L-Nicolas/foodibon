const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.readFireStoreData = functions.firestore.document('message/{messageId}').onCreate((snap, context) => {

    /* init const result */
    const data = snap._fieldsProto;
    const id = context.params.messageId;
    const token = data.token.stringValue

    /* log */
    functions.logger.log('msg id:', id);
    functions.logger.log('new msg data:', data );
    functions.logger.log('new msg:', data.msg.stringValue);

    const message = {
      notification: {
        title: data.msg.stringValue,
        body: `Envoi de notif par jeremy`
      },
      token: token
    };

    /* send notif */
    const response =  admin.messaging().send(message);

})