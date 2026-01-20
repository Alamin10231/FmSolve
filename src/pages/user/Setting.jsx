import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  User,
  Lock,
  Eye,
  Bell,
  Camera,
  Mail,
  CheckCircle2,
  ChevronLeft,
} from "lucide-react"; // Using Lucide for cleaner icons
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router";

const Setting = () => {
  // const {toggle,setToggle} = useState(false);
  const [email] = useState("221902115@student.green.edu.bd");
  const [displayName, setDisplayName] = useState("Md. Al Amin GUB");
  const { toggleTheme } = useTheme();
  // const handleToggle = ()=>{
  //   setToggle(!toggle)
  // }
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50 dark:bg-zinc-950 font-DmSans">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="mt-1">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Settings
            </h2>
            <p className="text-slate-500">
              Manage your account and preferences
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <section className="p-6 bg-white border shadow-sm dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 rounded-xl">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-slate-500" />
              <div>
                <h3 className="text-lg font-semibold">Profile Information</h3>
                <p className="text-sm text-slate-500">
                  Update your account details
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Profile"
                  className="object-cover w-20 h-20 border-2 rounded-full border-slate-100"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-1 text-sm font-medium">Profile Picture</h4>
                <p className="mb-3 text-xs text-slate-500">
                  Upload a photo to personalize your account
                </p>
                <div className="flex items-center gap-4 " type="file">
                  <label className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md cursor-pointer dark:bg-black text-sm hover:bg-gray-50 transition-colors">
                    <Camera size={16} />
                    <span className=" dark:text-black">Change Photo</span>
                    <input type="file" className="hidden" />
                  </label>
                  <span className="text-[10px] text-slate-400 uppercase">
                    JPG, PNG or GIF. Max 2MB.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <input
                    readOnly
                    value={email}
                    className="w-full dark:bg-black dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-500"
                  />
                  <div className="absolute flex items-center gap-1 text-xs font-medium text-green-600 right-3">
                    <CheckCircle2 className="w-4 h-4 " /> Verified
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5">
                  Email cannot be changed. Contact support if needed.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 ">
                  Display Name
                </label>
                <div className="flex gap-2 ">
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full dark:bg-black dark:text-white  border border-slate-200 rounded-lg px-4 py-2.5 text-sm  focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <Button className="px-4 text-white bg-blue-500 hover:bg-blue-700">
                    <CheckCircle2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="p-6 bg-white border shadow-sm dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 rounded-xl">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="w-5 h-5 text-slate-500" />
              <div>
                <h3 className="text-lg font-semibold">Security</h3>
                <p className="text-sm text-slate-500">
                  Manage your password and security settings
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-slate-100">
              <div>
                <p className="text-sm font-medium">Password</p>
                <p className="text-xs text-slate-500">
                  Send a password reset link to your email
                </p>
              </div>
              <Button variant="outline" size="sm" className="flex gap-2">
                <Mail className="w-4 h-4" /> Send Reset Email
              </Button>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-sm font-medium">Sign-in Method</p>
                <p className="text-xs text-slate-500">
                  How you access your account
                </p>
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded dark:bg-gray-700 dark:text-white">
                Google
              </span>
            </div>
          </section>

          <section className="p-6 bg-white border shadow-sm dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 rounded-xl">
            <div className="flex items-center gap-2 mb-6">
              <Eye className="w-5 h-5 text-slate-500" />
              <div>
                <h3 className="text-lg font-semibold">Appearance</h3>
                <p className="text-sm text-slate-500">
                  Customize how the app looks
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Dark Mode</p>
                <p className="text-xs text-slate-500">
                  Use dark theme for the interface
                </p>
              </div>

              <Switch onCheckedChange={toggleTheme}></Switch>
            </div>
          </section>

          <section className="p-6 bg-white border shadow-sm dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 rounded-xl">
            <div className="flex items-center gap-2 mb-6">
              <Bell className="w-5 h-5 text-slate-500" />
              <div>
                <h3 className="text-lg font-semibold">Notifications</h3>
                <p className="text-sm text-slate-500">
                  Manage email notifications
                </p>
              </div>
            </div>

            {[
              "Report Notifications",
              "Lead Notifications",
              "Weekly Digest",
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex justify-between items-center py-4 ${
                  idx !== 2 ? "border-b border-slate-100" : ""
                }`}
              >
                <div>
                  <p className="text-sm font-medium">{item}</p>
                  <p className="text-xs text-slate-500">
                    Get notified about activity
                  </p>
                </div>
                <Switch></Switch>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Setting;
