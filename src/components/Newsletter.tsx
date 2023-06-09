"use client";

import React from "react";

export const Newsletter = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <section className="newsletter">
      <div className="newsletter-background">Newsletter</div>
      <h1>Subscribe Our Newsletter</h1>
      <p>Get the latest information and promo offers directly</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email address"></input>
        <button type="submit">Get Started</button>
      </form>
    </section>
  );
};
