"use client";

import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useActionState } from "react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "./actions";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path>
  </svg>
);


const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactPage() {
  const [state, submitAction] = useActionState(submitContactForm, {
    message: "",
    errors: undefined,
    success: false,
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset();
    } else if (state.message && (state.errors?.email || state.errors?.message || state.errors?.name)) {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Feel free to reach out. I'm always happy to connect!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form action={submitAction} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                      {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
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
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                       {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[150px]" placeholder="Your message..." {...field} />
                      </FormControl>
                      <FormMessage />
                      {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                    </FormItem>
                  )}
                />
                <SubmitButton />
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
          <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:kushalmittal2022@gmail.com" className="text-muted-foreground hover:text-primary">
                      kushalmittal2022@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
            </CardContent>
          </Card>
           <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Download Resume</CardTitle>
              <CardDescription>Get a copy of my detailed resume</CardDescription>
            </CardHeader>
            <CardContent>
               <Button asChild className="w-full" size="lg">
                  <a href="/resume.pdf" download="resume.pdf">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
            </CardContent>
          </Card>
          <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle>Follow Me</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex justify-center items-center gap-6">
                <Link href="https://github.com/kushalmittal04" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
                <Link href="https://linkedin.com/in/kushalmittal04" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
                <Link
                    href="mailto:kushalmittal2022@gmail.com"
                    aria-label="Gmail"
                  >
                    <Mail className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                  </Link>
                   <Link
                    href="https://wa.me/7317594114"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                  </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
