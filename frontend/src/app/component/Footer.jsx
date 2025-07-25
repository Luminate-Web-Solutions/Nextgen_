'use client';

import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <img src="/Footerlogo.png" alt="NextGen Dynamix" className="h-12 mb-4" />
          <p className="font-semibold text-lg mb-2">NextGen Dynamix</p>
          <p className="text-sm text-gray-300">
            Delivering expert Mechanical Maintenance Services for Manufacturing, Food Processing, Joinery, and Industrial Automation sectors.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="tel:+1234567890" aria-label="Phone">
              <Phone size={20} />
            </a>
            <a href="mailto:info@nextgendynamix.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/service/7">Preventive Maintenance</Link></li>
            <li><Link href="/service/7">Emergency Breakdown Support</Link></li>
            <li><Link href="/service/1">CNC & Edgebander Machinery Repairs</Link></li>
            <li><Link href="/service/6">Retrofit and Upgrades</Link></li>
            <li><Link href="/service/6">Machinery Installation & Commissioning</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#F5F5F5] text-center text-xs text-black py-3">
        © 2025 NextGen Dynamix. All rights reserved. Created by{' '}
        <a
          href="https://luminatewebsol.com"
          className="underline hover:text-[#b87c3e]"
          target="_blank"
        >
          Luminate Web Solutions
        </a>
      </div>
    </footer>
  );
}
