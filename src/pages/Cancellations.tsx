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
            Last updated: December 27, 2024
          </p>
        </TextReveal>

        <div className="space-y-6">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-semibold mb-2">
                    Important Notice: Strict No Refund Policy
                  </p>
                  <p className="text-muted-foreground">
                    At IntelleQacademy, we maintain a strict no-refund policy for all our courses and services. 
                    We strongly recommend carefully reviewing course details, attending free preview sessions, 
                    and ensuring course suitability before proceeding with enrollment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                No Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Once a payment is made for any course, program, or service at IntelleQacademy, it is strictly non-refundable under any circumstances.
              </p>
              <div className="bg-accent/10 p-4 rounded-lg space-y-2">
                <p className="font-semibold text-foreground">This policy applies to all:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Individual course enrollments</li>
                  <li>Lifetime access packs (Golden Pass, Value Packs)</li>
                  <li>Course bundles and combo offers</li>
                  <li>Flash sales and promotional offers</li>
                  <li>Add-on services (1:1 mentorship, career guidance)</li>
                  <li>Corporate training programs</li>
                  <li>All other services and products</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Single Exception: Batch Not Assigned
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                The only circumstance under which a refund may be processed is if you have enrolled but have not been assigned to a batch within the promised timeframe.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                  <span>Enrolled but batch not assigned</span>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Full Refund
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Refund Process for This Exception:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Refund request must be submitted via email</li>
                    <li>Verification of non-assignment to any batch</li>
                    <li>Refund will be processed within 7-10 working hours</li>
                    <li>Amount will be credited to original payment method</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                Policy Exceptions That Do NOT Qualify for Refund
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                The following circumstances do NOT qualify for any refund under our policy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Change of mind or personal circumstances after enrollment</li>
                <li>Dissatisfaction with course content or teaching methodology</li>
                <li>Inability to attend live sessions or complete the course</li>
                <li>Technical issues from user's end (internet, device compatibility)</li>
                <li>Job changes or relocation</li>
                <li>Health issues or personal emergencies</li>
                <li>Expectations not matching actual course delivery</li>
                <li>Request for course transfer to another program</li>
                <li>Non-utilization of course materials or resources</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Refund Process for Batch Not Assigned
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                To request a refund under the single exception (batch not assigned), please follow these steps:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Submit Request</p>
                    <p>Email us at support@intelleqacademy.com with your enrollment details and mention "Batch Not Assigned"</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Verification</p>
                    <p>Our team will verify your batch assignment status within 2-4 working hours</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Processing</p>
                    <p>If verified, refund will be processed within 7-10 working hours to the original payment method</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Course Access After Enrollment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Upon successful enrollment and payment, you will receive:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Immediate access to course materials and learning platform</li>
                <li>Batch assignment within 24-48 hours (for upcoming batches)</li>
                <li>Lifetime access to course content (where applicable)</li>
                <li>All promised resources and support services</li>
              </ul>
              <p className="mt-4 text-sm bg-accent/10 p-3 rounded-lg">
                <strong>Note:</strong> If you haven't received batch assignment within 48 hours of enrollment, 
                please contact us immediately for resolution.
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
                For any questions regarding enrollment, batch assignment, or the single exception refund process:
              </p>
              <div className="space-y-2 mt-3">
                <p className="font-semibold text-foreground">
                  Email: support@intelleqacademy.com
                </p>
                <p className="font-semibold text-foreground">
                  Phone: +91 8217668872
                </p>
                <p className="font-semibold text-foreground">
                  WhatsApp: +91 8217668872
                </p>
                <p className="text-sm">
                  Support Hours: Monday - Sunday, 9:00 AM - 9:00 PM (IST)
                </p>
              </div>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Quick Resolution:</strong> For batch assignment issues, please have your 
                  enrollment ID ready when contacting support for faster resolution.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-semibold mb-2">
                    Commitment to Service Quality
                  </p>
                  <p className="text-muted-foreground">
                    While we maintain a strict no-refund policy, we are committed to providing 
                    high-quality education and support. We ensure timely batch assignments, 
                    comprehensive course materials, and dedicated mentorship to help you succeed 
                    in your learning journey with IntelleQacademy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}