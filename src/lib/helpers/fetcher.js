import { browser } from "$app/environment";
export const reFetch = async(fetch, path, options={})=>{
        const req = fetch(path,options);
        //if its server side and not browser then return the req because all this is handled on browser side
        //in layout.server.js [all this means refresh token and routing]
        if(!browser) return req;
        //await the req response
        const res = await req;

        if(res.status === 401){
            //if token expires mid fetch then req acess token and refetch and return the data
            await fetch('/api/auth/refreshToken');
            return await fetch(path,options);
        }else{
            return res;
        }
        
}