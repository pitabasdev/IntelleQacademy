import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact Form
export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({ id: true });
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Corporate Quote Request
export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  organizationName: text("organization_name").notNull(),
  contactPersonName: text("contact_person_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  trainingDomain: text("training_domain").notNull(),
  participants: integer("participants").notNull(),
  message: text("message").notNull(),
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({ id: true });
export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;

// Job Application
export const jobApplications = pgTable("job_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  position: text("position").notNull(),
  resumeUrl: text("resume_url"),
  message: text("message").notNull(),
});

export const insertJobApplicationSchema = createInsertSchema(jobApplications).omit({ id: true });
export type InsertJobApplication = z.infer<typeof insertJobApplicationSchema>;
export type JobApplication = typeof jobApplications.$inferSelect;

// Week Learning Plan Interface
export interface WeekPlan {
  week: number;
  title: string;
  topics: string[];
}

// Course Program Interface (not stored in DB, used for frontend display)
export interface CourseProgram {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  mode: string;
  description: string;
  highlights: string[];
  syllabus?: string[];
  tools?: string[];
  rating?: number;
  mentees?: string;
  price?: number;
  originalPrice?: number;
  weeklyPlan?: WeekPlan[];
  videoUrl?: string;
}

// Testimonial Interface
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  imageUrl?: string;
}

// Job Opening Interface
export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
}
