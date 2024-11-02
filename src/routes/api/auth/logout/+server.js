import { json,redirect } from '@sveltejs/kit';

export const POST = ({cookies, request})=>{
    //delete cookies no matter the req type.
    cookies.delete('access_token', {path:'/'});
    cookies.delete('refresh_token', {path:'/'});
    //if user is sending a form submission to this route then check it
    //return a json object so that client can invalidata load functions to delete client session data.
    if(request.headers.get('accept')==='application/json'){
        return json({status:200, statusText:'success'})
    }
    //if user is simply using a link [js turned off in browser] to logout then redirect to login page.
    throw redirect(303, '/login');
}