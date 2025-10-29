import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MapPin, Clock } from "lucide-react";

interface EnrollmentNotification {
  name: string;
  course: string;
  location: string;
  timeAgo: string;
}

const notifications: EnrollmentNotification[] = [
  { name: "Rahul S.", course: "MERN Stack", location: "Mumbai", timeAgo: "2 mins ago" },
  { name: "Priya M.", course: "Data Science", location: "Bangalore", timeAgo: "5 mins ago" },
  { name: "Amit K.", course: "Python Development", location: "Delhi", timeAgo: "8 mins ago" },
  { name: "Sneha P.", course: "Cloud Computing", location: "Pune", timeAgo: "12 mins ago" },
  { name: "Vikram R.", course: "Cybersecurity", location: "Hyderabad", timeAgo: "15 mins ago" },
  { name: "Anjali T.", course: "UI/UX Design", location: "Chennai", timeAgo: "18 mins ago" },
  { name: "Rohan D.", course: "Java Full Stack", location: "Kolkata", timeAgo: "22 mins ago" },
  { name: "Kavya N.", course: "Data Analytics", location: "Ahmedabad", timeAgo: "25 mins ago" },
  { name: "Arjun B.", course: "Ethical Hacking", location: "Jaipur", timeAgo: "30 mins ago" },
  { name: "Divya S.", course: "Generative AI", location: "Surat", timeAgo: "35 mins ago" },

  { name: "Neha G.", course: "Machine Learning", location: "Indore", timeAgo: "38 mins ago" },
  { name: "Siddharth P.", course: "DevOps Engineering", location: "Nagpur", timeAgo: "42 mins ago" },
  { name: "Tanvi R.", course: "Android Development", location: "Noida", timeAgo: "45 mins ago" },
  { name: "Manish K.", course: "React Native", location: "Lucknow", timeAgo: "49 mins ago" },
  { name: "Pooja S.", course: "AI & Deep Learning", location: "Bhubaneswar", timeAgo: "52 mins ago" },
  { name: "Nikhil V.", course: "Blockchain Development", location: "Chandigarh", timeAgo: "56 mins ago" },
  { name: "Ritika C.", course: "Full Stack with Django", location: "Coimbatore", timeAgo: "59 mins ago" },
  { name: "Harshit T.", course: "Software Testing", location: "Patna", timeAgo: "1 hr ago" },
  { name: "Megha L.", course: "Frontend Development", location: "Visakhapatnam", timeAgo: "1 hr 5 mins ago" },
  { name: "Karan J.", course: "AI-Powered Web Apps", location: "Rajkot", timeAgo: "1 hr 10 mins ago" },
];


export function RandomEnrollmentNotification() {
  const [currentNotification, setCurrentNotification] = useState<EnrollmentNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialDelay = setTimeout(showNotification, 10000);

    const interval = setInterval(() => {
      showNotification();
    }, 25000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 w-[90%] sm:w-auto sm:max-w-sm"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                    {currentNotification.name}
                  </p>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium flex-shrink-0">
                    Just enrolled
                  </span>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 line-clamp-1">
                  {currentNotification.course}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{currentNotification.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{currentNotification.timeAgo}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-b-xl overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
