import { redirect } from "@sveltejs/kit"
//load function that loades before the initial root layout. 
//this functino will fetch the user login data and sets the user before rendering the page.
//can use this to divert the user from protected routes.
export const load = async({ data, url })=>{

    //extract the user data from the data returned by the server load function.
    const {user} = data || {};

    //redirect user from accessing unauthorized routes.
    if(!user && url.pathname !=='/login'){
        throw redirect(307, '/login');
    }
    if(user && url.pathname === '/login'){
        throw redirect(307, '/');
    }
    //finally return the user data so that the layout.svelte can store the data in the user store and use.
    return {user}
}

//need to include the access and refresh token checking here to check is user is logged in or not.