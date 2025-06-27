import { betterAuth } from "better-auth"
import { phoneNumber } from "better-auth/plugins"
 
export const auth = betterAuth({
     plugins: [ 
        phoneNumber({  
            sendOTP: ({ phoneNumber, code }, request) => { 
                // Implement sending OTP code via SMS
                
            } 
        }) 
    ],
    database: {
        provider: "postgres", //change this to your database provider
        url: process.env.DATABASE_URL, // path to your database or connection string
    }
})