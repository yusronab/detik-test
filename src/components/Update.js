export const updateData = [
    {
        title: 'Alpha JWC Ventures Suntikan Dana Segar kepada OnlinePajak dan Steqo',
        image: 'https://source.unsplash.com/random/700x500/?startup,business',
        date: '1 hari yang lalu'
    },
    {
        title: 'Startup Lifepack Rampungkan Pendanaan Seri A yang Dipimpin Golden Gate Ventures',
        image: 'https://source.unsplash.com/random/700x500/?startup,group',
        date: '1 hari yang lalu'
    },
    {
        title: 'Angel Invertor Adalah? Berikut Jenis, Contoh dan Cara Mendapatkannya',
        image: 'https://source.unsplash.com/random/700x500/?startup,ilustration',
        date: '1 hari yang lalu'
    },
    {
        title: 'Crowe Indonesia Gelar Diskusi Terkait Valuasi Startup & Laporan ESG',
        image: 'https://source.unsplash.com/random/700x500/?startup,discuss',
        date: '1 hari yang lalu'
    },
    {
        title: 'Startup Fresh Factory Bangun Ratusan Gudang Dingin di 103 Kota',
        image: 'https://source.unsplash.com/random/700x500/?startup,building',
        date: '1 hari yang lalu'
    },
    {
        title: 'Startup Pertanian RI Dapat Pendanaan Awal Totalnya Rp 90 M',
        image: 'https://source.unsplash.com/random/700x500/?startup,farm',
        date: '1 hari yang lalu'
    }
]

const Update = () => {
    return (
        <div id="update" className='flex flex-col gap-y-8 p-[10%]'>
            <h2 className='text-2xl text-blue-500 font-bold'>LATEST UPDATE</h2>
            <div className='grid gap-5 grid-cols-2 md:grid-cols-3'>
                {updateData.map((item, index) => (
                    <div key={index}>
                        <div className='group overflow-hidden rounded hover:shadow-lg h-[200px]'>
                            <img
                                src={item.image}
                                alt=''
                                className='object-cover transition-all group-hover:rotate-6 
                                group-hover:scale-125'
                            />
                        </div>
                        <p className='line-clamp-2 md:font-bold my-2'>{item.title}</p>
                        <span className='text-sm text-slate-500'>{item.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Update;