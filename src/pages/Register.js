import { useRef, useState } from "react";

import { BsFillPlusCircleFill } from 'react-icons/bs';

const Register = () => {
    const [imageFile, setImageFile] = useState('');
    const [checked, setChecked] = useState(false);

    const fileRef = useRef();

    const onImageHandler = () => {
        const image = fileRef.current.files[0]
        const reader = new FileReader()

        reader.readAsDataURL(image)

        reader.addEventListener('load', () => {
            setImageFile(reader.result)
        })
    }

    return (
        <div className='flex flex-col items-center relative bg-sky-50 pb-[6%]'>
            <div className="absolute h-[30%] w-full bg-gradient-to-t from-blue-500 from-20% 
            via-blue-400 via-40% to-blue-500 to-80%"></div>
            <div className='w-full'>
                <img
                    src='/bg-wave3.png'
                    alt=''
                    className='w-full h-[200px] bg-gradient-to-t from-sky-50 rotate-180'
                />
            </div>
            <h2 className='text-4xl font-bold mb-5 z-10 text-white'>Registrasi</h2>
            <div className='container md:w-1/2 p-6 bg-white rounded-xl mb-5 z-10'>
                <form>
                    <input
                        type='text'
                        placeholder="Nama Perusahaan *"
                        required
                        className='w-full bg-slate-100 px-3 py-2 rounded-md transition-all
                        duration-300 active:scale-95 mb-4'
                    />
                    <input
                        type='email'
                        placeholder="Email *"
                        required
                        className='w-full bg-slate-100 px-3 py-2 rounded-md transition-all
                        duration-300 active:scale-95 mb-4'
                    />
                    <input
                        type='text'
                        placeholder="Nomor Telepon *"
                        required
                        className='w-full bg-slate-100 px-3 py-2 rounded-md transition-all
                        duration-300 active:scale-95'
                    />
                    <span className='text-sm mb-4 block'>Isi hanya angka</span>
                    <textarea
                        placeholder='Tentang Perusahaan (Max. 200 character) *'
                        required
                        className='w-full transition-all duration-300 active:scale-95
                        bg-slate-100 px-3 py-2 rounded-md mb-4'>
                    </textarea>
                    <div className='flex items-center mb-4'>
                        <div className="relative">
                            <img
                                src={imageFile}
                                alt=''
                                required
                                className='w-[250px] h-[250px] object-cover bg-slate-100
                                rounded-md'
                            />
                            <input
                                id="icon-button-file"
                                type="file"
                                accept="image/*"
                                ref={fileRef}
                                onChange={onImageHandler}
                                className='hidden'
                            />
                            <label
                                htmlFor="icon-button-file"
                                className='absolute top-1/2 left-1/2 -translate-x-1/2
                                -translate-y-1/2'
                            >
                                <BsFillPlusCircleFill size={24} />
                            </label>
                        </div>
                        <div className='ms-10 text-sm'>
                            <ol style={{ listStyleType: 'decimal' }}>
                                <li>Format file .png, .jpg, .jpeg</li>
                                <li>Maksimal ukuran file 200KB</li>
                                <li>Hindari pengaturan logo berwarna putih</li>
                                <li>Minimal lebar 300px</li>
                            </ol>
                        </div>
                    </div>
                    <input
                        type='text'
                        placeholder="Profil Perusahaan (Opsional)"
                        className='w-full bg-slate-100 px-3 py-2 rounded-md transition-all
                        duration-300 active:scale-95'
                    />
                    <span className='text-sm mb-4 block'>
                        Format file .pdf, maksimal size 20mb
                    </span>
                    <div className="flex">
                        <input
                            id="button-file-pdf"
                            type="file"
                            accept="application/pdf"
                            placeholder="Link Website *"
                            required
                            className="bg-slate-100 px-3 py-2 rounded-md transition-all
                            duration-300 flex-auto"
                        />
                        <label
                            htmlFor="button-file-pdf"
                            className='bg-blue-500 rounded-md px-10 py-[11px] text-white'
                        >
                            Upload file
                        </label>
                    </div>
                    <span className='text-sm mb-5 block'>
                        Website, Sosial Media, dll. Sertaka protokol URL (https:// atau http://)
                    </span>
                    <div>
                        <input
                            type="checkbox"
                            defaultValue={checked}
                            onChange={() => setChecked(!checked)}
                            className="checked:bg-blue-500 invalid:border-red-500 me-2"
                        />
                        <span className='text-sm'>
                            Dengan menekan tombol "Daftar", Saya menyetujui syarat dan ketentuan
                            yang berlaku
                        </span>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-sky-500 text-white mt-6 py-2 px-[15%] font-semibold
                        rounded'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;