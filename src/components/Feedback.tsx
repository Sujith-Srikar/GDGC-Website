import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

import tf from "/images/tensorflow.svg";
import fb from "/images/firebase.svg";
import gcloud from "/images/gcloud.svg";
import flutter from "/images/flutter.svg";

const FeedbackForm = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [thoughts, setThoughts] = useState("");

  const emojis = ["😄", "🙂", "😐", "🙁"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the mailto link
    const subject = encodeURIComponent("Feedback / Suggestion");
    const body = encodeURIComponent(
      `Emoji: ${
        selectedEmoji !== null ? emojis[selectedEmoji] : "None"
      }\n\nThoughts: ${thoughts}`
    );
    // Construct the Gmail compose link
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=kandregulasujith@gmail.com&su=${subject}&body=${body}`;

    // Redirect to Gmail compose page
    window.open(gmailLink, "_blank");

    // You could also send this to your backend, but here it's handled by the mailto redirect
  };

  return (
    <div className="relative w-full h-screen bg-[#ffffff] mt-2 bg-grid-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      {/* Grid background
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] gap-px">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="bg-white"></div>
        ))}
      </div> */}

      {/* TensorFlow logo */}
      <div className="absolute top-8 left-16 w-16 h-16 transform -rotate-12 hidden md:block">
        <img src={tf} alt="TensorFlow Logo" width={64} height={64} />
      </div>

      {/* Google Cloud logo */}
      <div className="absolute top-6 right-12 w-16 h-16 transform rotate-12 hidden md:block">
        <img src={gcloud} alt="Google Cloud Logo" width={64} height={64} />
      </div>

      {/* Firebase logo */}
      <div className="absolute bottom-20 left-16 w-16 h-16 transform rotate-45 hidden md:block">
        <img src={fb} alt="Firebase Logo" width={64} height={64} />
      </div>

      {/* Flutter logo */}
      <div className="absolute bottom-28 right-20 w-16 h-16 transform -rotate-12 hidden md:block">
        <img src={flutter} alt="Flutter Logo" width={64} height={64} />
      </div>

      {/* Feedback form card */}
      <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[28vw] shadow-xl bg-white">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Any feedback / Suggestion
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            What do you think of this Community?
          </p>

          <div className="flex justify-between items-center mb-6">
            {emojis.map((emoji, index) => (
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
            className="mb-4 border border-grey-700"
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

export default FeedbackForm;