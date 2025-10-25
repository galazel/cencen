import { PopcornIcon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { notificationTexts } from "../../../constants";

export default function Notification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % notificationTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [notificationTexts.length]);

  if (!isVisible) return null;

  return (
    <header className="">
      <Alert className="border-none rounded-none px-5 bg-black w-full text-white">
        <AlertTitle>{notificationTexts[currentIndex]}</AlertTitle>
      </Alert>
    </header>
  );
}
