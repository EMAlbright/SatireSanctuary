"use client"
import Banner from '../app/components/Banner';
import React from 'react';
import '../app/styles/homeBackground.css';
import Link from 'next/link';

export default function HomePage() {
  
  return (
    <div className="background">

      <div className="header">
      <h1>Satire Sanctuary: Where Based meets Grounded</h1>
     </div>
        <Banner />
       <div className="sectionOne">
        <Link href="/design" className="design">
          <span className="title">Design</span>
        </Link>
        <Link href="/news" className="news">
          <span className="newsTitle">News</span>
        </Link>
        <Link href="/finance" className="finance">
          <span className="financeTitle">Finance</span>
        </Link>
        <Link href="/music" className="music">
          <span className="musicTitle">Music</span>
        </Link>
    </div>
    </div>
  )
}
