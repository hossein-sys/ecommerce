import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [cartCount] = useState(3);

  // دسته‌بندی‌های تخصصی آرایشی، بهداشتی و مراقبت پوست و مو
  const beautyCategories = [
    { id: 1, name: 'مراقبت از پوست', icon: '✨', desc: 'ضدآفتاب، آبرسان، سرم روشن‌کننده' },
    { id: 2, name: 'آرایش صورت و لب', icon: '💄', desc: 'کرم‌پودر، رژلب، ریمل، کانسیلر' },
    { id: 3, name: 'مراقبت از مو', icon: '💇‍♀️', desc: 'شامپو، ماسک مو، روغن آرگان، سرم مو' },
    { id: 4, name: 'بهداشت شخصی و بدن', icon: '🧴', desc: 'شامپو بدن، لوسیون، دئودورانت' },
    { id: 5, name: 'عطر و ادکلن', icon: '🌸', desc: 'عطر زنانه، ادکلن مردانه، بادی‌اسپلش' },
    { id: 6, name: 'لوازم برقی شخصی', icon: '⚡', desc: 'سشوار، اتو مو، ماشین اصلاح' },
    { id: 7, name: 'محصولات درمانی و ارگانیک', icon: '🌿', desc: 'ضدجوش، ضدلک، اکو و وگان' },
  ];

  const navLinks = [
    { title: 'پیشنهادات شگفت‌انگیز', href: '#deals', highlight: true },
    { title: 'روتین پوستی', href: '#skincare' },
    { title: 'پرفروش‌ترین‌های آرایشی', href: '#bestsellers' },
    { title: 'برندهای اصل', href: '#brands' },
    { title: 'مشاوره رایگان پوست و مو', href: '#consultation' },
    { title: 'مجله زیبایی', href: '#blog' },
  ];

  return (
    <header className="w-full bg-white border-b border-rose-100 shadow-xs sticky top-0 z-50">
      {/* 1. بنر تبلیغاتی بالای سایت */}
      {showTopBanner && (
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white text-xs sm:text-sm py-2 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 mx-auto">
              <span className="font-bold bg-white/20 px-2.5 py-0.5 rounded-full text-[11px] backdrop-blur-xs">
                جشنواره زیبایی 🌸
              </span>
              <span className="font-medium">
                تا ۵۰٪ تخفیف روی برترین برندهای مراقبت پوست و مو + ارسال رایگان خریدهای بالای ۶۰۰ هزار تومان
              </span>
            </div>
            <button
              onClick={() => setShowTopBanner(false)}
              className="text-white/80 hover:text-white transition-colors cursor-pointer text-lg leading-none"
              aria-label="بستن بنر"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* 2. بخش اصلی هدر (لوگو، سرچ‌بار تخصصی، ورود و سبد) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* سمت راست: دکمه منوی موبایل + لوگو فروشگاه آرایشی */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              aria-label="منوی موبایل"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* لوگو بیوتی‌استور */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-11 h-11 bg-gradient-to-tr from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-md shadow-rose-200 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-gray-900 tracking-tight group-hover:text-rose-600 transition-colors">
                  بیوتی‌استور
                </span>
                <span className="text-[11px] text-rose-500 font-medium">مرجع تخصصی آرایشی و بهداشتی</span>
              </div>
            </a>
          </div>

          {/* سرچ‌بار بزرگ و شبیه آمازون/دیجی‌کالا */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="جستجوی برند (نوتروژینا، لافارر، لورآل)، محصول، روتین پوستی..."
                className="w-full bg-gray-50 text-gray-800 text-sm rounded-2xl pr-11 pl-4 py-2.5 outline-hidden border border-gray-200 focus:border-rose-400 focus:bg-white focus:ring-3 focus:ring-rose-100 transition-all"
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* سمت چپ: ورود/ثبت‌نام + سبد خرید */}
          <div className="flex items-center gap-3">
            {/* ورود / ثبت‌نام */}
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-rose-600 border border-gray-200 rounded-xl hover:border-rose-200 hover:bg-rose-50/50 transition-all cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="hidden sm:inline">ورود | عضویت</span>
            </button>

            <span className="hidden sm:block w-px h-6 bg-gray-200"></span>

            {/* سبد خرید */}
            <a
              href="#cart"
              className="relative p-2.5 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
              aria-label="سبد خرید"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </a>
          </div>

        </div>

        {/* سرچ بار مخصوص موبایل */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="جستجو در میان هزاران محصول آرایشی..."
              className="w-full bg-gray-50 text-gray-800 text-sm rounded-xl pr-10 pl-4 py-2.5 outline-hidden border border-gray-200 focus:border-rose-400 focus:bg-white"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 3. نوار دسته‌بندی و ناوبری تخصصی بیوتی */}
      <nav className="border-t border-rose-50 hidden lg:block bg-white/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm text-gray-700">
            
            <div className="flex items-center gap-6">
              {/* منوی بازشونده دسته‌بندی‌های آرایشی */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center gap-2 font-bold text-gray-800 hover:text-rose-600 py-3 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                  <span>دسته‌بندی محصولات آرایشی و بهداشتی</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* دراپ‌داون دسته‌بندی‌ها با زیرتوضیحات */}
                {isCategoryOpen && (
                  <div className="absolute right-0 top-full mt-1 w-72 bg-white border border-rose-100 rounded-2xl shadow-xl py-2 z-50">
                    {beautyCategories.map((cat) => (
                      <a
                        key={cat.id}
                        href={`#category-${cat.id}`}
                        className="flex items-start gap-3 px-4 py-2.5 text-gray-700 hover:bg-rose-50 hover:text-rose-700 transition-colors"
                      >
                        <span className="text-xl mt-0.5">{cat.icon}</span>
                        <div>
                          <div className="text-sm font-semibold">{cat.name}</div>
                          <div className="text-[11px] text-gray-400 mt-0.5">{cat.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <span className="w-px h-4 bg-gray-200"></span>

              {/* لینک‌های منوی افقی */}
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className={`font-medium transition-colors hover:text-rose-600 ${
                      link.highlight ? 'text-rose-600 font-bold flex items-center gap-1.5' : 'text-gray-600'
                    }`}
                  >
                    {link.highlight && (
                      <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                    )}
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* مشاوره پوستی سریع یا اصالت کالا */}
            <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold bg-rose-50 px-3 py-1.5 rounded-full">
              <span>🌸 ضمانت ۱۰۰٪ اصالت برندها</span>
            </div>

          </div>
        </div>
      </nav>

      {/* 4. منوی کشویی موبایل */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            <div className="p-4 border-b border-rose-100 flex items-center justify-between">
              <span className="font-bold text-gray-900 text-base">منوی محصولات زیبایی</span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                aria-label="بستن منو"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-xs font-bold text-gray-400 mb-2">دسته‌بندی‌های آرایشی و بهداشتی</h3>
                <div className="space-y-1">
                  {beautyCategories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#category-${cat.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-colors"
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <h3 className="text-xs font-bold text-gray-400 mb-2">دسترسی سریع</h3>
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
