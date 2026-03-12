import { X } from "lucide-react";

const VideoModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-red-600 transition"
      >
        <X size={32} />
      </button>

      {/* Video */}
      <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
          title="Autobike Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

    </div>
  );
};

export default VideoModal;