export const updateData = [
    {
        title: 'Alpha JWC Ventures Suntikan Dana Segar kepada OnlinePajak dan Steqo',
        image: 'https://source.unsplash.com/random/900x700/?business',
        date: '1 hari yang lalu'
    },
    {
        title: 'Startup Lifepack Rampungkan Pendanaan Seri A yang Dipimpin Golden Gate Ventures',
        image: 'https://source.unsplash.com/random/900x700/?business,group',
        date: '1 hari yang lalu'
    },
    {
        title: 'Angel Invertor Adalah? Berikut Jenis, Contoh dan Cara Mendapatkannya',
        image: 'https://source.unsplash.com/random/900x700/?business,animation',
        date: '1 hari yang lalu'
    },
    {
        title: 'Alpha JWC Ventures Suntikan Dana Segar kepada OnlinePajak dan Steqo',
        image: 'https://source.unsplash.com/random/900x700/?business',
        date: '1 hari yang lalu'
    },
    {
        title: 'Alpha JWC Ventures Suntikan Dana Segar kepada OnlinePajak dan Steqo',
        image: 'https://source.unsplash.com/random/900x700/?business',
        date: '1 hari yang lalu'
    },
    {
        title: 'Alpha JWC Ventures Suntikan Dana Segar kepada OnlinePajak dan Steqo',
        image: 'https://source.unsplash.com/random/900x700/?business',
        date: '1 hari yang lalu'
    }
]

const Update = () => {
    return (
        <div className='flex flex-col gap-y-8 p-[10%]'>
            <h2 className='text-2xl text-blue-500 font-bold'>LATEST UPDATE</h2>
            <div className='grid gap-5 grid-cols-3'>
                {updateData.map((item, index) => (
                    <div key={index}>
                        <img
                            src={item.image}
                            alt=''
                            className='h-[200px] w-full object-cover rounded'
                        />
                        <p className='font-bold py-2'>{item.title}</p>
                        <span className='text-sm text-slate-500'>{item.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Update;