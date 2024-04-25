export const getJadwalApi=async(callback)=>{
   await fetch('https://65557ea384b36e3a431dce2b.mockapi.io/mapel')
    .then(res => res.json())
    .then(res => callback(res))
}