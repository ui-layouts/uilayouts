import preview from '@/assets/preview/Preview';
import { Card } from '@repo/ui';
import React from 'react';
import {HeroSections1, HeroSections2, HeroSections3, HeroSections4} from "@repo/blocks"
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
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections1,
      },
      {
        id: "hero-sec2",
        name: "Hero Section 2",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections2,
      },
      {
        id: "hero-sec3",
        name: "Hero Section 3",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections3,
      },
      {
        id: "hero-sec4",
        name: "Hero Section 4",
        des: "A modern hero section with call-to-action and image.",
        imgSrc: preview.heroSec,
        tags: ["hero", "modern", "cta"],
        componentSrc:HeroSections4,
      },
    ],
  },
];

