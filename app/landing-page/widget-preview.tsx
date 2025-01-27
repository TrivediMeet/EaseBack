import { Button } from "@/components/ui/button";
import { useState } from "react";
import Ratings from "@/components/ratings";
import { X } from "lucide-react";

type WidgetPreviewProps = {
  buttonText: string;
  primaryColor: string;
  buttonRadius: string;
  position: string;
}

const WidgetPreview = ({ buttonText, primaryColor, buttonRadius, position }: WidgetPreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const getPositionStyles = (position: string) => {
    const base = "fixed transition-all duration-300 ";
    switch (position) {
      case "bottom-right":
        return base + "bottom-4 right-4";
      case "bottom-left":
        return base + "bottom-4 left-4";
      case "top-right":
        return base + "top-4 right-4";
      case "top-left":
        return base + "top-4 left-4";
      default:
        return base + "bottom-4 right-4";
    }
  };

  return (
    <div className="relative h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden">
      {/* Mock Browser Header */}
      <div className="bg-gray-200 p-2 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 bg-white rounded px-2 py-1 text-sm text-gray-500">
          preview.yourwebsite.com
        </div>
      </div>

      {/* Widget Button */}
      <div className={getPositionStyles(position)}>
        <Button
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: primaryColor,
            borderRadius: `${buttonRadius}px`,
          }}
          className="text-white shadow-lg"
        >
          {buttonText}
        </Button>
      </div>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4"
            >
              <X className="h-4 w-4" />
            </button>
            
            <h3 className="text-xl font-semibold mb-4">Share your feedback</h3>
            
            <div className="mb-4">
              <p className="mb-2">How would you rate your experience?</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="transition-transform hover:scale-110"
                  >
                    <Ratings rating={value <= rating ? value : 0} count={1} />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us about your experience..."
              className="w-full p-2 border rounded-md mb-4"
              rows={3}
            />

            <Button 
              style={{ backgroundColor: primaryColor }}
              className="w-full text-white"
              onClick={() => setIsOpen(false)}
            >
              Submit Feedback
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetPreview;