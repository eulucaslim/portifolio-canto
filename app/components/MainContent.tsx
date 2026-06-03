import Image from 'next/image'
import AboutMe from './AboutMe'

export default function MainContent(){
    return (
        <main>
            <article className='h-screen flex flex-row justify-around'>
                <section className='flex flex-col justify-center'>
                    <h1>Olá, me chamo Lucas Lima</h1>
                    <h1 className='text-7xl'>
                        Software 
                        <br/> 
                        Developer
                    </h1>
                </section>
                <aside className='flex flex-col justify-center'>
                    <Image
                        src="/profile.jpeg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className='rounded-s-full'
                    />
                </aside>
            </article>
            <AboutMe/>
        </main>
    )
}