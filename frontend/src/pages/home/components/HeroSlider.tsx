import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'تخفیف شگفت‌انگیز روتین پوستی',
    subtitle: 'تا ۵۰٪ تخفیف روی آبرسان‌ها، ضدآفتاب‌ها و سرم‌های ویتامین C',
    tag: 'پیشنهاد ویژه فصل',
    bgGradient: 'from-rose-500 via-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
    ctaText: 'مشاهده و خرید روتین پوست',
    link: '#skincare'
  },
  {
    id: 2,
    title: 'جدیدترین کالکشن آرایش صورت و لب',
    subtitle: 'ماندگاری ۲۴ ساعته با فرمولاسیون وگان و بدون سرب',
    tag: 'برندهای اختصاصی',
    bgGradient: 'from-purple-600 via-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80',
    ctaText: 'مشاهده کالکشن جدید',
    link: '#makeup'
  },
  {
    id: 3,
    title: 'تغذیه و احیای موهای آسیب‌دیده',
    subtitle: 'ماسک‌های کراتینه و روغن‌های آرگان خالص با ضمانت اصالت',
    tag: 'مراقبت حرفه‌ای مو',
    bgGradient: 'from-amber-600 via-rose-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80',
    ctaText: 'خرید محصولات تقویت مو',
    link: '#haircare'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* اسلایدر اصلی (۳ ستون از ۴ ستون مثل دیجی‌کالا و آمازون) */}
        <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-lg min-h-[340px] sm:min-h-[400px] flex items-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* تصویر پس‌زمینه با گرادینت */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-85 mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
              </div>

              {/* متن‌های اسلاید */}
              <div className="relative z-20 p-6 sm:p-12 text-white max-w-xl">
                <span className="inline-block bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-white/20">
                  {slide.tag}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.link}
                  className="inline-flex items-center gap-2 bg-white text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-2xl font-bold text-sm shadow-md hover:scale-105 transition-all"
                >
                  <span>{slide.ctaText}</span>
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* نشانگرهای نقطه‌ای اسلایدر */}
          <div className="absolute bottom-4 left-6 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
                }`}
                aria-label={`اسلاید ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* دو بنر جانبی ثابت (مثل دیجی‌کالا و آمازون) */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="relative flex-1 rounded-3xl overflow-hidden shadow-md group">
            <img
              src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=80"
              alt="ضدآفتاب‌های تخصصی"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[11px] font-bold text-rose-300">مراقبت روزانه</span>
              <h3 className="text-base font-bold mb-1">کرم‌های ضدآفتاب بی‌رنگ و رنگی</h3>
              <span className="text-xs text-white/80 underline group-hover:text-rose-200">مشاهده ۳۰+ مدل</span>
            </div>
          </div>

          <div className="relative flex-1 rounded-3xl overflow-hidden shadow-md group">
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80"
              alt="عطرهای زنانه و مردانه"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[11px] font-bold text-amber-300">رایحه‌های ماندگار</span>
              <h3 className="text-base font-bold mb-1">عطر و ادکلن‌های اورجینال</h3>
              <span className="text-xs text-white/80 underline group-hover:text-amber-200">با ضمانت پخش بو</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSlider;
