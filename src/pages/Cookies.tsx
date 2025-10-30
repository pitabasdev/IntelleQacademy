import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientText } from "@/components/aceternity/GradientText";
import { TextReveal } from "@/components/aceternity/TextReveal";
import { Link } from "wouter";
import { ArrowLeft, Cookie, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Cookies() {
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
            Cookie <GradientText>Policy</GradientText>
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
                <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-semibold mb-2">
                    What are Cookies?
                  </p>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                How We Use Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                IntelleQacademy uses cookies to enhance your browsing experience and improve our services. Here's how we use them:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your login status and preferences</li>
                <li>Analyze site traffic and user behavior</li>
                <li>Personalize content and course recommendations</li>
                <li>Improve website performance and functionality</li>
                <li>Deliver targeted advertising (with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-primary" />
                Types of Cookies We Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Essential Cookies</h4>
                    <Badge>Required</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Performance Cookies</h4>
                    <Badge variant="secondary">Optional</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting anonymous information about pages visited, time spent, and any errors encountered.
                  </p>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Functional Cookies</h4>
                    <Badge variant="secondary">Optional</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
                  </p>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Targeting/Advertising Cookies</h4>
                    <Badge variant="secondary">Optional</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies are used to deliver advertisements relevant to you and your interests. They also help limit the number of times you see an advertisement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Third-Party Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                We use services from trusted third-party providers that may also set cookies on your device:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>YouTube:</strong> For embedded video content in our courses</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and authentication</li>
                <li><strong>Payment Processors:</strong> To facilitate secure transactions</li>
                <li><strong>Marketing Tools:</strong> For email campaigns and retargeting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Managing Your Cookie Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                You have control over which cookies you accept:
              </p>
              <div className="space-y-3 mt-4">
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Browser Settings</h4>
                  <p className="text-sm">
                    Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.
                  </p>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Our Cookie Banner</h4>
                  <p className="text-sm">
                    When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                  </p>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Opt-Out Links</h4>
                  <p className="text-sm">
                    You can opt-out of targeted advertising cookies through industry opt-out platforms like the Digital Advertising Alliance or Network Advertising Initiative.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm border-l-4 border-primary pl-4 italic">
                Please note that disabling certain cookies may affect the functionality of our website and your ability to access some features.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-primary" />
                Cookie Retention Period
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (ranging from days to years)</li>
                <li><strong>Third-Party Cookies:</strong> Retention periods vary by provider</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Updates to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We encourage you to review this page periodically.
              </p>
              <p className="mt-4">
                Changes to this policy will be posted on this page with an updated "Last updated" date at the top.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2 mt-3">
                <p className="font-semibold text-foreground">
                  Email: privacy@intelleqacademy.com
                </p>
                <p className="font-semibold text-foreground">
                  Phone: +1 (800) 123-4567
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
