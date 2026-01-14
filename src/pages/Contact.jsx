import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full py-24 bg-slate-100 dark:bg-[#0f172a] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Let's Talk
          </h2>
          <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-400">
            Ready to strengthen your FM operations? Get in touch and we'll
            arrange a conversation with one of our senior consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Side: Contact Form */}
          <div className="p-8 border bg-slate-200/20 dark:bg-slate-900/50 rounded-2xl border-slate-300 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-8 text-slate-600 dark:text-slate-300">
              <MessageSquare className="w-5 h-5" />
              <h3 className="text-xl font-semibold">Send us a message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-400">
                    Your name *
                  </label>
                  <Input
                    placeholder="John Smith"
                    className="bg-white border dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-400">
                    Email address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-white border dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-400">
                    Company
                  </label>
                  <Input
                    placeholder="Your company"
                    className="bg-white border dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-400">
                    Phone number
                  </label>
                  <Input
                    placeholder="+44 7123 456789"
                    className="bg-white border dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-400">
                  What service are you interested in? *
                </label>
                <Select>
                  <SelectTrigger className="bg-white border dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-400">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white">
                    <SelectItem value="diagnostic">
                      Diagnostic & Scoping
                    </SelectItem>
                    <SelectItem value="remote">Remote Consulting</SelectItem>
                    <SelectItem value="onsite">On-Site Support</SelectItem>
                    <SelectItem value="fixed">
                      Fixed-Price Task Delivery
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-400">
                  How can we help? *
                </label>
                <Textarea
                  placeholder="Tell us about your FM challenges..."
                  className="bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 min-h-[150px] text-slate-900 dark:text-white"
                />
              </div>

              <Button className="w-full py-6 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-10">
              <h3 className="text-2xl font-bold">Other ways to reach us</h3>

              <div className="flex gap-6">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 rounded-lg bg-blue-600/10">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-bold">Phone</h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-400">
                    +44 (0) 20 7123 4567
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Monday to Friday, 9am - 5pm GMT
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 rounded-lg bg-blue-600/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-bold">Email</h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-400">
                    hello@fmsolve.com
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 rounded-lg bg-blue-600/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-bold">Location</h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-400">
                    United Kingdom
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Serving clients nationwide
                  </p>
                </div>
              </div>
            </div>

            {/* Prefer a call? box */}
            <div className="p-8 mt-12 border rounded-2xl border-blue-900/30 bg-blue-200/10 dark:bg-blue-950/20">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 mt-1 text-blue-500" />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold">Prefer a call?</h4>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-400">
                      Book a 30-minute consultation with one of our senior FM
                      consultants. No obligation, just a conversation about your
                      challenges.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-transparent dark:text-white border-slate-700 hover:bg-slate-800"
                  >
                    <Phone className="w-4 h-4 mr-2 dark:text-white" />
                    Book a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
