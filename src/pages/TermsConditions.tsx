import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientText } from "@/components/aceternity/GradientText";
import { TextReveal } from "@/components/aceternity/TextReveal";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsConditions() {
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
            Terms & <GradientText>Conditions</GradientText>
          </h1>
        </TextReveal>
        
        <TextReveal delay={0.2}>
          <p className="text-center text-muted-foreground mb-12">
            Last updated: October 27, 2025
          </p>
        </TextReveal>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                1. Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                By accessing and using IntelleQacademy's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                2. Course Enrollment & Access
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Upon successful enrollment in any IntelleQacademy course or program, you will receive access credentials to our learning platform. Course access is granted for the duration specified in your enrollment agreement.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Students must complete registration and payment before accessing course materials</li>
                <li>Course materials are for personal use only and may not be shared or distributed</li>
                <li>Access to live sessions requires active enrollment status</li>
                <li>Lifetime access packs provide perpetual access to course content as long as the platform exists</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                3. Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                All fees are stated in the currency specified at the time of purchase. Payment must be made in full before course access is granted unless otherwise specified in a payment plan agreement.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prices are subject to change without prior notice</li>
                <li>EMI and installment options may be available for select courses</li>
                <li>Any promotional pricing is valid only for the period specified</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                4. Intellectual Property Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                All course materials, including but not limited to videos, documents, code, and assignments, are the intellectual property of IntelleQacademy and are protected by copyright laws.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Students may not reproduce, distribute, or sell course materials</li>
                <li>Recording of live sessions is prohibited without written permission</li>
                <li>Projects completed during the course remain the student's intellectual property</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                5. Code of Conduct
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Students are expected to maintain professional and respectful behavior in all interactions within the IntelleQacademy community.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Harassment, discrimination, or abusive language will not be tolerated</li>
                <li>Students must respect the time and expertise of instructors and mentors</li>
                <li>Plagiarism and academic dishonesty may result in immediate termination</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                6. Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Certificates are awarded upon successful completion of course requirements, including assignments, projects, and assessments as specified in the course curriculum.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimum attendance and participation requirements must be met</li>
                <li>All assignments and projects must be submitted on time</li>
                <li>Certificates are digital and can be shared on professional networks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                7. Placement Assistance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                IntelleQacademy provides placement assistance to eligible students, including resume building, mock interviews, and company referrals. However, we do not guarantee job placement.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Placement assistance is available to students who complete the course successfully</li>
                <li>Students must actively participate in the placement process</li>
                <li>Final hiring decisions are made solely by the hiring companies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                8. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                IntelleQacademy shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                9. Modifications to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                IntelleQacademy reserves the right to modify these terms at any time. We will notify users of any material changes via email or platform notifications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                10. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="font-semibold text-foreground">
                Email: support@intelleqacademy.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
