import preview from '@/assets/preview/Preview';
import { Card } from '@repo/ui';
import React from 'react';
import {HeroSections1, HeroSections2, HeroSections3, HeroSections4, HeroSections5, HeroSections6} from "@repo/blocks"

import {HeroSecImg1,HeroSecImg2} from "@repo/blocks/assets/index"

export const blocksDesign = [
  {
    id: "hero-section",
    name: "Hero Section",
    url: "/blocks/hero-section",
    des: "Beautiful hero layouts to start your landing page.",
    imgclass: "object-contain",
    imgSrc: preview.heroSec,
    tags: ["hero", "landing", "above-the-fold"],
    blocks: [
      {
        id: "hero-sec1",
        name: "Hero Section 1",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: HeroSecImg1,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections1,
        filePath:[
          "packages/blocks/src/hero-section/hero-section1/index.tsx",
          "packages/blocks/src/hero-section/hero-section1/button.tsx"
        ]
      },
      {
        id: "hero-sec2",
        name: "Hero Section 2",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections2,
        filePath:["packages/blocks/src/hero-section/hero-section2.tsx"]
      },
      {
        id: "hero-sec3",
        name: "Hero Section 3",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections3,
        filePath:["packages/blocks/src/hero-section/hero-section3.tsx"]
      },
      {
        id: "hero-sec4",
        name: "Hero Section 4",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections4,
        filePath:["packages/blocks/src/hero-section/hero-section4.tsx"]
      },
      {
        id: "hero-sec5",
        name: "Hero Section 5",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: HeroSecImg2,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections5,
        filePath:["packages/blocks/src/hero-section/hero-section5.tsx"]
      },
      {
        id: "hero-sec6",
        name: "Hero Section 6",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: HeroSecImg2,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections6,
        filePath:["packages/blocks/src/hero-section/hero-section6.tsx"]
      },
    ],
  },
  {
    id: "about-section",
    name: "About Section",
    url: "/blocks/about-section",
    des: "Beautiful about layouts to start your landing page.",
    imgclass: "object-contain",
    imgSrc: preview.Timeline,
    tags: ["hero", "landing", "above-the-fold"],
    blocks: [
      {
        id: "about-sec1",
        name: "About Section 1",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections1,
        filePath:["packages/blocks/src/about-section/about-section1.tsx"]
      },
      {
        id: "about-sec2",
        name: "About Section 2",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections2,
        filePath:["packages/blocks/src/about-section/about-section2.tsx"]
      },
      {
        id: "about-sec3",
        name: "About Section 3",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections3,
        filePath:["packages/blocks/src/about-section/about-section3.tsx"]
      },
    ],
  },
];

