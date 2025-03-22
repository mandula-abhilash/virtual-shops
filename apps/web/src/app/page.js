import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Visdak Virtual Shops
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Shops */}
          <div className="col-span-full mb-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Shops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((shop) => (
                <div key={shop} className="bg-card rounded-lg shadow-md p-4">
                  <div className="aspect-video bg-muted rounded-md mb-3"></div>
                  <h3 className="font-semibold mb-2">Shop Name {shop}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Experience virtual shopping with our latest collection.
                  </p>
                  <Link
                    href={`/shops/${shop}`}
                    className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90"
                  >
                    View Shop
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="col-span-full bg-card rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">👀</div>
                <h3 className="font-semibold mb-2">Browse Shops</h3>
                <p className="text-sm text-muted-foreground">
                  Explore our virtual shops in real-time through live camera
                  feeds
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-2">📅</div>
                <h3 className="font-semibold mb-2">Book a Slot</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule a personal shopping session at your preferred time
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🛍️</div>
                <h3 className="font-semibold mb-2">Shop Live</h3>
                <p className="text-sm text-muted-foreground">
                  Interact with shop staff and explore products in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
