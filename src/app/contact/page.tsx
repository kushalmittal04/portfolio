"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "./actions";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, {
    message: "",
    errors: undefined,
    success: false,
  });

  const {
    register,
    formState: { errors },
  } = useForm({
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
    } else if (state.message && state.errors) {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I&apos;m open to new opportunities and collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              Feel free to send me a message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register("name")} />
                {errors.name?.message && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
                 {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} />
                 {errors.email?.message && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" {...register("message")} className="min-h-[120px]"/>
                 {errors.message?.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
                {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <Button asChild className="w-full" size="lg">
                  <a href="/resume.pdf" download="resume.pdf">
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Follow Me</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex justify-center items-center gap-6">
                <Link href="https://github.com/demo" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
                <Link href="https://linkedin.com/in/demo" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
                <Link href="https://twitter.com/demo" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
