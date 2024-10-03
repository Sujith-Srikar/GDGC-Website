import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export const FeedbackForm = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [thoughts, setThoughts] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { selectedEmoji, thoughts });
    // Here you would typically send the data to your backend
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] gap-px">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="bg-white"></div>
        ))}
      </div>

      {/* TensorFlow logo */}
      <div className="absolute top-8 left-8 w-16 h-16 transform -rotate-12">
        <img
          src="../../public/images/layer1.png"
          alt="TensorFlow Logo"
          width={64}
          height={64}
        />
      </div>

      {/* Google Cloud logo */}
      <div className="absolute top-6 right-12 w-16 h-16 transform rotate-12">
        <img
          src="../../public/images/Frame 102.png"
          alt="Google Cloud Logo"
          width={64}
          height={64}
        />
      </div>

      {/* Firebase logo */}
      <div className="absolute bottom-20 left-16 w-16 h-16 transform rotate-45">
        <img
          src="../../public/images/Fire.png"
          alt="Firebase Logo"
          width={64}
          height={64}
        />
      </div>

      {/* Flutter logo */}
      <div className="absolute bottom-12 right-20 w-16 h-16 transform -rotate-12">
        <img
          src="../../public/images/Frame 103.png"
          alt="Flutter Logo"
          width={64}
          height={64}
        />
      </div>

      {/* Feedback form card */}
      <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Any feedback / Suggestion
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            What do you think of this Community?
          </p>

          <div className="flex justify-between mb-6">
            {["😄", "🙂", "😐", "🙁"].map((emoji, index) => (
              <button
                key={index}
                onClick={() => setSelectedEmoji(index)}
                className={`p-2 rounded-full transition-colors ${
                  selectedEmoji === index ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
                aria-label={`Emoji ${index + 1}`}
              >
                <span className="text-3xl">{emoji}</span>
              </button>
            ))}
          </div>

          <p className="text-sm mb-2">
            Do you have any thoughts you'd like to share?
          </p>
          <Textarea
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            className="mb-4"
            rows={4}
          />

          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => {
                setSelectedEmoji(null);
                setThoughts("");
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
