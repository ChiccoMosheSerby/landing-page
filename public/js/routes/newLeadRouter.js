const express = require("express");
const router = express.Router();
const leadsCollection = require('../db/schema').leadsSchema;


router.post('/', (req, res) => {
    let newLeadObj = req.body;
    if (newLeadObj.email &&
        newLeadObj.name &&
        newLeadObj.phone) {

        //Add lead to DB
        leadDoc = new leadsCollection(newLeadObj);
        leadDoc.save().then(doc => {
            console.log('added: ', doc);
           
           
        })
        let featuresFromDbToString = '';

        for (i = 0; i < newLeadObj.features.length; i++) {
            featuresFromDbToString += newLeadObj.features[i]+',';
        }
        console.log(featuresFromDbToString)
        
      

        const nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            type: "SMTP",
            host: "smtp.gmail.com",
            secure: true,
            auth: {
                user: 'chiccomoshe@gmail.com',
                pass: 'mhmbstqolssvnrtm'
            }
        });
        let mailOptions = {
            from: 'some@tst.com',
            // to: 'chiccomoshe@gmail.com',
            to: newLeadObj.email,
            subject: 'we recived your message  - thanks from workiz easy: ' ,
            text: 'Hi '+newLeadObj.name +'\nworkiz easy got your message about the workshops '+featuresFromDbToString+ '\nthanks !' +  '\nWe will contact you very soon!'
        };
        
        let mailOptionsOwner = {
            from: 'some@tst.com',
            // to: 'chiccomoshe@gmail.com',
            to: 'chiccomoshe@gmail.com',
            subject: 'new lead! - Chicco - workiz easy' ,
            text:  "name : " + newLeadObj.name +"\nemail : " + newLeadObj.email + " \nphone : " + newLeadObj.phone + "\nworkshops : " + featuresFromDbToString + "\nmessage  : " +'\n'+ newLeadObj.message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);

            } else {

                console.log('Email sent');
            }
        });
        transporter.sendMail(mailOptionsOwner, function (error, info) {
            if (error) {
                console.log(error);

            } else {

                console.log('mailOptionsOwner - Email sent');
            }
        });
    
        //--------------- END - email ------------------//

    }


})


module.exports = router;
