import { useState } from 'react';
import type { Product } from '../../../types/product';

const allProducts: Product[] = [
  {
    id: 201,
    title: 'کرم پودر مات ۲۴ ساعته لورآل سری Infallible',
    category: 'آرایش صورت',
    brand: 'لورآل (L\'Oreal)',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80',
    originalPrice: 890000,
    discountPercent: 15,
    rating: 4.9,
    reviewCount: 420,
    inStock: true
  },
  {
    id: 202,
    title: 'ژل شستشوی صورت مخصوص پوست چرب و آکنه‌ای سینره',
    category: 'مراقبت از پوست',
    brand: 'سینره (Cinere)',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80',
    originalPrice: 210000,
    discountPercent: 10,
    rating: 4.6,
    reviewCount: 310,
    inStock: true
  },
  {
    id: 203,
    title: 'سرم ضدچروک و جوانساز رتینول سراوی Cerave',
    category: 'مراقبت از پوست',
    brand: 'سراوی (CeraVe)',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80',
    originalPrice: 1250000,
    discountPercent: 20,
    rating: 5.0,
    reviewCount: 610,
    inStock: true
  },
  {
    id: 204,
    title: 'اسپری دئودورانت و ضدتعریق زنانه رکسونا ۲۴ ساعته',
    category: 'بهداشت فردی',
    brand: 'رکسونا (Rexona)',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=80',
    originalPrice: 180000,
    discountPercent: 0,
    rating: 4.5,
    reviewCount: 190,
    inStock: true
  },
  {
    id: 205,
    title: 'پالت سایه چشم رولوشن ۱۸ رنگ مدل Velvet Rose',
    category: 'آرایش چشم',
    brand: 'رولوشن (Revolution)',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&auto=format&fit=crop&q=80',
    originalPrice: 720000,
    discountPercent: 25,
    rating: 4.8,
    reviewCount: 240,
    inStock: true
  },
  {
    id: 206,
    title: 'شامپو بدون سولفات روغن آرگان او جی ایکس (OGX)',
    category: 'مراقبت از مو',
    brand: 'او جی ایکس (OGX)',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=80',
    originalPrice: 590000,
    discountPercent: 18,
    rating: 4.7,
    reviewCount: 175,
    inStock: true
  },
  {
    id: 207,
    title: 'کرم ترمیم‌کننده پوست سیکا پلاست لاروش پوزای B5',
    category: 'مراقبت از پوست',
    brand: 'لاروش پوزای (La Roche-Posay)',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80',
    originalPrice: 980000,
    discountPercent: 12,
    rating: 4.9,
    reviewCount: 890,
    inStock: true
  },
  {
    id: 208,
    title: 'بادی اسپلش زنانه شاین‌دار کالیستا مدل Taylor',
    category: 'عطر و ادکلن',
    brand: 'کالیستا (Callista)',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=80',
    originalPrice: 240000,
    discountPercent: 22,
    rating: 4.4,
    reviewCount: 130,
    inStock: true
  }
];

const tabs = ['همه محصولات', 'مراقبت پوست', 'آرایش صورت', 'مراقبت مو', 'عطر و بهداشتی'];

const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState('همه محصولات');

  const filteredProducts = allProducts.filter((product) => {
    if (activeTab === 'همه محصولات') return true;
    if (activeTab === 'مراقبت پوست') return product.category === 'مراقبت از پوست';
    if (activeTab === 'آرایش صورت') return product.category.includes('آرایش');
    if (activeTab === 'مراقبت مو') return product.category === 'مراقبت از مو';
    if (activeTab === 'عطر و بهداشتی') return product.category === 'عطر و ادکلن' || product.category === 'بهداشت فردی';
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* سربرگ بخش و تب‌ها */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-200 gap-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">منتخب محبوب‌ترین محصولات آرایشی</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">بر اساس رضایت خریداران و پرفروش‌ترین‌های هفته</p>
        </div>

        {/* دکمه‌های تب فیلتر */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* گرید محصولات */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => {
          const discount = product.discountPercent || 0;
          const finalPrice = Math.round(product.originalPrice * (1 - discount / 100));

          return (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-4 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              {/* تصویر و بج‌ها */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {discount > 0 && (
                  <span className="absolute top-2.5 right-2.5 bg-rose-600 text-white text-[11px] font-black px-2 py-0.5 rounded-full shadow-xs">
                    {discount}٪
                  </span>
                )}
                {/* نشانگر رضایت و ستاره */}
                <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-bold text-gray-700 shadow-xs">
                  <span className="text-amber-500">★</span>
                  <span>{product.rating}</span>
                </div>
              </div>

              {/* برند و عنوان */}
              <div className="flex-1">
                <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                  <span>{product.brand}</span>
                  <span>({product.reviewCount} نظر)</span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-800 line-clamp-2 leading-relaxed hover:text-rose-600 transition-colors">
                  {product.title}
                </h3>
              </div>

              {/* قیمت و دکمه افزودن */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-baseline justify-between">
                  {discount > 0 ? (
                    <span className="text-[11px] text-gray-400 line-through">
                      {product.originalPrice.toLocaleString('fa-IR')}
                    </span>
                  ) : <span></span>}

                  <div className="flex items-baseline gap-1 font-black text-gray-900 text-base">
                    <span>{finalPrice.toLocaleString('fa-IR')}</span>
                    <span className="text-xs font-normal text-gray-500">تومان</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-3 w-full bg-gray-900 hover:bg-rose-600 text-white font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>افزودن به سبد خرید</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
