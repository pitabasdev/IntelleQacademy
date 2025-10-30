import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { GradientText } from "../components/aceternity/GradientText";
import { TextReveal } from "../components/aceternity/TextReveal";
import { Link } from "wouter";
import { ArrowLeft, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function Cancellations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card/30 py-20 mt-[-95px] sm:mt-[-90px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <TextReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Cancellation & <GradientText>Refund Policy</GradientText>
          </h1>
        </TextReveal>
        
        <TextReveal delay={0.2}>
          <p className="text-center text-muted-foreground mb-12">
            Last updated: October 27, 2025
          </p>
        </TextReveal>

        <div className="space-y-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-semibold mb-2">
                    Important Notice
                  </p>
                  <p className="text-muted-foreground">
                    We recommend carefully reviewing our course details and free preview sessions before enrollment. Our refund policy is designed to be fair to both students and IntelleQacademy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                7-Day Money-Back Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                We offer a 7-day money-back guarantee for most of our courses. If you're not satisfied with the course within the first 7 days of enrollment, you can request a full refund.
              </p>
              <div className="bg-accent/10 p-4 rounded-lg space-y-2">
                <p className="font-semibold text-foreground">Eligibility Criteria:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Refund request must be made within 7 days of enrollment</li>
                  <li>Less than 30% of course content has been accessed</li>
                  <li>No certificates have been issued</li>
                  <li>Valid reason must be provided for the refund request</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                Partial Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                After the 7-day guarantee period, refunds may be considered on a case-by-case basis with reduced refund amounts based on course progress.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span>8-14 days after enrollment</span>
                  <Badge variant="secondary">50% Refund</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span>15-30 days after enrollment</span>
                  <Badge variant="secondary">25% Refund</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span>After 30 days</span>
                  <Badge variant="secondary">No Refund</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                Non-Refundable Items
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                The following purchases are non-refundable under any circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lifetime access packs (Golden Pass, Value Packs)</li>
                <li>Courses purchased during flash sales or special promotions</li>
                <li>Add-on services such as 1:1 mentorship sessions</li>
                <li>Physical materials or kits that have been shipped</li>
                <li>Courses where certificates have already been issued</li>
                <li>Bundled courses after individual course completion</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                To request a refund, please follow these steps:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Submit Request</p>
                    <p>Email us at refunds@intelleqacademy.com with your enrollment details and reason for refund</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Review Process</p>
                    <p>Our team will review your request within 3-5 business days</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Approval & Processing</p>
                    <p>If approved, refunds will be processed within 7-10 business days to the original payment method</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Course Cancellation by IntelleQacademy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                In rare cases where we need to cancel a course, students will be offered:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full refund of the course fee</li>
                <li>OR transfer to an equivalent course at no additional cost</li>
                <li>OR course credit for future enrollments</li>
              </ul>
              <p className="mt-4">
                Students will be notified at least 7 days before the scheduled course start date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Contact Support
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                For any questions regarding cancellations or refunds, please contact:
              </p>
              <div className="space-y-2 mt-3">
                <p className="font-semibold text-foreground">
                  Email: refunds@intelleqacademy.com
                </p>
                <p className="font-semibold text-foreground">
                  Phone: +1 (800) 123-4567
                </p>
                <p className="text-sm">
                  Business Hours: Monday - Friday, 9:00 AM - 6:00 PM (EST)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
