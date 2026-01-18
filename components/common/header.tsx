'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const getTimeBasedMessage = () => {
    const hour = new Date().getHours();
    
   if (hour >= 0 && hour < 6) {
  return "The duck is awake too 🌙";
} else if (hour < 12) {
  return "Duck says good morning ☀️";
} else if (hour < 17) {
  return "Duck approved browsing time 👀";
} else if (hour < 21) {
  return "Evening visit — duck approved";
} else {
  return "Duck mode: night shift 🦉";
}

  };
  
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };
  
  const [timeMessage, setTimeMessage] = useState(getTimeBasedMessage());
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Check initial theme
    const theme = document.documentElement.classList.contains('dark');
    setIsDark(theme);
    
    // Update message and time every minute
    const interval = setInterval(() => {
      setTimeMessage(getTimeBasedMessage());
      setCurrentTime(getCurrentTime());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleDarkMode = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="wrapper">
        <div className="flex h-20 items-center justify-between">
          
          {/* LEFT SIDE - Logo + Name */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image 
              src="/idk.png" 
              alt="Duck Logo" 
              width={40} 
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-black text-foreground">Aryan Gupta</span>
          </Link>
          
          {/* RIGHT SIDE - Time, Dark Mode Toggle + CTA */}
          <div className="flex items-center gap-4">
            {/* Time-based Message with Time */}
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                {currentTime}
              </span>
              <span className="text-muted-foreground/40">|</span>
              <span className="text-sm font-medium text-muted-foreground transition-all duration-500">
                {timeMessage}
              </span>
            </div>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              )}
            </button>
            
            {/* CTA Button */}
            <Button asChild className="text-black hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_#0eaebd] transition-transform shadow-[0_2px_4px_rgba(19,218,236,0.2)]">
              <Link href="/form">
                Let's Talk
              </Link>
            </Button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;