"use client";

import SignUpForm from "@/components/SignUpForm";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-[80px] animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-[80px] animate-float-delayed"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-[80px] animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-100/10 rounded-full blur-[120px] animate-float-alt"></div>

        {/* Animated Dots */}
        <div className="absolute inset-0">
          <div className="absolute top-2 left-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-6 right-12 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-150"></div>
          <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-1/4 w-48 h-[2px] bg-gradient-to-r from-blue-400/50 via-indigo-500/40 to-transparent rotate-[30deg] animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-[2px] bg-gradient-to-r from-blue-400/50 via-indigo-500/40 to-transparent -rotate-[30deg] animate-float-delayed"></div>
      </div>

      <SignUpForm
        onSuccess={() => {
          window.location.href =
            "/login?message=Registration successful! Please sign in.";
        }}
      />
    </div>
  );
}
