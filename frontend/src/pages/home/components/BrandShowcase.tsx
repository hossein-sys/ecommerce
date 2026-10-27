const brands = [
  { id: 1, name: 'سینره', enName: 'Cinere', logo: '🌿' },
  { id: 2, name: 'لافارر', enName: 'La Farrere', logo: '✨' },
  { id: 3, name: 'لورآل', enName: 'L\'Oreal', logo: '💄' },
  { id: 4, name: 'نوتروژینا', enName: 'Neutrogena', logo: '💧' },
  { id: 5, name: 'سراوی', enName: 'CeraVe', logo: '🧴' },
  { id: 6, name: 'کالیستا', enName: 'Callista', logo: '🌸' },
  { id: 7, name: 'مای', enName: 'MY', logo: '💎' },
  { id: 8, name: 'این لی', enName: 'Inlay', logo: '🌹' },
];

const BrandShowcase = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-gray-900">محبوب‌ترین برندهای آرایشی و بهداشتی</h2>
            <p className="text-xs text-gray-400 mt-1">ضمانت اصالت ۱۰۰٪ کالا برای تمامی برندهای داخلی و بین‌المللی</p>
          </div>
          <a href="#all-brands" className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1">
            <span>مشاهده همه برندها</span>
            <svg className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={`#brand-${brand.id}`}
              className="flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-100 hover:border-rose-300 hover:shadow-xs transition-all group bg-gray-50/50 hover:bg-rose-50/30"
            >
              <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">{brand.logo}</span>
              <span className="text-xs font-bold text-gray-800 text-center">{brand.name}</span>
              <span className="text-[10px] text-gray-400">{brand.enName}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
