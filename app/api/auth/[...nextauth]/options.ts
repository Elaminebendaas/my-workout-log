import GoogleProvider from 'next-auth/providers/google'



const authOptions = {

    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
     
    ],
    callbacks:{
      async signIn(profile){

      }
    }
    
}

export { authOptions }