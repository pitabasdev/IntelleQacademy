import { useState } from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { useToast } from "../hooks/use-toast";
import { GradientBackground } from "../components/GradientBackground";
import { GlassCard } from "../components/GlassCard";
import { motion } from "framer-motion";
import { Briefcase, MapPin, DollarSign, Users, Award, Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertJobApplicationSchema, type InsertJobApplication } from "../shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { JobOpening } from "../shared/schema";
import { jobOpeningsData } from "@/data/courses";

export default function Career() {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [filterType, setFilterType] = useState<string>("all");

  const form = useForm<InsertJobApplication>({
    resolver: zodResolver(insertJobApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      position: selectedJob?.title || "",
      resumeUrl: "",
      message: "",
    },
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: InsertJobApplication) => {
      return await apiRequest("POST", "/api/jobs/apply", data);
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying! We'll review your application and get back to you soon.",
      });
      setSelectedJob(null);
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertJobApplication) => {
    applicationMutation.mutate(data);
  };

  const filteredJobs = filterType === "all"
    ? jobOpeningsData
    : jobOpeningsData.filter(job => job.type === filterType);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <GradientBackground variant="hero" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Shape the Future of Learning with Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're looking for passionate trainers, developers, and innovators who love to teach and build.
            </p>
          </motion.div>
        </div>
      </GradientBackground>

      {/* Why Join Us */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work at IntelleQacademy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Impact Thousands",
                description: "Help shape the careers of aspiring tech professionals"
              },
              {
                icon: Award,
                title: "Flexible Work",
                description: "Remote-first culture with flexible hours"
              },
              {
                icon: Briefcase,
                title: "Competitive Pay",
                description: "Industry-leading compensation and benefits"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard>
                  <CardContent className="pt-6 text-center space-y-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-chart-2 rounded-xl flex items-center justify-center mx-auto">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[200px]" data-testid="filter-job-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                <SelectItem value="Full-Time">Full-Time</SelectItem>
                <SelectItem value="Part-Time">Part-Time</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No positions available for this filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <GlassCard>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <CardDescription className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span>{job.salary}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setSelectedJob(job);
                          form.setValue("position", job.title);
                        }}
                        data-testid={`button-apply-${job.id}`}
                      >
                        View Details & Apply
                      </Button>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Can't Find Role */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-chart-2/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't find the right role?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Send your resume to{" "}
            <a href="mailto:hr@intelleqacademy.in" className="text-primary hover:underline">
              hr@intelleqacademy.in
            </a>
            {" "}— we're always open to talent.
          </p>
          <Button size="lg" variant="outline" data-testid="button-email-resume">
            <Mail className="w-5 h-5 mr-2" />
            Email Your Resume
          </Button>
        </div>
      </section>

      {/* Job Application Modal */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedJob.title}</DialogTitle>
                <DialogDescription className="space-y-3 pt-3">
                  <div className="flex flex-wrap gap-3 text-sm">
                    <Badge variant="secondary">{selectedJob.type}</Badge>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span>{selectedJob.salary}</span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                  <p className="text-muted-foreground text-sm">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Apply for this Position</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-applicant-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} data-testid="input-applicant-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Position</FormLabel>
                            <FormControl>
                              <Input {...field} disabled data-testid="input-position" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="resumeUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Resume / Portfolio Link (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="https://drive.google.com/..." {...field} value={field.value ?? ""} data-testid="input-resume-url" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Letter / Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us why you're interested in this role..."
                                className="min-h-[120px]"
                                {...field}
                                data-testid="input-cover-letter"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full" disabled={applicationMutation.isPending} data-testid="button-submit-application">
                        {applicationMutation.isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Briefcase className="w-5 h-5 mr-2" />
                            Submit Application
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
