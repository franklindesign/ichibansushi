"use client";

import type { ComponentProps, ComponentType } from "react";
import { useMemo, useState } from "react";
import {
  CakeIcon,
  CalendarDaysIcon,
  CameraIcon,
  CheckIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  GiftIcon,
  GlobeAltIcon,
  HandThumbUpIcon,
  HeartIcon,
  HomeModernIcon,
  LanguageIcon,
  MapPinIcon,
  MoonIcon,
  MusicalNoteIcon,
  NoSymbolIcon,
  ShoppingBagIcon,
  SignalIcon,
  SpeakerWaveIcon,
  Square3Stack3DIcon,
  SunIcon,
  TicketIcon,
  TrashIcon,
  TruckIcon,
  TvIcon,
  UserGroupIcon,
  WalletIcon,
  WifiIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

type AmenityItem = {
  label: string;
  available: boolean;
  icon: ComponentType<ComponentProps<"svg">>;
  accent?: boolean;
};

type AmenitiesListProps = {
  title?: string;
  items?: AmenityItem[];
  initialVisibleCount?: number;
};

const defaultItems: AmenityItem[] = [
  { label: "Health Score A", available: true, icon: HeartIcon, accent: true },
  { label: "Offers delivery", available: true, icon: TruckIcon },
  { label: "Takes reservations", available: true, icon: CalendarDaysIcon },
  { label: "Wheelchair accessible", available: true, icon: UserGroupIcon },
  {
    label: "ADA-compliant main entrance",
    available: true,
    icon: HomeModernIcon,
  },
  { label: "Closed captioning on TVs", available: true, icon: TvIcon },
  //   { label: "ASL proficient", available: false, icon: LanguageIcon },
  { label: "Tipping optional", available: true, icon: CheckIcon },
  { label: "Accepts cash", available: true, icon: WalletIcon },
  //   { label: "Accepts Android Pay", available: false, icon: DevicePhoneMobileIcon },
  //   { label: "Accepts cryptocurrency", available: false, icon: SignalIcon },
  { label: "Casual, Romantic, Classy", available: true, icon: SparkIcon },
  { label: "Casual dress", available: true, icon: ShoppingBagIcon },
  { label: "Great for groups", available: true, icon: UserGroupIcon },
  { label: "Private lot parking", available: true, icon: MapPinIcon },
  { label: "Free Wi-Fi", available: true, icon: WifiIcon },
  { label: "TV", available: true, icon: TvIcon },
  { label: "Women-owned", available: true, icon: UserBadgeIcon },
  { label: "Covered outdoor seating", available: true, icon: CheckIcon },
  { label: "Open to All", available: true, icon: GlobeAltIcon },
  //   { label: "Drive-thru", available: false, icon: TruckIcon },
  {
    label: "Compostable containers available",
    available: true,
    icon: TrashIcon,
  },

  { label: "Offers take-out", available: true, icon: ShoppingBagIcon },
  { label: "Limited vegetarian options", available: true, icon: CheckIcon },
  { label: "Vegan options", available: true, icon: CakeIcon },
  {
    label: "Accessible parking near entrance",
    available: true,
    icon: Square3Stack3DIcon,
  },
  //   { label: "No steps or stairs", available: true, icon: NoSymbolIcon },
  //   { label: "QR code menus available", available: false, icon: XMarkIcon },
  //   { label: "Braille menus available", available: false, icon: XMarkIcon },
  {
    label: "Tipping optional for large parties",
    available: true,
    icon: CheckIcon,
  },
  { label: "Accepts credit cards", available: true, icon: CreditCardIcon },
  //   { label: "Accepts Apple Pay", available: false, icon: DevicePhoneMobileIcon },
  { label: "Outdoor seating", available: true, icon: SunIcon },
  { label: "Moderate noise", available: true, icon: SpeakerWaveIcon },
  { label: "Offers catering", available: true, icon: CheckIcon },
  {
    label: "Great for Lunch, Dinner, Dessert",
    available: true,
    icon: HandThumbUpIcon,
  },
  { label: "Waiter service", available: true, icon: BellIcon },
  { label: "Beer & wine", available: true, icon: MoonIcon },
  { label: "Asian-owned", available: true, icon: GiftIcon },
  { label: "Heated outdoor seating", available: true, icon: CheckIcon },
  { label: "Private dining", available: true, icon: CheckIcon },
  { label: "Happy hour specials", available: false, icon: XMarkIcon },
  { label: "AYCE (All You Can Eat)", available: false, icon: XMarkIcon },
  { label: "Dogs allowed", available: false, icon: NoSymbolIcon },
  { label: "Bike parking", available: false, icon: XMarkIcon },
];

function BellIcon(props: ComponentProps<"svg">) {
  return <TicketIcon {...props} />;
}

function SparkIcon(props: ComponentProps<"svg">) {
  return <MusicalNoteIcon {...props} />;
}

function UserBadgeIcon(props: ComponentProps<"svg">) {
  return <CameraIcon {...props} />;
}

export default function AmenitiesList({
  title = "Amenities and More",
  items = defaultItems,
  initialVisibleCount = 12,
}: AmenitiesListProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = useMemo(() => {
    if (expanded) return items;
    return items.slice(0, initialVisibleCount);
  }, [expanded, initialVisibleCount, items]);

  const columns = useMemo(() => {
    const midpoint = Math.ceil(visibleItems.length / 2);
    return [visibleItems.slice(0, midpoint), visibleItems.slice(midpoint)];
  }, [visibleItems]);

  return (
    <section className="w-full bg-white dark:bg-black px-5 py-8 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-bold text-black dark:text-white sm:text-2xl mb-4">
          {title}
        </h2>

        <div className="mt-8 flex flex-row justify-start items-start flex-wrap gap-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-1">
              {column.map(({ label, available, icon: Icon, accent }) => (
                <div key={label} className="flex items-start gap-4 py-2.5">
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center ${
                      available
                        ? "text-black dark:text-white"
                        : "text-black dark:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5 stroke-[2.2]" />
                  </span>

                  <span
                    className={`text-sm ${
                      accent
                        ? "font-semibold text-black dark:text-white"
                        : available
                          ? "text-slate-900 dark:text-white"
                          : "text-black dark:text-white"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {items.length > initialVisibleCount ? (
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="mt-8 inline-flex rounded-2xl border border-slate-300 bg-white dark:bg-black dark:text-white px-5 py-3 text-lg font-medium text-black transition  "
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        ) : null}
      </div>
    </section>
  );
}
