import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { AiFillLike } from "react-icons/ai";

const reviews = [
  {
    id: 1,
    name: "Mimansa Popat",
    rating: 5,
    title: "A good morning booster drink",
    text:
      "I started having since mid pandemic. Find it refreshing and a good product. Have had only one spat of viral recently after i made a hospital visit. Feel its effective.",
    date: "06/08/2024",
  },
];

export default function CustomerReview() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="w-full mx-auto px-4 py-20">
      <h2 className="text-2xl font-semibold mb-8">Customer Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SUMMARY */}
        <div className="border rounded-lg p-6">
          <div className="text-5xl font-bold mb-2">5.0</div>

          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
            ))}
          </div>

          <p className="text-sm mb-4">1 Review</p>

          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 mb-1">
              <span className="text-sm w-6 text-yellow-500">{star}★</span>
              <div className="h-2 flex-1 bg-gray-200 rounded">
                <div
                  className={`h-2 rounded bg-yellow-400 ${
                    star === 5 ? "w-full" : "w-0"
                  }`}
                />
              </div>
              <span className="text-sm w-8">{star === 5 ? "100%" : "0%"}</span>
            </div>
          ))}

          <button className="mt-6 w-full bg-gray-800 text-white py-2 rounded">
            Write a review
          </button>
        </div>

        {/* RIGHT REVIEWS */}
        <div className="md:col-span-2">
          {/* FILTERS */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded ${
                filter === "all"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100"
              }`}
            >
              All
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded">
              Review with videos
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded">
              Review with photos
            </button>

            <div className="ml-auto gap-2 text-[14px] flex items-center">
                <p>Sort By</p>
              <select className="border rounded px-3 py-2 bg-gray-100">
                <option>Most helpful</option>
                <option>Highest Rating</option>
                <option>Lowest Rating</option>
                <option>Oldest</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* REVIEW CARD */}
          {reviews.map((r) => (
            <div key={r.id} className="border-b pb-6 mb-6 text-[#303030]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-semibold">
                  {r.name[0]}
                </div>
                <p className="font-semibold">{r.name}</p>
              </div>

              <div className="flex mb-2">
                {[...Array(r.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              <h4 className="font-semibold mb-1 text-start">{r.title}</h4>
              <p className="mb-3 font-medium text-start">{r.text}</p>

              <p className="text-sm text-start">
                Review on {r.date}
              </p>

              <div className="likeButton flex items-center gap-5 mt-4">
                <button className="bg-white border border-[#dedfe6] flex items-center justify-center gap-2
                 px-3 py-1 rounded-sm"><AiFillLike /><span>(0)</span></button>
                 <p>Report</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
