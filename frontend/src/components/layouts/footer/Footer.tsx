const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-12">
      {/* دکمه بازگشت به بالا (مثل دیجی‌کالا و آمازون) */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
              ✨
            </div>
            <span className="font-extrabold text-gray-900 text-base">بیوتی‌استور</span>
            <span className="text-xs text-gray-400">| فروشگاه تخصصی آرایشی، بهداشتی و مراقبت فردی</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:text-rose-600 hover:border-rose-300 transition-all cursor-pointer"
          >
            <span>بازگشت به بالا</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* اطلاعات تماس و پشتیبانی */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-100 text-xs sm:text-sm text-gray-600 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span>تلفن پشتیبانی: <strong className="text-gray-900 font-mono">۰۲۱-۹۱۰۰۰۰۰۰</strong></span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
        </div>
        <div className="text-rose-600 font-bold">
          مشاوره رایگان انتخاب روتین پوستی با مشاوران بیوتی
        </div>
      </div>

      {/* ستون‌های راهنما و لینک‌ها */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">راهنمای خرید</h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#order" className="hover:text-rose-600 transition-colors">نحوه ثبت سفارش</a></li>
              <li><a href="#shipping" className="hover:text-rose-600 transition-colors">رویه‌های ارسال کالا</a></li>
              <li><a href="#payment" className="hover:text-rose-600 transition-colors">شیوه‌های پرداخت</a></li>
              <li><a href="#guarantee" className="hover:text-rose-600 transition-colors">ضمانت اصالت برندها</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">خدمات مشتریان</h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#faq" className="hover:text-rose-600 transition-colors">پاسخ به پرسش‌های متداول</a></li>
              <li><a href="#returns" className="hover:text-rose-600 transition-colors">رویه بازگرداندن کالا (۷ روز)</a></li>
              <li><a href="#privacy" className="hover:text-rose-600 transition-colors">حریم خصوصی کاربران</a></li>
              <li><a href="#terms" className="hover:text-rose-600 transition-colors">شرایط و قوانین استفاده</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">با بیوتی‌استور</h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#about" className="hover:text-rose-600 transition-colors">درباره بیوتی‌استور</a></li>
              <li><a href="#contact" className="hover:text-rose-600 transition-colors">تماس با ما</a></li>
              <li><a href="#careers" className="hover:text-rose-600 transition-colors">فرصت‌های شغلی</a></li>
              <li><a href="#blog" className="hover:text-rose-600 transition-colors">مجله و روتین‌های مراقبتی</a></li>
            </ul>
          </div>

          {/* عضویت در خبرنامه و نمادها */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">همراه با ما باشید</h4>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">
              از جدیدترین تخفیف‌های آرایشی و کدهای هدیه زودتر باخبر شوید:
            </p>
            <div className="flex items-center gap-1.5">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید..."
                className="w-full bg-gray-50 border border-gray-200 text-xs px-3 py-2 rounded-xl outline-hidden focus:border-rose-500"
              />
              <button
                type="button"
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors cursor-pointer shrink-0"
              >
                ثبت
              </button>
            </div>

            {/* نمادهای اعتماد */}
            <div className="flex items-center gap-2 mt-6">
              <div className="p-2 border border-gray-100 rounded-xl bg-gray-50 text-[10px] text-gray-500 text-center font-bold">
                ✓ اینماد الکترونیکی
              </div>
              <div className="p-2 border border-gray-100 rounded-xl bg-gray-50 text-[10px] text-gray-500 text-center font-bold">
                ✓ تاییدیه وزارت بهداشت
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* حق کپی رایت پایین صفحه */}
      <div className="bg-gray-50 border-t border-gray-100 py-4 text-center text-xs text-gray-400">
        تمامی حقوق مادی و معنوی این سایت متعلق به فروشگاه آنلاین بیوتی‌استور می‌باشد. © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
