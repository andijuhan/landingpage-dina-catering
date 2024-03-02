import AboutUs from '@/components/AboutUs';
import Heading from '@/components/Heading';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
   return (
      <main className=''>
         <Hero />
         <Heading text='Layanan Kami' />
         <Services />
         <Heading text='Tentang Kami' />
         <AboutUs />
         <Heading text='Mengapa Memilih Kami' />
         <WhyChooseUs />
         <Heading text='Testimoni Pelanggan' />
      </main>
   );
}
