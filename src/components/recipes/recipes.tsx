import Image from "next/image";

const recipes = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    imageSrc:
      "https://images.unsplash.com/photo-1563865436874-9aef32095fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    imageSrc:
      "https://images.unsplash.com/photo-1563865436874-9aef32095fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "/asd",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    imageSrc:
      "https://images.unsplash.com/photo-1563865436874-9aef32095fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    imageAlt: "Front of plain black t-shirt.",
  },
];

export default function Recipes() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {recipes.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
