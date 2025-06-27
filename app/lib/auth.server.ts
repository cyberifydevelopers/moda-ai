import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { phoneNumber } from "better-auth/plugins"
import twilio from "twilio"
import db from "./db";
import * as schema from '~/lib/schema';


const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
 
export const auth = betterAuth({
     plugins: [ 
        phoneNumber({  
            requireVerification: true,
            sendOTP: ({ phoneNumber, code }, request) => { 
                // Implement sending OTP code via SMS
                const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_API_KEY_SECRET);
                client.verify.v2.services(
                    process.env.TWILIO_VERIFY_SERVICE_SID || "" // Ensure this is set in your environment variables
                ).verifications.create({
                    to: phoneNumber,
                    channel: "sms",
                    customCode: code
                }).then(verification => {
                    console.log(`OTP sent to ${phoneNumber}: ${verification.status}`);
                }).catch(error => {
                    console.error(`Failed to send OTP to ${phoneNumber}:`, error);
                })
            },
            callbackOnVerification: async ({ phoneNumber, user }, request) => {
                // Implement callback after phone number verification
            }
        }) 
    ],
    database: drizzleAdapter(db, {
        provider: "pg", // or "pg" or "mysql"
        usePlural: true,
        schema
    }),
})