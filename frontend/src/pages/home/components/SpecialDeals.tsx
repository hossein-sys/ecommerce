import { useState, useEffect } from 'react';
import type { Product } from '../../../types/product';

const dealsProducts: Product[] = [
  {
    id: 101,
    title: 'کرم ضدآفتاب و ضدلک فلوئیدی لافارر SPF 50',
    category: 'مراقبت از پوست',
    brand: 'لافارر (La Farrere)',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80',
    originalPrice: 480000,
    discountPercent: 35,
    rating: 4.8,
    reviewCount: 142,
    inStock: true
  },
  {
    id: 102,
    title: 'سرم آبرسان هیالورونیک اسید هیدرو بوست نوتروژینا',
    category: 'مراقبت از پوست',
    brand: 'نوتروژینا (Neutrogena)',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80',
    originalPrice: 650000,
    discountPercent: 28,
    rating: 4.9,
    reviewCount: 380,
    inStock: true
  },
  {
    id: 103,
    title: 'ریمل حجم دهنده و بلندکننده اسنس مدل I Love Extreme',
    category: 'آرایش چشم',
    brand: 'اسنس (Essence)',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=500&auto=format&fit=crop&q=80',
    originalPrice: 320000,
    discountPercent: 40,
    rating: 4.7,
    reviewCount: 520,
    inStock: true
  },
  {
    id: 104,
    title: 'ماسک مو داخل حمام کراتین و آرگان لورآل Elseve',
    category: 'مراقبت از مو',
    brand: 'لورآل (L\'Oreal)',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=80',
    originalPrice: 540000,
    discountPercent: 25,
    rating: 4.6,
    reviewCount: 95,
    inStock: true
  },
  {
    id: 105,
    title: 'رژ لب مایع مات ماندگار وگان این لی (Inlay)',
    category: 'آرایش لب',
    brand: 'این لی (Inlay)',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=80',
    originalPrice: 240000,
    discountPercent: 30,
    rating: 4.5,
    reviewCount: 110,
    inStock: true
  }
];

const SpecialDeals = () => {
  // تایمر معکوس برای حراج شگفت‌انگیز
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const calculateDiscountPrice = (price: number, discount = 0) => {
    return Math.round(price * (1 - discount / 100));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 rounded-3xl p-4 sm:p-6 shadow-xl text-white">
        
        {/* عنوان و تایمر شگفت‌انگیز */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-white/20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl">
              🔥
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">شگفت‌انگیزهای آرایشی و زیبایی</h2>
              <p className="text-xs text-white/80 mt-0.5">تخفیف‌های محدود با زمان باقی‌مانده ویژه</p>
            </div>
          </div>

          {/* باکس ساعت معکوس */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-white/90 ml-1">فرصت باقی‌مانده:</span>
            <div className="flex items-center gap-1.5 font-mono text-sm font-bold">
              <span className="bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-xl">{String(timeLeft.hours).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* اسلایدر افقی محصولات شگفت‌انگیز */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mt-6">
          {dealsProducts.map((product) => {
            const finalPrice = calculateDiscountPrice(product.originalPrice, product.discountPercent);

            return (
              <div
                key={product.id}
                className="bg-white text-gray-900 rounded-2xl p-3 sm:p-4 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                {/* عکس محصول و بج تخفیف */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-50 mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discountPercent && (
                    <span className="absolute top-2 right-2 bg-rose-600 text-white text-[11px] font-black px-2 py-0.5 rounded-full shadow-sm">
                      {product.discountPercent}٪
                    </span>
                  )}
                </div>

                {/* برند و عنوان */}
                <div className="flex-1">
                  <span className="text-[10px] text-gray-400 font-medium block truncate mb-1">
                    {product.brand}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-800 line-clamp-2 leading-snug hover:text-rose-600 transition-colors">
                    {product.title}
                  </h3>
                </div>

                {/* قیمت‌ها */}
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 line-through">
                    <span>{product.originalPrice.toLocaleString('fa-IR')}</span>
                    <span>تومان</span>
                  </div>

                  <div className="flex items-center justify-between font-black text-rose-600 text-sm sm:text-base mt-0.5">
                    <span>{finalPrice.toLocaleString('fa-IR')}</span>
                    <span className="text-xs font-medium text-gray-500">تومان</span>
                  </div>
                </div>

                {/* دکمه سریع افزودن به سبد */}
                <button
                  type="button"
                  className="mt-3 w-full bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white font-bold text-xs py-2 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>افزودن به سبد</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SpecialDeals;
