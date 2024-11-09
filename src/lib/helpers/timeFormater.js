export const timeFormater = (ms)=>{
    const min = Math.floor(ms/60000);
    const sec = Math.floor((ms % 60000)/1000);
    const formattedMin = String(min).padStart(2, '0');
    const fomattedSec = String(sec).padStart(2,'0');

    return `${formattedMin}:${fomattedSec}`
}