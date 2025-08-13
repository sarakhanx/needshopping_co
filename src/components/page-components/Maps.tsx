// components/page-components/Maps.tsx
"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface InteractiveMapProps {
  locations: Array<{
    name: string;
    address: string;
    coordinates?: { lat: number; lng: number };
    phone?: string;
  }>;
  className?: string;
}

const Maps = ({ locations, className = "" }: InteractiveMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const currentLocation = locations[selectedLocation];
  const getMapUrl = () => {
    if (currentLocation.coordinates) {
      return `https://maps.google.com/maps?width=100%25&height=400&hl=th&q=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    } else {
      return `https://maps.google.com/maps?width=100%25&height=400&hl=th&q=${encodeURIComponent(
        currentLocation.address
      )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    }
  };

  return (
    <div className={`w-full ${className}`}>
        <div className="text-center mt-8">
            <h2 className="text-3xl font-bold prompt-r text-teal-500 mb-4">พบกับเราได้ทั้ง 4 สาขา สะดวกที่ไหนไปที่นั่น <br />พร้อมจัดส่งทั่วประเทศ</h2>
        </div>
      {/* ✅ Desktop: Flex Layout, Mobile: Tab Layout */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-6">
        {/* Location Tabs/Selector */}
        <div className="md:w-80 flex-shrink-0">
          {/* ✅ Tab Style Headers */}
          {/* ✅ Browser-style Tabs */}
          <div className="flex md:flex-col border-b md:border-b-0 bg-gray-50 md:bg-transparent">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocation(index)}
                className={`relative flex-1 md:flex-none px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  index === selectedLocation
                    ? "bg-white text-blue-600 border-b-2 border-blue-600 md:border-b-0 md:bg-blue-50 md:border-l-4 md:border-l-blue-600"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <div className="text-center md:text-left">
                  <div className="font-semibold">{location.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 hidden md:block">
                    {location.address.split(" ").slice(0, 3).join(" ")}...
                  </div>
                </div>

                {/* ✅ Active Tab Indicator */}
                {index === selectedLocation && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 md:hidden" />
                )}
              </button>
            ))}
          </div>

          {/* ✅ Desktop: Location Details */}
          <div className="hidden md:block bg-white p-4 rounded-b-lg shadow-sm border border-t-0">
            <h3 className="font-bold text-gray-800 mb-2">
              {currentLocation.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {currentLocation.address}
            </p>
            {currentLocation.coordinates && (
              <p className="text-xs text-gray-500">
                📍 {currentLocation.coordinates.lat},{" "}
                {currentLocation.coordinates.lng}
              </p>
            )}

            {/* ✅ Action Buttons */}
            <div className="flex gap-2 mt-4 w-full">
                <Button variant="outline" title="เปิดใน Google Maps" className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${
                  currentLocation.coordinates?.lat ||
                  encodeURIComponent(currentLocation.address)
                },${currentLocation.coordinates?.lng || ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
              >
                เปิดใน Google Maps
              </Link>
                </Button>
              {/* ✅ Call Icon Button */}
              {currentLocation.phone && (
                <Button
                  variant="outline"
                  className="text-xs bg-teal-500 text-white px-3 py-1.5 rounded-md hover:bg-teal-700 transition-colors inline-flex items-center gap-1"
                  title={`โทร ${currentLocation.phone} ตอนนี้`}
                >
                  <Link href={`tel:${currentLocation.phone}`}>
                    📞 โทร
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1">
          <div className="relative">
            <iframe
              src={getMapUrl()}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-b-lg md:rounded-lg shadow-lg"
            />

            {/* ✅ Mobile: Location Info Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg max-w-xs md:hidden">
              <h3 className="font-bold text-gray-800 text-sm mb-1">
                {currentLocation.name}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2">
                {currentLocation.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
