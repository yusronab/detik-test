import { BiSolidMessageSquareEdit, BiSolidCheckCircle } from 'react-icons/bi'
import { HiMiniPresentationChartLine } from 'react-icons/hi2'

export const mechaData = [
    {
        title: 'Registrasi',
        icon: <BiSolidMessageSquareEdit size={24} />,
        date: '1-30 Januari 2023',
        step: [
            "Calon peserta diminta untuk mengisi formulir pendaftaran online yang berisi informasi pribadi, kontak, dan rician tim pada link berikut",
            "Selain itu, perserta juga diharapkan mengunggah ringkasan rencana bisnis mereka yang mencakup visi, misi, strategi, dan analisis pasar"
        ]
    },
    {
        title: 'Seleksi Peserta',
        icon: <BiSolidCheckCircle size={24} />,
        date: '1-7 Februari 2023',
        step: [
            "Tim seleksiakan meninjau setiap pendaftar dan mengevaluasi kualitas dan kelayakan bisnis plan yang diajukan",
            "Kriteria evaluasi dapat mencakup inovasi, potensi pertumbuhan, kelayakan keuangan, dan kejelasan presentasi",
            "Peserta yang memenuhi persyaratan seleksi akan dipilih sebagai finalis dan berhak melanjutkan ke tahap berikutnya",
        ]
    },
    {
        title: 'Pengumuman Peserta Terpilih',
        icon: <HiMiniPresentationChartLine size={24} />,
        date: '8 Februari 2023',
        step: [
            "Pengumuman finalis akan dilakukan melalui email",
            "Finalis akan diinformasikan tentang jadwal presentasi dan persiapan yang diperlukan",
            "Pada acara pengumuman pemenang, setiap finalis akan mempresentasikan rencana bisnis merekan dihadapan panel juri",
            "Setelah presentasi, panel juri akan melakukan evaluasi dan mengumumkan pemenang kompetisi business plan",
        ]
    }
]

const Mechanism = () => {
    return (
        <div id='mechanism' className='w-screen flex relative bg-gradient-to-t from-blue-500
        from-20% via-blue-300 via-40% to-blue-500 to-80% '>
            <div className='w-4/5 mx-auto py-28 z-[1]'>
                <h2 className='text-2xl md:text-4xl font-extrabold text-white mb-5'>
                    Mekanisme
                </h2>
                {mechaData.map((item, index) => (
                    <div key={index} className='bg-white p-8 mb-5 rounded-md flex gap-x-3'>
                        <div className='rounded-full bg-blue-500 p-3 text-white h-fit'>
                            {item.icon}
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <div className='flex justify-between md:text-xl text-blue-500
                            font-bold'>
                                <p>{item.title}</p>
                                <p>{item.date}</p>
                            </div>
                            {item.step.map((step, index) => (
                                <div key={index} className='flex'>
                                    <span className='block mr-2'>{index + 1}.</span>
                                    {step}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mechanism;