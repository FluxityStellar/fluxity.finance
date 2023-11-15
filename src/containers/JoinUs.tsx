'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import toast from '../components/CToast';
import CInput from '../components/CInput';
import CButton from '../components/CButton';
import { ExternalPages } from '../constants/externalPages';

import fetch from '../utils/request';

import joinDancing from 'public/images/joinDancing.png';

const validateEmail = (email: string): boolean => {
  const emailRegex = /.+\@.+\..+/;
  return emailRegex.test(email);
};

const JoinUs = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.target.input.value;
    if (!validateEmail(email)) {
      toast('error', 'Enter a valid email address');
      return;
    }

    fetch(ExternalPages.FLUXITY_API + '/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        toast('success', 'Subscription successful!');
      })
      .catch((error) => {
        toast('error', error.data.message + '.');
      });
  };

  return (
    <div className="relative z-30 flex xxl:justify-center justify-between items-center xxl:gap-10 gap-1 w-full">
      <div className="pl-[160px] py-[180px] z-20">
        <div className="text-MidnightBlue mb-10">
          <h3 className="font-medium xxl:text-[56px] text-[48px] tracking-[0] leading-[73.4px] mb-6">
            Join Fluxity Today
          </h3>
          <p className="xxl:text-2xl text-xl xxl:w-[540px] w-1/2">
            Ready to step into the future of DeFi? Join Fluxity today and experience the power of
            real-time token streaming. Sign up now and transform the way you handle DeFi
            transactions!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="inline-flex gap-2 w-full">
          <CInput placeholder="Enter your email" name="input" type="email" />
          <CButton type="submit" color="RoyalPurple" content="Join Wait list" />
        </form>
      </div>
      <div className="w-[690px] h-[690px] z-10">
        <Image
          src={joinDancing}
          alt="icon"
          className="select-none"
          fill
          objectFit="contain"
          objectPosition="right"
        />
      </div>
    </div>
  );
};

export default JoinUs;
