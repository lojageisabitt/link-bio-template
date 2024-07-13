import * as jose from'jose'
import { cookies } from 'next/headers'

async function openSessionToken(token:string){
    const secret = new TextEncoder().encode(process.env.JWT_AUTH_SECRET)
    const { payload } = await jose.jwtVerify(token, secret)
    return payload
}

async function createSessionToken(payload = {}){
    const secret = new TextEncoder().encode(process.env.JWT_AUTH_SECRET)
    const session = await new jose.SignJWT(payload)
    .setProtectedHeader({
        alg: 'HS256'
    })
    .setExpirationTime('1d')
    .sign(secret);

    const { exp } = await openSessionToken(session)
    cookies().set('session', session,{
        expires: (exp as number) *1000,
        path:'/',
        httpOnly: true
    })
    //salvar o token em um cookie para usar no server side
}

async function isSessionValid() {
    const sessionCookie = cookies().get('session');

    if(sessionCookie){
        const {value} = sessionCookie;
        const {exp} = await openSessionToken(value)
        const currentDate = new Date().getTime();

        return (exp as number) * 1000 > currentDate;
    }
    return false
}

function destroySession(){
    cookies().delete('session')
}

async function getUserId(){
    const sessionCookie = cookies().get('session');
    if(sessionCookie){
        const {value} = sessionCookie;
        const {sub} = await openSessionToken(value)
        return sub
    }
    return null
}
async function userType(){
    const sessionCookie = cookies().get('session');
    if (sessionCookie) {
      const { value } = sessionCookie;
      return await openSessionToken(value);
    }
    return null;
  }


const AuthService = {
    openSessionToken,
    createSessionToken,
    isSessionValid,
    destroySession,
    getUserId,
    userType
}


export default AuthService