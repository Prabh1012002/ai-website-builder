export default function Home() {
  return (
    <main className="bg-white text-black font-serif">

      {/* HERO */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <img
          src="/home-hero.jpg"
          alt="Eyewear model"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-16 left-10 max-w-xl text-white">
          <h1 className="text-6xl tracking-wide mb-4">
            The Art of Eyewear
          </h1>
          <p className="text-lg opacity-90">
            Precision. Craftsmanship. Modern British Luxury.
          </p>
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 my-24">
        <div className="p-16">
          <h2 className="text-5xl mb-6 leading-tight">
            Handcrafted Frames<br />Built for Modern Life
          </h2>
          <p className="text-lg opacity-80 leading-relaxed">
            Our titanium and acetate frames are engineered with meticulous
            attention to detail. Inspired by timeless British design.
          </p>
        </div>

        <div className="h-[500px] bg-gray-200"></div>
      </section>

      {/* COLLECTION GRID */}
      <section className="px-10 py-24">
        <h3 className="text-4xl mb-12 tracking-wide">Featured Collection</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <div className="h-72 bg-gray-200"></div>
            <h4 className="text-2xl mt-4">Titanium Round</h4>
            <p className="opacity-70">Minimalist precision</p>
          </div>

          <div>
            <div className="h-72 bg-gray-200"></div>
            <h4 className="text-2xl mt-4">Titanium Square</h4>
            <p className="opacity-70">Architectural elegance</p>
          </div>

          <div>
            <div className="h-72 bg-gray-200"></div>
            <h4 className="text-2xl mt-4">Titanium Aviator</h4>
            <p className="opacity-70">Classic modern</p>
          </div>
        </div>
      </section>

      {/* EDITORIAL BANNER */}
      <section className="relative w-full h-[60vh] my-24">
        <div className="absolute inset-0 bg-gray-200"></div>

        <div className="absolute bottom-10 left-10 text-black">
          <h3 className="text-5xl mb-4">Designed in London</h3>
          <p className="text-lg opacity-80 max-w-md">
            A legacy of craftsmanship, reimagined for today.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-24 bg-[#f8f8f8]">
        <h3 className="text-4xl mb-6">Our Philosophy</h3>
        <p className="text-lg opacity-80 max-w-3xl leading-relaxed">
          Eyewear is more than an accessory — it’s a statement of identity.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black px-10 py-10 text-sm opacity-70">
        © 2026 Luxury Eyewear — Editorial Collection
      </footer>

    </main>
  );
}
