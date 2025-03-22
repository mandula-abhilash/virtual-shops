import Link from "next/link";
import Image from "next/image";

const SHOP_PREVIEWS = [
  {
    id: 1,
    name: "Fashion Boutique",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60",
    description: "Explore our curated collection of contemporary fashion.",
  },
  {
    id: 2,
    name: "Jewelry Store",
    image:
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=800&auto=format&fit=crop&q=60",
    description: "Discover unique pieces and timeless designs.",
  },
  {
    id: 3,
    name: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60",
    description: "Transform your space with our elegant home collections.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-[2000px] mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Visdak Virtual Shops
          </h1>

          {/* Featured Shops */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Featured Shops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SHOP_PREVIEWS.map((shop) => (
                <div
                  key={shop.id}
                  className="group relative bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={shop.image}
                      alt={shop.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{shop.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {shop.description}
                    </p>
                    <Link
                      href={`/shops/${shop.id}`}
                      className="inline-flex items-center justify-center bg-primary/10 text-primary hover:bg-primary/20 px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-200"
                    >
                      View Shop
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-gradient-to-b from-card/50 to-background rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
                <div className="text-5xl mb-4">👀</div>
                <h3 className="text-xl font-semibold mb-3">Browse Shops</h3>
                <p className="text-muted-foreground">
                  Explore our virtual shops in real-time through live camera
                  feeds
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-semibold mb-3">Book a Slot</h3>
                <p className="text-muted-foreground">
                  Schedule a personal shopping session at your preferred time
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm">
                <div className="text-5xl mb-4">🛍️</div>
                <h3 className="text-xl font-semibold mb-3">Shop Live</h3>
                <p className="text-muted-foreground">
                  Interact with shop staff and explore products in real-time
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
