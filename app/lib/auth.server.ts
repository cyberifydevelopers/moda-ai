import { betterAuth } from "better-auth"
import { phoneNumber } from "better-auth/plugins"
import twilio from "twilio"
 
export const auth = betterAuth({
     plugins: [ 
        phoneNumber({  
            sendOTP: ({ phoneNumber, code }, request) => { 
                // Implement sending OTP code via SMS
                const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_API_KEY_SECRET);
                client.verify.v2.services(
                    "VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                ).verifications.create({
                    to: phoneNumber,
                    channel: "sms",
                    customCode: code
                }).then(verification => {
                    console.log(`OTP sent to ${phoneNumber}: ${verification.status}`);
                }).catch(error => {
                    console.error(`Failed to send OTP to ${phoneNumber}:`, error);
                })
            } 
        }) 
    ],
    database: {
        provider: "postgres", //change this to your database provider
        url: process.env.DATABASE_URL, // path to your database or connection string
    }
})