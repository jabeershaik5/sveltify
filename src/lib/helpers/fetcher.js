import { browser } from "$app/environment";
import { error } from "@sveltejs/kit";
export const reFetch = async(fetch, path)=>{
        const req = fetch(path);
        //if its server side and not browser then return the req because all this is handled on browser side
        //in layout.server.js [all this means refresh token and routing]
        if(!browser) return req;
        //await the req response
        const res = await req;

        if(res.status === 401){
            //check if we are refrshing token already. if not then send a req to refresh token
            if(!window.refreshPromise){
                //if token expires mid fetch then req acess token and refetch and return the data
                window.refreshPromise = await fetch('/api/auth/refreshToken').finally(()=>{
                    //after successful refresh clear the promise for future use
                    window.refreshPromise = null
                });     
            }
            //if there is another request during refresh wait the refresh before sending the request
            const refreshRes = await window.refreshPromise;
            //if there was an error in refreshing token, like refresh token expired too. then throw error
            if(!refreshRes.ok){
                throw error(401, 'Session Expired')
            }
            return fetch(path);
        }
        return res
        
}