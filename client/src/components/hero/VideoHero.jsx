import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import heroImg from "../../../public/assets/harley-davidson.jpg";

const VideoHero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TEXT SECTION */}
      <section className="bg-[#f6f2ea] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>
            <span className="inline-block bg-red-600 text-white text-xs font-semibold px-4 py-2 mb-6">
              WELCOME TO AUTOBIKE
            </span>

            <h2 className="text-neutral-900 text-4xl md:text-5xl font-extrabold leading-tight mb-8">
              HELPS YOU TO FIND YOUR NEXT <br /> MOTORBIKE EASILY
            </h2>

            <a
              href="/about"
              className="inline-flex items-center gap-2 text-neutral-900 font-semibold hover:text-red-600 transition"
            >
              MORE ABOUT US →
            </a>
          </div>

          {/* Right */}
          <p className="text-neutral-600 leading-relaxed">
            Whether offering organized motorcycling trips to the most beautiful
            places in the world, or training on world championship circuits:
            BMW is your starting point for unique motorcycling experiences.
            Always passionate, inspiring and outstanding in quality and service.
          </p>

        </div>
      </section>

      {/* VIDEO IMAGE SECTION */}
      <section className="relative bg-[#f6f2ea] pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-lg shadow-lg">

            <img
              src={heroImg}
              alt="Video preview"
              className="w-full h-[520px] object-cover"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Play Button */}
            <button
              onClick={() => setOpen(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="
                w-20 h-20 rounded-full
                bg-white
                flex items-center justify-center
                hover:scale-110
                transition
                shadow-lg
              ">
                <Play className="text-red-600 ml-1" size={28} />
              </div>
            </button>

          </div>

        </div>
      </section>

      {/* MODAL */}
      {open && <VideoModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default VideoHero;