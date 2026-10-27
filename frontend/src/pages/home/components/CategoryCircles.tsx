import type { CategoryItem } from '../../../types/product';

const categories: CategoryItem[] = [
  {
    id: 1,
    title: 'کرم و ضدآفتاب',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=300&auto=format&fit=crop&q=80',
    itemCount: '+۱۵۰ محصول'
  },
  {
    id: 2,
    title: 'آرایش صورت و کرم‌پودر',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&auto=format&fit=crop&q=80',
    itemCount: '+۲۱۰ محصول'
  },
  {
    id: 3,
    title: 'سرم‌های پوستی',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&auto=format&fit=crop&q=80',
    itemCount: '+۸۵ محصول'
  },
  {
    id: 4,
    title: 'آرایش لب و رژ',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&auto=format&fit=crop&q=80',
    itemCount: '+۳۲۰ محصول'
  },
  {
    id: 5,
    title: 'شامپو و مراقبت مو',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=300&auto=format&fit=crop&q=80',
    itemCount: '+۱۴۰ محصول'
  },
  {
    id: 6,
    title: 'عطر و ادکلن',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&auto=format&fit=crop&q=80',
    itemCount: '+۹۰ محصول'
  }
];

const CategoryCircles = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900">دسته‌بندی‌های محبوب زیبایی</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">محصولات مورد نیاز خود را بر اساس دسته جستجو کنید</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#cat-${cat.id}`}
            className="flex flex-col items-center p-3 rounded-2xl hover:bg-rose-50/50 transition-all group"
          >
            {/* قاب تصویر دایره‌ای شیک با حاشیه رنگی */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border-2 border-rose-200 group-hover:border-rose-500 transition-colors bg-white shadow-xs overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-800 mt-3 text-center group-hover:text-rose-600 transition-colors">
              {cat.title}
            </span>
            <span className="text-[11px] text-gray-400 mt-0.5">
              {cat.itemCount}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryCircles;
