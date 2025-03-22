"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import BookingModal from "@/components/bookings/BookingModal";
import LiveStream from "@/components/live-stream/LiveStream";

export default function ShopPage() {
  const { id } = useParams();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Stream Section */}
          <div className="lg:col-span-2">
            <LiveStream shopId={id} />
            <h1 className="text-2xl font-bold mt-4 mb-2">Shop {id}</h1>
            <p className="text-muted-foreground mb-4">
              Experience our shop virtually through our live 360° camera feed.
            </p>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Book a Shopping Session
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a personal shopping session with our staff for a guided
                experience.
              </p>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90"
              >
                Book Now
              </button>
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
