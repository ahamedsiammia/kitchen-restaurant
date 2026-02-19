import Image from "next/image";
import Link from "next/link";

const getSingleFood = async (id) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)

  const data = await res.json();
  return data?.details || [];
};

const FoodsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);
console.log(food);
  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Food Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Button */}
      <Link
        href="/foods"
        className="inline-block mb-8 text-amber-500 hover:underline"
      >
        ← Back to Foods
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            {food.title}
          </h1>

          <div className="flex gap-4">
            <span className="bg-amber-100 text-amber-600 px-4 py-1 rounded-full text-sm">
              {food.category}
            </span>
            <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm">
              {food.area}
            </span>
          </div>

          <p className="text-3xl font-bold text-amber-500">
            ${food.price}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl transition">
              Add to Cart
            </button>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-xl transition"
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsDetailsPage;
