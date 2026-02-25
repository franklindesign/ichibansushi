"use client";

export default function Card({
  itemName,
  itemDescription,
  itemImage,
  itemPrice,
}: {
  itemName: any;
  itemDescription: any;
  itemImage: any;
  itemPrice: any;
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-white dark:bg-background sm:w-[600] h-50" >
      <div className="flex justify-between items-center">
        <div className="lg:p-8 p-5 -mt-5 lg:w-100 w-50 lg:h-50">
          <div className="text-sm font-semibold  text-(--textPrimary) uppercase">
            {itemName.text}
          </div>
          <p className="lg:pl-1 mt-2 text-black dark:text-(--priceColorDark) text-xs lg:text-sm">${itemPrice}</p>
          <p className="lg:mt-2 lg:pl-1 text-black dark:text-white text-sm lg:text-lg">{itemDescription.text}</p>
        </div>
        <div className="flex justify-end">
          <img
            className="object-cover lg:object-contain sm:h-50 h-50 rounded-2xl"
            src={`${itemImage.image}`}
            alt={`${itemName.text}`}
          />
        </div>
      </div>
    </div>
  );
}
