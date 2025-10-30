import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";

import { DiscountBar } from "@/components/DiscountBar";
import { RandomEnrollmentNotification } from "@/components/RandomEnrollmentNotification";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import AdvancedProgramDetail from "@/pages/AdvancedProgramDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import GetQuote from "@/pages/GetQuote";
import Career from "@/pages/Career";
import TermsConditions from "@/pages/TermsConditions";
import Cancellations from "@/pages/Cancellations";
import Cookies from "@/pages/Cookies";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses/:id" component={CourseDetail} />
      <Route path="/programs/:id" component={AdvancedProgramDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/quote" component={GetQuote} />
      <Route path="/career" component={Career} />
      <Route path="/terms" component={TermsConditions} />
      <Route path="/cancellations" component={Cancellations} />
      <Route path="/cookies" component={Cookies} />
      
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <DiscountBar />
          <Navbar />
          <main className="flex-1 overflow-x-hidden pt-[108px]">
            <Router />
          </main>
          <Footer />
        </div>
        <Chatbot />
    
        <RandomEnrollmentNotification />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
