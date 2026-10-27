const features = [
  {
    id: 1,
    title: 'ضمانت ۱۰۰٪ اصالت کالا',
    desc: 'تمامی محصولات دارای برچسب اصالت و تاییدیه وزارت بهداشت',
    icon: (
      <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'مشاوره تخصصی پوست و مو',
    desc: 'پاسخگویی کارشناسان بیوتی برای انتخاب روتین متناسب با پوست شما',
    icon: (
      <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'ارسال فوری و بسته‌بندی ایمن',
    desc: 'تحویل در کمترین زمان با بسته‌بندی ضدضربه و ضدحرارت',
    icon: (
      <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: '۷ روز ضمانت بازگشت کالا',
    desc: 'امکان مرجوعی بدون قید و شرط در صورت مغایرت یا آسیب',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

const FeatureBadges = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-3xl border border-rose-50 shadow-xs">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-3 rounded-2xl hover:bg-rose-50/40 transition-colors"
          >
            <div className="shrink-0 p-3 bg-rose-50 rounded-2xl">
              {item.icon}
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureBadges;
