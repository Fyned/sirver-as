import { motion } from 'framer-motion';
import { Building2, HardHat, CheckCircle2 } from 'lucide-react';
import Placeholder from '../ui/Placeholder';

const projects = [
  {
    id: 1,
    name: "Büyük Ölçekli Altyapı Projeleri",
    desc: "Yıllık 500.000 m³ hafriyat ve beton döküm operasyonu yönetimi.",
    stat: "50+ İş Makinesi",
    category: "Operasyonel Filo"
  },
  {
    id: 2,
    name: "Endüstriyel Tesis İnşaatları",
    desc: "Karmaşık çelik konstrüksiyon ve fabrika kurulumlarında zamanında teslimat.",
    stat: "100.000 m²",
    category: "Proje Yönetimi"
  },
  {
    id: 3,
    name: "Kamu ve Taahhüt İşleri",
    desc: "Resmi kurumlarla yürütülen projelerde yüksek standartlara uyum ve güvenilirlik.",
    stat: "%100 Başarı",
    category: "Kurumsal Güven"
  }
];

export default function References() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sirver-primary font-bold tracking-widest text-sm uppercase mb-2 block">
              KÖKLÜ GEÇMİŞ, GÜÇLÜ GELECEK
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-sirver-secondary">
              İNŞAATTAN ENERJİYE <br/> OPERASYONEL MİRAS
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-right md:text-left hidden md:block">
            Biyokütle tedariğindeki lojistik gücümüzü, yıllara dayanan büyük ölçekli şantiye ve proje yönetimi tecrübemizden alıyoruz.
          </p>
        </div>

        {/* Proje Kartları (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              {/* Görsel Alanı */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative bg-gray-100">
                <div className="absolute inset-0 bg-sirver-secondary/0 group-hover:bg-sirver-secondary/20 transition-colors z-10 duration-500" />
                {/* Buraya Eski İnşaat/Şantiye Fotoları Gelecek */}
                <Placeholder 
                  label={`${project.category} FOTOĞRAFI`} 
                  className="bg-gray-200 text-gray-400 border-none h-full" 
                />
                
                {/* Sol Üst Etiket */}
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sirver-secondary flex items-center gap-2">
                  <HardHat size={14} className="text-sirver-accent" />
                  {project.category}
                </div>
              </div>

              {/* Metin Alanı */}
              <h3 className="text-xl font-bold text-sirver-secondary mb-2 group-hover:text-sirver-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {project.desc}
              </p>
              
              <div className="flex items-center gap-2 text-sirver-primary font-bold text-sm bg-sirver-surface w-fit px-3 py-2 rounded-lg">
                <Building2 size={16} />
                <span>{project.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sertifika ve Güven Bandı */}
        <div className="mt-24 pt-10 border-t border-gray-100">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Buraya FSC, ISO gibi logolar gelecek. Şimdilik metin. */}
            <div className="flex items-center gap-2 font-bold text-xl text-sirver-secondary">
              <CheckCircle2 className="text-sirver-primary" /> ISO 9001:2015
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-sirver-secondary">
              <CheckCircle2 className="text-sirver-primary" /> ISO 14001:2015
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-sirver-secondary">
              <CheckCircle2 className="text-sirver-primary" /> FSC Sertifikalı
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-sirver-secondary">
              <CheckCircle2 className="text-sirver-primary" /> OGM İzinli
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}