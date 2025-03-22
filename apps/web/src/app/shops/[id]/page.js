"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import BookingModal from "@/components/bookings/BookingModal";
import LiveStream from "@/components/live-stream/LiveStream";

export default function ShopPage() {
  const { id } = useParams();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <main className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-[2000px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            ← Back to Shops
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Live Stream Section */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
                <LiveStream shopId={id} />
              </div>
              <div className="mt-8">
                <h1 className="text-4xl font-bold mb-4">Shop {id}</h1>
                <p className="text-lg text-muted-foreground">
                  Experience our shop virtually through our live 360° camera
                  feed.
                </p>
              </div>
            </div>

            {/* Booking Section */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-lg p-8 sticky top-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Book a Shopping Session
                </h2>
                <div className="space-y-6">
                  <div className="bg-primary/5 rounded-xl p-4">
                    <h3 className="font-medium mb-2">Why Book a Session?</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Personal shopping assistance</li>
                      <li>• Real-time product demonstrations</li>
                      <li>• Direct interaction with staff</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        shopId={id}
      />
    </div>
  );
}
