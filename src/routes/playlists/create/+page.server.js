export const actions = {
    default:async({request})=>{
        const data = await request.formData();
        const name = data.get('name'); 
        const desc = data.get('description');

        
    }
}