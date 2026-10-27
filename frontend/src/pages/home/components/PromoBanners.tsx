const PromoBanners = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* بنر اول: روتین پوست‌های چرب و ضدجوش */}
        <div className="relative rounded-3xl overflow-hidden shadow-md group h-48 sm:h-56">
          <img
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
            alt="پک تخصصی ضدجوش"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/90 via-emerald-900/60 to-transparent flex flex-col justify-center p-6 sm:p-8 text-white">
            <span className="text-xs font-bold text-emerald-300 mb-1">محصولات طبیعی و وگان</span>
            <h3 className="text-xl sm:text-2xl font-black mb-2 leading-tight">
              پک تخصصی پاکسازی و کنترل چربی پوست
            </h3>
            <p className="text-xs text-white/80 mb-4 max-w-xs">
              شوینده، تونر و آبرسان تخصصی با تخفیف ویژه تا ۳۵٪
            </p>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-emerald-800 px-4 py-2 rounded-xl group-hover:bg-emerald-50 transition-colors">
                خرید محصولات پاکسازی
              </span>
            </div>
          </div>
        </div>

        {/* بنر دوم: آرایش لب و چشم ماندگار */}
        <div className="relative rounded-3xl overflow-hidden shadow-md group h-48 sm:h-56">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80"
            alt="کالکشن رژلب و آرایش صورت"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-rose-950/90 via-rose-900/60 to-transparent flex flex-col justify-center p-6 sm:p-8 text-white">
            <span className="text-xs font-bold text-rose-300 mb-1">جدیدترین‌های فصل</span>
            <h3 className="text-xl sm:text-2xl font-black mb-2 leading-tight">
              ست‌های آرایشی و کادویی هدیه
            </h3>
            <p className="text-xs text-white/80 mb-4 max-w-xs">
              بهترین هدیه برای مناسبت‌ها با بسته‌بندی لوکس و ارسال فوری
            </p>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-rose-800 px-4 py-2 rounded-xl group-hover:bg-rose-50 transition-colors">
                مشاهده ست‌های کادویی
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoBanners;
