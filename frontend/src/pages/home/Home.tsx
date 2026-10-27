import HeroSlider from './components/HeroSlider';
import FeatureBadges from './components/FeatureBadges';
import SpecialDeals from './components/SpecialDeals';
import CategoryCircles from './components/CategoryCircles';
import PromoBanners from './components/PromoBanners';
import PopularProducts from './components/PopularProducts';
import BrandShowcase from './components/BrandShowcase';

const Home = () => {
  return (
    <main className="flex-1 space-y-2">
      {/* ۱. اسلایدر اصلی + بنرهای جانبی (Hero Slider & Side Banners) */}
      <HeroSlider />

      {/* ۲. نشان‌های اعتماد و خدمات (Feature Badges) */}
      <FeatureBadges />

      {/* ۳. پیشنهادهای شگفت‌انگیز با تایمر معکوس (Special Deals / Lightning Deals) */}
      <SpecialDeals />

      {/* ۴. دسته‌بندی‌های دایره‌ای محبوب (Category Circles) */}
      <CategoryCircles />

      {/* ۵. بنرهای تبلیغاتی میانی (Mid-page Promo Banners) */}
      <PromoBanners />

      {/* ۶. منتخب و پرفروش‌ترین محصولات آرایشی (Best Sellers & Popular Products) */}
      <PopularProducts />

      {/* ۷. ویترین محبوب‌ترین برندها (Brand Showcase) */}
      <BrandShowcase />
    </main>
  );
};

export default Home;
