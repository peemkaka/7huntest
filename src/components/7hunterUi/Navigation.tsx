'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products/123', label: 'Product Example' },
    { href: '/practice', label: 'Practice' },
    { href: '/todo', label: 'Todo' },
  ];

  return (
    <nav className="bg-gray-100 p-4 mb-6">
      <div className="container mx-auto">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-blue-600 hover:text-blue-800 transition-colors ${
                  pathname === item.href ? 'font-bold border-b-2 border-blue-600' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
