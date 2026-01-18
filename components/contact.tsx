import React from 'react';
import { Send, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function LetsTalkSection() {
  return (
    <div className="py-20 flex flex-col items-center gap-12">
      {/* Title */}
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">
          <span className="text-foreground">Let's </span>
          <span className="text-primary">Talk</span>
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl text-center px-4">
          What led you here? What are you looking for? I would love to hear from you over a virtual coffee chat!
        </p>
      </div>

      {/* CTA Button */}
      <Link href="/form">
        <button className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-black bg-primary rounded-md hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_#0eaebd] transition-transform shadow-[0_2px_4px_rgba(19,218,236,0.2)]">
          <span>Let's get in touch</span>
          <Send className="w-5 h-5" />
        </button>
      </Link>
    </div>
  );
}