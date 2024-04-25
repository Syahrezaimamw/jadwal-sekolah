export const putDataapi=(data, per, status, input,id)=>{
    const baru = {
        hari: data.hari,
        jadwal: data.jadwal.map((a) => {
            if (a === per) {
                return {
                    ...per, pr: {
                        status: status,
                        desk: input
                    }
                }
            }
            return a
        })
    }
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(baru)
    };

    fetch('https://65557ea384b36e3a431dce2b.mockapi.io/mapel/' + id, requestOptions)
        .then(response => response.json())
        .then(data => {
            window.location.href = '/jadwal-sekolah/'
        });
}