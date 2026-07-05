"use client";
import { useRef, useEffect, useCallback, useState, JSX } from "react";
import { flushSync } from "react-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/magnified-doc";
import {
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { toCanvas } from "html-to-image";

// ─── Types ────────────────────────────────────────────────────────────────────
type Phase = "idle" | "opening" | "open" | "closing";
type Dir = "open" | "minimize";
interface Pt {
  x: number;
  y: number;
}
interface App {
  id: string;
  Icon: React.FC;
  label: string;
  accent: string;
  tb: [string, string];
}

// ─── Constants ────────────────────────────────────────────────────────────────
const WIN_W = 420;
const WIN_H = 330;
const DUR = 500;
// DPR is read lazily inside setupCanvas — never at module scope, which would
// run during SSR and either crash or hardcode a value.

// Magnification config
const ICON_BASE = 50;
const ICON_PEAK = 74;
const MAG_RANGE = 130;

// ─── Math ─────────────────────────────────────────────────────────────────────
const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const eioC = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const eIn2 = (t: number) => t * t;
const eOut2 = (t: number) => 1 - (1 - t) * (1 - t);

// ─── Brand SVG Icons ──────────────────────────────────────────────────────────

const SafariIcon: React.FC = () => (
  <svg
    viewBox="0 0 187 186"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <g opacity="0.53" filter="url(#safari_f0)">
      <path
        d="M178.789 95.9556C178.789 106.742 176.583 117.422 172.297 127.387C168.011 137.352 161.729 146.407 153.81 154.034C145.89 161.661 136.489 167.711 126.141 171.838C115.794 175.966 104.704 178.091 93.5041 178.091C82.3043 178.091 71.2141 175.966 60.8668 171.838C50.5195 167.711 41.1177 161.661 33.1983 154.034C25.2788 146.407 18.9967 137.352 14.7107 127.387C10.4247 117.422 8.21875 106.742 8.21875 95.9556C8.21875 74.172 17.2041 53.2807 33.1983 37.8773C49.1924 22.474 70.885 13.8206 93.5041 13.8206C104.704 13.8206 115.794 15.945 126.141 20.0727C136.489 24.2004 145.89 30.2504 153.81 37.8773C161.729 45.5043 168.011 54.5588 172.297 64.5239C176.583 74.4889 178.789 85.1695 178.789 95.9556Z"
        fill="black"
      />
    </g>
    <path
      d="M182.033 88.7031C182.033 100.331 179.743 111.845 175.294 122.587C170.845 133.33 164.324 143.091 156.103 151.313C147.882 159.535 138.122 166.057 127.381 170.506C116.64 174.956 105.127 177.246 93.5009 177.246C70.0207 177.246 47.5022 167.918 30.8992 151.313C14.2962 134.708 4.96875 112.186 4.96875 88.7031C4.96875 65.22 14.2962 42.6986 30.8992 26.0935C47.5022 9.48845 70.0207 0.159796 93.5009 0.15979C105.127 0.159789 116.64 2.45004 127.381 6.89976C138.122 11.3495 147.882 17.8715 156.103 26.0935C164.324 34.3155 170.845 44.0765 175.294 54.819C179.743 65.5616 182.033 77.0754 182.033 88.7031Z"
      fill="url(#safari_p0)"
      stroke="#CDCDCD"
      strokeWidth="0.0930123"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M175.094 88.703C175.094 110.346 166.498 131.103 151.196 146.407C135.894 161.71 115.14 170.308 93.4992 170.308C71.8589 170.308 51.1049 161.71 35.8029 146.407C20.5009 131.103 11.9043 110.346 11.9043 88.703C11.9043 67.06 20.5009 46.3034 35.8029 30.9995C51.1049 15.6956 71.8589 7.0979 93.4992 7.0979C115.14 7.0979 135.894 15.6956 151.196 30.9995C166.498 46.3034 175.094 67.06 175.094 88.703Z"
      fill="url(#safari_p1)"
    />
    <g opacity="0.409" filter="url(#safari_f1)">
      <path
        d="M149.255 41.1124L84.1695 78.9323L43.0176 143.725L103.22 99.1287L149.255 41.1124Z"
        fill="black"
      />
    </g>
    <path
      d="M102.828 98.4727L84.1719 78.9333L150.351 34.4089L102.828 98.4727Z"
      fill="#FF5150"
    />
    <path
      d="M102.828 98.4727L84.1719 78.9333L36.6484 142.997L102.828 98.4727Z"
      fill="#F1F1F1"
    />
    <path
      opacity="0.243"
      d="M36.6484 142.997L102.828 98.4727L150.351 34.4089L36.6484 142.997Z"
      fill="black"
    />
    <defs>
      <filter
        id="safari_f0"
        x="5.8498"
        y="11.4516"
        width="175.308"
        height="169.008"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="1.18448" />
      </filter>
      <filter
        id="safari_f1"
        x="42.3443"
        y="40.4391"
        width="107.585"
        height="103.959"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="0.336661" />
      </filter>
      <linearGradient
        id="safari_p0"
        x1="93.4978"
        y1="177.245"
        x2="93.4978"
        y2="0.159326"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDBDBD" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <radialGradient
        id="safari_p1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(93.8671 76.8039) scale(88.5319 88.543)"
      >
        <stop stopColor="#06C2E7" />
        <stop offset="0.25" stopColor="#0DB8EC" />
        <stop offset="0.5" stopColor="#12AEF1" />
        <stop offset="0.75" stopColor="#1F86F9" />
        <stop offset="1" stopColor="#107DDD" />
      </radialGradient>
    </defs>
  </svg>
);

const ArcIcon: React.FC = () => (
  <svg
    viewBox="0 0 256 219"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <g clipPath="url(#arc_c0)">
      <path
        d="M123.633 0.012C137.469 0.41 149.965 8.532 155.953 21.101L179.714 71.085L180.096 70.119C181.04 67.6277 181.813 65.0751 182.411 62.479L182.743 60.931C186.747 40.911 206.206 27.954 226.263 31.915C231.027 32.8666 235.556 34.7475 239.593 37.4501C243.63 40.1528 247.095 43.6243 249.789 47.6663C252.484 51.7083 254.356 56.2416 255.298 61.0073C256.241 65.773 256.235 70.6776 255.281 75.441C249.944 102.093 236.186 126.828 216.452 146.424L215.827 147.031L224.157 164.545C233.825 184.875 223.808 209.448 202.757 216.344L201.807 216.641L201.082 216.86C197.861 217.767 194.531 218.229 191.185 218.233C184.189 218.233 177.337 216.251 171.422 212.517C165.507 208.782 160.772 203.447 157.765 197.131L151.335 183.613L149.713 184.015C141.021 186.069 132.205 187.207 123.385 187.382L120.98 187.406C112.492 187.406 103.864 186.419 95.2439 184.506L93.5439 184.11L87.3669 197.097C83.202 205.854 75.7633 212.625 66.6539 215.949L65.5539 216.331C60.8094 217.896 55.797 218.482 50.8195 218.055C45.8419 217.628 41.0026 216.197 36.5939 213.847C19.0339 204.513 12.3379 182.661 20.9059 164.612L28.5759 148.483L27.9059 147.833C17.3909 137.46 9.05486 125.67 3.52486 112.996L2.78786 111.263L2.68186 110.982C-4.92914 92.058 4.21086 70.517 23.1229 62.86C37.9569 56.855 54.4009 61.167 64.5129 72.438L64.7029 72.656L89.1489 21.234C92.047 15.0401 96.6111 9.77459 102.331 6.02637C108.05 2.27815 114.7 0.195033 121.536 0.01L122.571 0L123.633 0.012Z"
        fill="white"
      />
      <path
        d="M87.1188 170.045L109.015 123.977C92.2908 120.425 75.4638 110.08 65.9468 97.495L43.0508 145.63C55.7738 156.423 71.0498 164.907 87.1188 170.045Z"
        fill="#1A007F"
      />
      <path
        d="M178.495 96.115C167.495 109.598 152.22 119.598 135.875 123.494L157.702 169.424C173.633 164.044 188.529 155.355 201.392 144.218L178.495 96.115Z"
        fill="#4E000A"
      />
      <path
        d="M43.0504 145.631L31.6024 169.7C25.7744 181.941 30.1534 197.01 42.1534 203.389C54.8774 210.147 70.5324 204.872 76.6704 192.009L87.1184 170.045C70.9841 164.843 56.0165 156.552 43.0504 145.631Z"
        fill="#1A007F"
      />
      <path
        d="M223.941 43.5649C220.703 42.9166 217.37 42.9126 214.131 43.553C210.891 44.1934 207.81 45.4658 205.063 47.2973C202.315 49.1289 199.956 51.4838 198.119 54.2275C196.282 56.9712 195.003 60.05 194.356 63.2879C191.942 75.3579 186.287 86.5979 178.494 96.1499L201.356 144.287C222.459 125.977 238.044 101.047 243.631 73.1499C246.355 59.4949 237.527 46.2539 223.941 43.5649Z"
        fill="#FF9396"
      />
      <path
        d="M135.874 123.494C130.978 124.666 125.978 125.287 120.978 125.287C117.082 125.287 113.048 124.839 109.013 123.977C92.2893 120.425 75.4623 110.08 65.9453 97.4951C63.5653 94.3571 61.6353 91.0811 60.2903 87.7361C55.0833 74.8741 40.4283 68.6681 27.5663 73.8401C14.7043 79.0471 8.49926 93.7021 13.6703 106.563C19.5663 121.183 29.9803 134.597 43.0493 145.631C56.0027 156.551 70.9588 164.843 87.0823 170.045C98.1513 173.596 109.633 175.562 120.944 175.562C133.495 175.562 145.874 173.389 157.667 169.424L135.874 123.494Z"
        fill="#002DC8"
      />
      <path
        d="M213.425 169.596L201.357 144.218L178.495 96.1151L178.461 96.1501C178.461 96.1501 178.461 96.1151 178.495 96.1151L145.255 26.1851C143.215 21.8948 140.001 18.2704 135.985 15.7318C131.969 13.1932 127.316 11.8442 122.565 11.8411C112.875 11.8411 104.048 17.4271 99.8765 26.1861L65.9805 97.4951C75.4975 110.08 92.3245 120.425 109.048 123.977L120.013 100.943C121.048 98.7701 124.151 98.7701 125.186 100.943L135.91 123.494H135.979H135.909L157.737 169.424L168.461 191.975C170.5 196.274 173.719 199.904 177.742 202.444C181.765 204.984 186.427 206.328 191.184 206.32C193.426 206.32 195.667 206.01 197.874 205.389C213.012 201.216 220.184 183.803 213.425 169.596Z"
        fill="#FF536A"
      />
    </g>
    <defs>
      <clipPath id="arc_c0">
        <rect width="256" height="219" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TrelloIcon: React.FC = () => (
  <svg
    viewBox="0 0 179 179"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <g clipPath="url(#trello_c0)">
      <path
        d="M157.947 0.198975H22.731C11.0987 0.198975 1.66446 9.62049 1.64861 21.2528V156.27C1.62611 161.876 3.83726 167.26 7.7934 171.232C11.7495 175.205 17.1249 177.437 22.731 177.437H157.947C163.548 177.43 168.916 175.194 172.866 171.222C176.816 167.251 179.024 161.871 179.001 156.27V21.2528C178.985 9.63158 169.568 0.214626 157.947 0.198975ZM78.1358 127.857C78.1283 129.731 77.3748 131.525 76.0418 132.842C74.7089 134.158 72.9063 134.89 71.0326 134.875H41.4834C37.6186 134.86 34.4939 131.722 34.4939 127.857V39.9199C34.4939 36.0551 37.6186 32.9176 41.4834 32.902H71.0326C74.902 32.9176 78.035 36.0505 78.0505 39.9199L78.1358 127.857ZM146.326 87.4828C146.326 89.3589 145.575 91.157 144.241 92.4756C142.906 93.7942 141.099 94.5235 139.223 94.5012H109.674C105.804 94.4852 102.672 91.3522 102.656 87.4828V39.9199C102.672 36.0505 105.804 32.9176 109.674 32.902H139.223C143.088 32.9176 146.213 36.0551 146.213 39.9199L146.326 87.4828Z"
        fill="url(#trello_p0)"
      />
    </g>
    <defs>
      <linearGradient
        id="trello_p0"
        x1="90.4101"
        y1="177.437"
        x2="90.4101"
        y2="0.198975"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0052CC" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
      <clipPath id="trello_c0">
        <rect width="179" height="179" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const DribbbleIcon: React.FC = () => (
  <svg
    viewBox="0 0 166 166"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <g clipPath="url(#dribbble_c0)">
      <path
        d="M83 166C128.84 166 166 128.84 166 83C166 37.1604 128.84 0 83 0C37.1604 0 0 37.1604 0 83C0 128.84 37.1604 166 83 166Z"
        fill="#FFABE7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5625 82.9875C15.5625 45.7683 45.7465 15.5625 83 15.5625C120.256 15.5625 150.438 45.7955 150.438 83.0124C150.438 120.232 120.254 150.438 83 150.438H77.5298V150.194C42.8576 147.408 15.5625 118.367 15.5625 82.9875ZM84.6771 139.475C115.11 138.587 139.497 113.633 139.497 83.0124C139.497 51.8282 114.206 26.5009 83 26.5009C51.7915 26.5009 26.5028 51.8066 26.5028 82.9875C26.5028 114.168 51.8145 139.475 83 139.475H84.6771Z"
        fill="#B8509A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.6969 33.5818C54.9473 33.3458 54.1697 33.1011 53.3594 32.8264L56.8744 22.468C57.1976 22.5776 57.7791 22.763 58.4576 22.9794C59.6772 23.3683 61.2112 23.8573 62.1247 24.1868L62.1735 24.2045L62.2222 24.2231C62.4723 24.3187 62.7404 24.42 63.0211 24.5262C64.4362 25.0614 66.1824 25.7217 67.6406 26.4037L67.7054 26.434L67.9943 26.5784C68.6807 26.8983 69.7109 27.3895 70.5694 27.7986C71.0513 28.0283 71.4788 28.2321 71.7605 28.3652L71.8912 28.4267L72.0183 28.4952C72.0479 28.5111 72.0826 28.5297 72.1215 28.5506C72.4172 28.709 72.9686 29.0041 73.4978 29.3274L73.643 29.4161L73.684 29.4448C73.7437 29.4796 73.8256 29.526 73.9268 29.5823C74.015 29.6314 74.1 29.6782 74.1851 29.7249C74.2017 29.7341 74.2183 29.7433 74.2349 29.7525C74.2816 29.7782 74.335 29.8076 74.3828 29.8342C74.4066 29.8477 74.4725 29.8841 74.5436 29.9258C74.6084 29.9629 74.7075 30.0196 74.832 30.0906C75.2122 30.3077 75.827 30.6585 76.3981 30.9927C76.9858 31.337 77.8833 31.8674 78.5473 32.3328C79.2585 32.7697 80.0408 33.3114 80.5616 33.6721C80.6555 33.7371 80.7406 33.7962 80.8153 33.8478C81.2157 34.0916 81.6079 34.368 81.8808 34.5635C82.2709 34.8432 82.6957 35.16 83.0832 35.4512C83.2622 35.5858 83.4256 35.7093 83.5802 35.8259C83.7856 35.9811 83.9755 36.1243 84.1643 36.2658C84.3204 36.3826 84.4507 36.4788 84.5554 36.555C84.6073 36.5927 84.6478 36.6216 84.6779 36.643C84.7038 36.6613 84.7163 36.6696 84.7168 36.67L84.8594 36.765L84.9969 36.8696C91.0341 41.4686 96.4104 46.8719 100.999 52.8938L101.004 52.8996L101.008 52.9053C106.081 59.5982 110.086 67.0277 112.864 74.9345C121.14 98.0505 118.706 124.757 105.699 145.838L96.3876 140.095C107.597 121.928 109.756 98.6953 102.559 78.6072L102.553 78.5906L102.547 78.574C100.15 71.7447 96.6874 65.3164 92.2926 59.5167C88.3164 54.3002 83.673 49.6286 78.4767 45.6546C78.1893 45.4552 77.8708 45.2187 77.6099 45.0237C77.4128 44.8762 77.1809 44.7012 76.9521 44.5286C76.7986 44.4128 76.6466 44.298 76.5076 44.1935C76.132 43.9111 75.7906 43.6573 75.5084 43.4548C75.2563 43.2745 75.1515 43.2078 75.1526 43.2068C75.1521 43.2064 75.1526 43.2068 75.1526 43.2068L74.9907 43.1158L74.8009 42.987C74.5218 42.7974 74.2728 42.6252 74.0445 42.4673C73.5439 42.1208 73.1429 41.8434 72.7357 41.6018L72.4696 41.4436L72.2227 41.2564C72.2382 41.2681 72.2367 41.2673 72.2154 41.2529C72.1744 41.2259 72.0619 41.1511 71.8513 41.0202C71.5737 40.8479 71.2329 40.6446 70.8687 40.4314C70.3526 40.1291 69.8826 39.8609 69.5107 39.6487C69.3369 39.5497 69.1849 39.4629 69.0593 39.3906L69.0484 39.3841C69.0287 39.3734 69.0007 39.3577 68.9582 39.3343C68.9452 39.3271 68.9307 39.3192 68.9156 39.3109C68.8311 39.2644 68.7185 39.2023 68.6034 39.1384C68.469 39.0636 68.3061 38.9717 68.1474 38.8789C68.0602 38.828 67.8984 38.7328 67.7173 38.6152C67.4948 38.4825 67.2556 38.3541 66.9714 38.2012C66.9667 38.199 66.9626 38.1967 66.9584 38.1944C66.6181 38.0333 66.1948 37.8314 65.745 37.617C64.899 37.2136 63.9605 36.7662 63.309 36.4632L63.239 36.4306L62.9443 36.2834C61.9115 35.8046 60.6748 35.3358 59.2897 34.8106C58.9888 34.6965 58.6807 34.5797 58.3663 34.4595C57.5125 34.1531 56.6259 33.8741 55.6969 33.5818Z"
        fill="#B8509A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.7333 59.6143C95.2435 56.633 110.479 47.3727 120.899 34.1912L129.482 40.9738C117.44 56.2071 99.8614 66.9146 80.676 70.3789C71.1232 72.1011 61.3069 72.1592 51.7263 70.4027C42.1717 68.6997 32.9519 65.2697 24.6133 60.2622L30.2463 50.8853C37.4319 55.2002 45.3956 58.1649 53.6595 59.6366L53.6735 59.6392L53.688 59.6418C61.9258 61.1534 70.4187 61.1135 78.7333 59.6143Z"
        fill="#B8509A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.5039 138.449C58.8441 90.7885 107.415 64.4676 147.137 75.2945L144.26 85.8474C110.541 76.6572 68.333 99.2566 60.24 140.552L49.5039 138.449Z"
        fill="#B8509A"
      />
    </g>
    <defs>
      <clipPath id="dribbble_c0">
        <rect width="166" height="166" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CommandCodeIcon: React.FC = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 125 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.50444 57.9999C1.83694 95.9098 4.24436 110.144 15.5044 117.5C18 123 92.5 124.5 112.004 117C120.679 111.913 123.224 99.1568 122.504 57.9999C123.97 31.913 121.833 21.5176 113.504 9.9999C102 -9.72748e-05 20.5 -0.499973 14.0044 8.9999C3.41996 18.7487 1.47103 30.3654 2.50444 57.9999Z"
      fill="black"
      stroke="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M63.6641 5.1113H61.3356C46.7342 5.1113 36.2973 5.12216 28.3657 6.18852C20.5813 7.23512 15.9799 9.21338 12.5966 12.5966C9.21338 15.9799 7.23512 20.5813 6.18852 28.3657C5.12216 36.2973 5.1113 46.7342 5.1113 61.3356V63.664C5.1113 78.2655 5.12216 88.7025 6.18852 96.634C7.23512 104.418 9.21338 109.02 12.5966 112.403C15.9799 115.786 20.5813 117.765 28.3657 118.811C36.2973 119.877 46.7342 119.889 61.3356 119.889H63.664C78.2655 119.889 88.7025 119.877 96.634 118.811C104.418 117.765 109.02 115.786 112.403 112.403C115.786 109.02 117.765 104.418 118.811 96.634C119.877 88.7025 119.889 78.2656 119.889 63.6641V61.3356C119.889 46.7342 119.877 36.2973 118.811 28.3657C117.765 20.5813 115.786 15.9799 112.403 12.5966C109.02 9.21338 104.418 7.23512 96.634 6.18852C88.7025 5.12216 78.2656 5.1113 63.6641 5.1113ZM8.98237 8.98237C0 17.9648 0 32.4217 0 61.3356V63.664C0 92.5777 0 107.035 8.98237 116.017C17.9648 125 32.4217 125 61.3356 125H63.664C92.5777 125 107.035 125 116.017 116.017C125 107.035 125 92.5777 125 63.6641V61.3356C125 32.4217 125 17.9648 116.017 8.98237C107.035 0 92.5777 0 63.6641 0H61.3356C32.4217 0 17.9648 0 8.98237 8.98237Z"
      fill="white"
    />
    <path
      d="M86.6391 23C78.1686 23 71.2779 29.8906 71.2779 38.3611V44.9445H53.7223V38.3611C53.7223 29.8906 46.8318 23 38.3611 23C29.8906 23 23 29.8906 23 38.3611C23 46.8318 29.8906 53.7223 38.3611 53.7223H44.9445V71.2779H38.3611C29.8906 71.2779 23 78.1686 23 86.6391C23 95.1094 29.8906 102 38.3611 102C46.8318 102 53.7223 95.1094 53.7223 86.6391V80.0558H71.2779V86.6391C71.2779 95.1094 78.1686 102 86.6391 102C95.1094 102 102 95.1094 102 86.6391C102 78.1686 95.1094 71.2779 86.6391 71.2779H80.0558V53.7223H86.6391C95.1094 53.7223 102 46.8318 102 38.3611C102 29.8906 95.1094 23 86.6391 23ZM80.0558 44.9445V38.3611C80.0558 34.7184 82.9964 31.7778 86.6391 31.7778C90.2821 31.7778 93.2223 34.7184 93.2223 38.3611C93.2223 42.004 90.2821 44.9445 86.6391 44.9445H80.0558ZM38.3611 44.9445C34.7184 44.9445 31.7778 42.004 31.7778 38.3611C31.7778 34.7184 34.7184 31.7778 38.3611 31.7778C42.004 31.7778 44.9445 34.7184 44.9445 38.3611V44.9445H38.3611ZM53.7223 71.2779V53.7223H71.2779V71.2779H53.7223ZM86.6391 93.2223C82.9964 93.2223 80.0558 90.2821 80.0558 86.6391V80.0558H86.6391C90.2821 80.0558 93.2223 82.9964 93.2223 86.6391C93.2223 90.2821 90.2821 93.2223 86.6391 93.2223ZM38.3611 93.2223C34.7184 93.2223 31.7778 90.2821 31.7778 86.6391C31.7778 82.9964 34.7184 80.0558 38.3611 80.0558H44.9445V86.6391C44.9445 90.2821 42.004 93.2223 38.3611 93.2223Z"
      fill="white"
    />
  </svg>
);

const UILayoutsIcon: React.FC = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 129 129"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="129" height="129" rx="23" fill="#1D04FF" />
    <path
      d="M76.724 45.4396L100.075 53.4238C100.4 53.5352 100.619 53.8414 100.619 54.1857V98.9504C100.619 100.488 99.9288 101.834 98.5475 102.987C97.2584 104.064 95.693 104.602 93.8513 104.602H60.5636C58.3536 104.602 56.4659 103.948 54.9005 102.641C53.3351 101.334 52.5525 99.7962 52.5525 98.0277V92.2607C52.5525 90.646 52.092 89.1466 51.1712 87.7625C50.2504 86.3784 48.9612 85.3019 47.3038 84.533C45.7384 83.6872 43.9888 83.2258 42.0551 83.1489H36.2539C34.136 83.1489 32.2944 82.5338 30.729 81.3035C29.1636 79.9963 28.3809 78.42 28.3809 76.5746V33.9461C28.3809 32.3766 29.512 31.0356 31.0591 30.7711L52.8145 27.0518L52.6906 81.0728C52.6906 81.6111 52.8747 82.0724 53.2431 82.4569C53.7035 82.8414 54.256 83.0336 54.9005 83.0336H74.3759C75.0205 83.0336 75.573 82.8414 76.0334 82.4569C76.4938 82.0724 76.724 81.6111 76.724 81.0728V45.4396Z"
      fill="white"
    />
    <path
      d="M52.2777 73.0492L28.3823 72.6874V29.3679C28.3823 27.8705 29.0729 26.5603 30.4542 25.4372C31.7433 24.3891 33.3087 23.865 35.1504 23.865H68.4381C70.6481 23.865 72.5358 24.5014 74.1012 25.7742C75.6666 27.0469 76.4493 28.5443 76.4493 30.2663V35.8815C76.4493 37.4537 76.9097 38.9137 77.8305 40.2613C78.7513 41.609 80.0405 42.6571 81.698 43.4058C83.2634 44.2294 85.0129 44.6786 86.9466 44.7535H92.7478C94.8657 44.7535 96.7074 45.3524 98.2728 46.5503C99.8382 47.8231 100.621 49.3579 100.621 51.1548V98.1828C100.621 100.555 98.6981 102.478 96.3262 102.478H76.3111V46.7749C76.3111 46.2508 76.127 45.8016 75.7586 45.4273C75.2982 45.0529 74.7457 44.8658 74.1012 44.8658H54.6258C53.9812 44.8658 53.4287 45.0529 52.9683 45.4273C52.5079 45.8016 52.2777 46.2508 52.2777 46.7749V73.0492Z"
      fill="white"
    />
  </svg>
);

// ─── Apps ─────────────────────────────────────────────────────────────────────
const APPS: App[] = [
  {
    id: "safari",
    Icon: SafariIcon,
    label: "Safari",
    accent: "#1F86F9",
    tb: ["#0e2238", "#081628"],
  },
  {
    id: "arc",
    Icon: ArcIcon,
    label: "Arc",
    accent: "#FF536A",
    tb: ["#3a1620", "#280f18"],
  },
  {
    id: "trello",
    Icon: TrelloIcon,
    label: "Trello",
    accent: "#0052CC",
    tb: ["#0a1838", "#061026"],
  },
  {
    id: "dribbble",
    Icon: DribbbleIcon,
    label: "Dribbble",
    accent: "#EA4C89",
    tb: ["#3a142e", "#28101f"],
  },
  {
    id: "commandcode",
    Icon: CommandCodeIcon,
    label: "Command Code",
    accent: "#FFFFFF",
    tb: ["#1a1a1a", "#0a0a0a"],
  },
  {
    id: "uilayouts",
    Icon: UILayoutsIcon,
    label: "UI Layouts",
    accent: "#1D04FF",
    tb: ["#0a0838", "#060426"],
  },
];

// ─── Genie scanline renderer ──────────────────────────────────────────────────
function renderGenie(
  ctx: CanvasRenderingContext2D,
  off: HTMLCanvasElement,
  W: number,
  H: number,
  rawT: number,
  dir: Dir,
  dock: Pt,
  win: Pt,
): void {
  ctx.clearRect(0, 0, W, H);
  for (let y = 0; y < WIN_H; y++) {
    const r = y / WIN_H;
    const rowXStart = dir === "minimize" ? (1 - r) * 0.65 : r * 0.65;
    const xP = clamp((rawT - rowXStart) / (1 - rowXStart), 0, 1);
    const xE = eioC(xP);
    const rowYStart = dir === "minimize" ? (1 - r) * 0.2 : r * 0.2;
    const yP = clamp((rawT - rowYStart) / (1 - rowYStart), 0, 1);
    const yE = eIn2(yP);
    let left: number, right: number, destY: number;
    if (dir === "minimize") {
      left = lerp(win.x, dock.x, xE);
      right = lerp(win.x + WIN_W, dock.x, xE);
      destY = lerp(win.y + y, dock.y, yE);
    } else {
      left = lerp(dock.x, win.x, xE);
      right = lerp(dock.x, win.x + WIN_W, xE);
      destY = lerp(dock.y, win.y + y, yE);
    }
    const rowW = right - left;
    if (rowW < 0.8) continue;
    ctx.drawImage(off, 0, y, WIN_W, 1, left, destY, rowW, 1);
  }
  const glowRaw = dir === "minimize" ? rawT : 1 - rawT;
  if (glowRaw > 0.75) {
    const a = eOut2((glowRaw - 0.75) / 0.25) * 0.3;
    const hex = Math.round(a * 255)
      .toString(16)
      .padStart(2, "0");
    const g = ctx.createRadialGradient(dock.x, dock.y, 0, dock.x, dock.y, 55);
    g.addColorStop(0, "#ffffff" + hex);
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }
}

function SafariContent() {
  return (
    <div className="flex flex-col h-full">
      <div
        className="flex items-center gap-1 px-2 py-1.5 border-b border-white/6"
        style={{ background: "rgba(255,255,255,.02)" }}
      >
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] text-white/85"
          style={{ background: "rgba(255,255,255,.08)" }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ background: "#1F86F9" }}
          />
          apple.com
        </div>
        <div className="px-2 py-1 text-[10px] text-white/40">+ New Tab</div>
      </div>
      <div className="px-3 py-2 border-b border-white/[0.06]">
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px]"
          style={{ background: "rgba(255,255,255,.05)" }}
        >
          <span className="text-white/40">🔒</span>
          <span className="text-white/75 flex-1 truncate">
            https://apple.com
          </span>
          <span className="text-white/40">⟳</span>
        </div>
      </div>
      <div className="px-4 pt-4">
        <div
          className="w-full h-28 rounded-xl mb-3 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#1F86F9,#06C2E7)" }}
        >
          <span className="text-white/90 text-xl font-semibold">
            Welcome to Safari
          </span>
        </div>
      </div>
      <div className="px-4 pb-3">
        <div className="text-[9px] text-white/35 uppercase tracking-wider mb-2">
          Frequently Visited
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            ["A", "#e74c3c"],
            ["G", "#3498db"],
            ["Y", "#FFCC00"],
            ["X", "#1DA1F2"],
            ["N", "#000"],
            ["F", "#1877F2"],
            ["S", "#1ED760"],
            ["R", "#FF4500"],
          ].map(([letter, color], i) => (
            <div
              key={i}
              className="aspect-square rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: color }}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArcContent() {
  return (
    <div className="flex h-full">
      <div
        className="w-32 p-2 border-r border-white/6 flex flex-col gap-0.5"
        style={{ background: "rgba(255,255,255,.02)" }}
      >
        <div className="text-[9px] text-white/30 uppercase tracking-wider px-2 py-1">
          Today
        </div>
        {[
          ["#FF536A", "Figma"],
          ["#7B61FF", "GitHub"],
          ["#06C2E7", "Linear"],
          ["#FF9396", "Slack"],
        ].map(([col, n], i) => (
          <div
            key={i}
            className={`px-2 py-1.5 rounded-md text-[10px] flex items-center gap-2 ${
              i === 0 ? "text-white" : "text-white/55"
            }`}
            style={i === 0 ? { background: "rgba(255,83,106,.18)" } : undefined}
          >
            <span
              className="w-2 h-2 rounded-sm flex-shrink-0"
              style={{ background: col as string }}
            />
            <span className="truncate">{n}</span>
          </div>
        ))}
        <div className="text-[9px] text-white/30 uppercase tracking-wider px-2 py-1 mt-2">
          Pinned
        </div>
        {[
          ["#000", "Vercel"],
          ["#FBC500", "Notion"],
        ].map(([col, n], i) => (
          <div
            key={i}
            className="px-2 py-1.5 rounded-md text-[10px] flex items-center gap-2 text-white/55"
          >
            <span
              className="w-2 h-2 rounded-sm flex-shrink-0"
              style={{ background: col as string }}
            />
            <span className="truncate">{n}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <div
          className="rounded-xl p-4 mb-3"
          style={{ background: "linear-gradient(135deg,#FF536A,#FF9396)" }}
        >
          <div className="text-white text-sm font-semibold mb-0.5">
            Design System v2
          </div>
          <div className="text-white/85 text-[10px]">
            Edited 2 hours ago • 14 collaborators
          </div>
        </div>
        <div className="space-y-2 flex-1">
          {[
            ["Buttons & Inputs", "Updated by you"],
            ["Color Tokens", "Updated by Maya"],
            ["Iconography", "Updated by Sam"],
          ].map(([t, sub], i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 p-2 rounded-md"
              style={{ background: "rgba(255,255,255,.04)" }}
            >
              <div
                className="w-7 h-7 rounded-md flex-shrink-0"
                style={{ background: "rgba(255,83,106,.22)" }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] text-white/80">{t}</div>
                <div className="text-[9px] text-white/40">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrelloContent() {
  const cols = [
    {
      title: "To Do",
      tint: "#0052CC",
      cards: [
        { title: "Design dashboard layout", tag: "design", color: "#0052CC" },
        { title: "API integration spec", tag: "backend", color: "#36B37E" },
      ],
    },
    {
      title: "In Progress",
      tint: "#2684FF",
      cards: [{ title: "Genie animation", tag: "frontend", color: "#FF991F" }],
    },
    {
      title: "Done",
      tint: "#36B37E",
      cards: [
        { title: "Setup repo", tag: "ops", color: "#6554C0" },
        { title: "Auth flow", tag: "backend", color: "#36B37E" },
      ],
    },
  ];
  return (
    <div
      className="flex h-full p-2 gap-2 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#0052CC,#2684FF)" }}
    >
      {cols.map((col, ci) => (
        <div
          key={ci}
          className="flex-1 min-w-0 rounded-lg p-2"
          style={{ background: "rgba(0,0,0,.18)" }}
        >
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[10px] font-semibold text-white/85">
              {col.title}
            </span>
            <span className="text-[9px] text-white/45">{col.cards.length}</span>
          </div>
          <div className="space-y-1.5">
            {col.cards.map((c, i) => (
              <div
                key={i}
                className="rounded-md p-2 bg-white"
                style={{ boxShadow: "0 1px 0 rgba(0,0,0,.1)" }}
              >
                <div className="text-[11px] text-foreground leading-tight mb-1.5">
                  {c.title}
                </div>
                <span
                  className="inline-block text-[8px] px-1.5 py-0.5 rounded text-white font-medium"
                  style={{ background: c.color }}
                >
                  {c.tag}
                </span>
              </div>
            ))}
            <div
              className="rounded-md p-2 text-[10px] text-white/55"
              style={{ background: "rgba(255,255,255,.06)" }}
            >
              + Add a card
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DribbbleContent() {
  const shots = [
    { gradient: "linear-gradient(135deg,#FFABE7,#B8509A)", label: "Cosmic" },
    { gradient: "linear-gradient(135deg,#FF536A,#FF9396)", label: "Bloom" },
    { gradient: "linear-gradient(135deg,#1F86F9,#06C2E7)", label: "Tide" },
    { gradient: "linear-gradient(135deg,#FBC500,#FF8800)", label: "Sunset" },
    { gradient: "linear-gradient(135deg,#7B61FF,#FF61DC)", label: "Aurora" },
    { gradient: "linear-gradient(135deg,#00C896,#00A0E4)", label: "Reef" },
  ];
  return (
    <div className="flex flex-col h-full p-3">
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
          style={{ background: "#EA4C89" }}
        >
          D
        </div>
        <div className="flex-1">
          <div className="text-[11px] text-white/85 font-semibold">
            Popular Shots
          </div>
          <div className="text-[9px] text-white/45">Trending in design</div>
        </div>
        <button
          className="text-[10px] px-2.5 py-1 rounded-full text-white"
          style={{ background: "#EA4C89" }}
        >
          Follow
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1 overflow-hidden">
        {shots.map((s, i) => (
          <div key={i} className="rounded-lg overflow-hidden flex flex-col">
            <div
              className="flex-1 flex items-end p-2"
              style={{ background: s.gradient, minHeight: 64 }}
            >
              <span className="text-white/95 text-[10px] font-semibold">
                {s.label}
              </span>
            </div>
            <div
              className="px-2 py-1.5 flex items-center justify-between"
              style={{ background: "rgba(255,255,255,.04)" }}
            >
              <span className="text-[9px] text-white/65">@designer{i + 1}</span>
              <span className="text-[9px] text-white/40">♥ {12 + i * 7}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommandCodeContent() {
  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "#0a0a0a", fontFamily: "ui-monospace, monospace" }}
    >
      <div className="px-3 py-2 border-b border-white/6 text-white/55 text-[10px]">
        ~/projects/genie-effect
      </div>
      <div className="flex-1 px-3 py-3 space-y-1.5 text-[11px] overflow-hidden">
        <div>
          <span className="text-emerald-400">❯</span>{" "}
          <span className="text-white/85">Command Code</span>
        </div>
        <div className="text-white/40 pl-3">
          Welcome to Command Code · v0.4.2
        </div>
        <div className="text-white/40 pl-3">
          Working in: ~/projects/genie-effect
        </div>
        <div className="mt-2">
          <span className="text-emerald-400">❯</span>{" "}
          <span className="text-white/85">refactor to use html-to-image</span>
        </div>
        <div className="text-amber-300/85 pl-3">
          Reading genie-magnified-dock.tsx...
        </div>
        <div className="text-white/55 pl-3">
          Found offscreen canvas drawers (~280 lines)
        </div>
        <div className="text-emerald-400/85 pl-3">
          ✓ Removed offscreenDrawers
        </div>
        <div className="text-emerald-400/85 pl-3">
          ✓ Added snapshot pipeline
        </div>
        <div className="text-emerald-400/85 pl-3">✓ Single source of truth</div>
        <div className="text-white/55 pl-3">
          Diff: <span className="text-rose-400">-343</span>{" "}
          <span className="text-emerald-400">+67</span> lines
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-emerald-400">❯</span>
          <span
            className="inline-block w-1.5 h-3.5 ml-2 align-middle"
            style={{
              background: "#fff",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function UILayoutsContent() {
  const layouts: { name: string; el: JSX.Element }[] = [
    {
      name: "Hero",
      el: (
        <>
          <div className="h-2 rounded-sm bg-white/85 w-3/4 mb-1" />
          <div className="h-1 rounded-sm bg-white/55 w-1/2 mb-1" />
          <div className="h-1 rounded-sm bg-white/45 w-2/3 mb-2" />
          <div className="h-2 rounded-sm bg-white/85 w-12" />
        </>
      ),
    },
    {
      name: "Cards",
      el: (
        <div className="grid grid-cols-2 gap-1 h-full">
          <div className="rounded-sm bg-white/85" />
          <div className="rounded-sm bg-white/55" />
          <div className="rounded-sm bg-white/55" />
          <div className="rounded-sm bg-white/35" />
        </div>
      ),
    },
    {
      name: "List",
      el: (
        <div className="space-y-1">
          <div className="h-1.5 rounded-sm bg-white/85" />
          <div className="h-1.5 rounded-sm bg-white/65" />
          <div className="h-1.5 rounded-sm bg-white/45" />
          <div className="h-1.5 rounded-sm bg-white/25" />
        </div>
      ),
    },
    {
      name: "Table",
      el: (
        <div className="grid grid-cols-3 gap-0.5 h-full">
          {[85, 65, 45, 65, 45, 25, 45, 25, 15].map((o, i) => (
            <div
              key={i}
              className="rounded-sm"
              style={{ background: `rgba(255,255,255,${o / 100})` }}
            />
          ))}
        </div>
      ),
    },
    {
      name: "Form",
      el: (
        <div className="space-y-1.5">
          <div className="h-1 rounded-sm bg-white/45 w-1/3" />
          <div className="h-3 rounded-sm bg-white/15" />
          <div className="h-1 rounded-sm bg-white/45 w-1/3" />
          <div className="h-3 rounded-sm bg-white/15" />
          <div className="h-2 rounded-sm bg-white/85 w-1/3" />
        </div>
      ),
    },
    {
      name: "Gallery",
      el: (
        <div className="grid grid-cols-3 gap-0.5">
          {[85, 65, 45, 55, 35, 65, 75, 25, 55].map((o, i) => (
            <div
              key={i}
              className="aspect-square rounded-sm"
              style={{ background: `rgba(255,255,255,${o / 100})` }}
            />
          ))}
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col h-full p-3">
      <div className="text-white/90 text-[12px] font-semibold mb-0.5">
        Templates
      </div>
      <div className="text-white/45 text-[10px] mb-3">
        Starting points for your next project
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {layouts.map((l, i) => (
          <div
            key={i}
            className="rounded-md p-2.5 flex flex-col"
            style={{ background: "#1D04FF" }}
          >
            <div className="flex-1 mb-1.5 overflow-hidden">{l.el}</div>
            <div className="text-[9px] text-white/95 font-medium">{l.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const WindowContent: Record<string, () => JSX.Element> = {
  safari: SafariContent,
  arc: ArcContent,
  trello: TrelloContent,
  dribbble: DribbbleContent,
  commandcode: CommandCodeContent,
  uilayouts: UILayoutsContent,
};

// ─── Mac window wrapper ───────────────────────────────────────────────────────
const MacWindow = ({
  app,
  winPos,
  onClose,
  domRef,
}: {
  app: App;
  winPos: Pt;
  onClose: () => void;
  domRef: React.RefCallback<HTMLDivElement>;
}) => {
  const Content = WindowContent[app.id];
  return (
    <div
      ref={domRef}
      className="absolute flex flex-col overflow-hidden"
      style={{
        width: WIN_W,
        height: WIN_H,
        left: winPos.x,
        top: winPos.y,
        borderRadius: 13,
        background: "#1e1e1e",
        zIndex: 40,
        boxShadow:
          "0 32px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.07)",
      }}
    >
      <div
        className="flex items-center px-4 shrink-0 relative"
        style={{
          height: 42,
          background: `linear-gradient(180deg,${app.tb[0]},${app.tb[1]})`,
          borderBottom: "1px solid rgba(0,0,0,.45)",
        }}
      >
        <div className="flex items-center gap-2 z-10">
          <button
            onClick={onClose}
            className="w-3.5 h-3.5 rounded-full border-none cursor-pointer hover:brightness-90 transition-all"
            style={{ background: "#ff5f57", boxShadow: "0 0 0 0.5px #e0443e" }}
          />
          <button
            onClick={onClose}
            className="w-3.5 h-3.5 rounded-full border-none cursor-pointer hover:brightness-90 transition-all"
            style={{ background: "#febc2e", boxShadow: "0 0 0 0.5px #d4a017" }}
          />
          <div
            className="w-3.5 h-3.5 rounded-full"
            style={{ background: "#28c840", boxShadow: "0 0 0 0.5px #1aab29" }}
          />
        </div>
        <span
          className="absolute inset-x-0 text-center text-xs font-medium pointer-events-none"
          style={{ color: "rgba(255,255,255,.5)" }}
        >
          {app.label}
        </span>
      </div>
      <div
        className="flex-1 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <Content />
      </div>
    </div>
  );
};

// ─── Magnified Dock Icon ──────────────────────────────────────────────────────
// This component uses framer-motion's useSpring/useTransform — both produce
// floating-point values whose last-digit precision can differ between Node
// (server) and V8 (client), which causes hydration mismatches. So this whole
// component only renders client-side via the `mounted` flag in <GenieEffect>.
function MagnifiedDockIcon({
  app,
  isActive,
  showDot,
  disabled,
  btnRef,
  onClick,
  mouseX,
}: {
  app: App;
  isActive: boolean;
  showDot: boolean;
  disabled: boolean;
  btnRef: (el: HTMLButtonElement | null) => void;
  onClick: () => void;
  mouseX: MotionValue<number>;
}) {
  const localRef = useRef<HTMLButtonElement>(null);
  const setRefs = useCallback(
    (el: HTMLButtonElement | null) => {
      localRef.current = el;
      btnRef(el);
    },
    [btnRef],
  );

  const distance = useTransform(mouseX, (val) => {
    const bounds = localRef.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(
    distance,
    [-MAG_RANGE, 0, MAG_RANGE],
    [ICON_BASE, ICON_PEAK, ICON_BASE],
  );
  const size = useSpring(sizeSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const innerSize = useTransform(size, (s) => s * 0.86);

  const Icon = app.Icon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
          ref={setRefs}
          onClick={onClick}
          disabled={disabled}
          style={{
            width: size,
            height: size,
            background: isActive ? `${app.accent}28` : "transparent",
            cursor: disabled ? "default" : "pointer",
          }}
          className="relative flex items-center justify-center rounded-xl border-none"
        >
          <motion.div
            style={{
              width: innerSize,
              height: innerSize,
              filter: isActive
                ? `drop-shadow(0 4px 12px ${app.accent}99)`
                : "drop-shadow(0 2px 4px rgba(0,0,0,.4))",
              pointerEvents: "none",
            }}
            className="block"
          >
            <Icon />
          </motion.div>
          {showDot && (
            <div
              className="absolute -bottom-1 w-1 h-1 rounded-full"
              style={{ background: "rgba(255,255,255,.75)" }}
            />
          )}
        </motion.button>
      </TooltipTrigger>
      <TooltipContent className="py-1 px-3 rounded-md" sideOffset={10}>
        <p className="text-xs text-primary">{app.label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

// ─── Snapshot Stage ───────────────────────────────────────────────────────────
// Pulled out as its own component so it can render independently of the main
// component's render cycle. Captures all six MacWindow textures in parallel
// and only after the page has had a chance to paint (idle callback).
function SnapshotStage({
  onReady,
}: {
  onReady: (canvases: HTMLCanvasElement[]) => void;
}) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let cancelled = false;

    // Capture work — runs after the page has painted.
    const run = async () => {
      try {
        // Wait one more frame so the offscreen MacWindows have laid out.
        await new Promise((r) => requestAnimationFrame(() => r(null)));
        if (cancelled) return;

        // Parallel snapshots — html-to-image's bottleneck is the Image
        // element rasterizing the SVG, which the browser does off the main
        // thread, so 6 in parallel is faster than 6 sequential without
        // overwhelming anything.
        const canvases = await Promise.all(
          refs.current
            .filter((n): n is HTMLDivElement => n !== null)
            .map((node) =>
              toCanvas(node, { pixelRatio: 1, cacheBust: false }),
            ),
        );
        if (cancelled) return;
        onReady(canvases);
      } catch (err) {
        console.error("Genie snapshot failed:", err);
        if (!cancelled) onReady([]);
      }
    };

    // Defer to idle time so it doesn't block first paint or first interaction.
    // Falls back to a 50ms setTimeout in browsers without rIC (Safari).
    const ric =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback;
    const cic =
      (window as unknown as { cancelIdleCallback?: (h: number) => void })
        .cancelIdleCallback;
    let handle: number;
    if (typeof ric === "function") {
      handle = ric(run);
    } else {
      handle = window.setTimeout(run, 50);
    }

    return () => {
      cancelled = true;
      if (typeof cic === "function") cic(handle);
      else clearTimeout(handle);
    };
  }, [onReady]);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        left: -10000,
        top: 0,
        pointerEvents: "none",
      }}
    >
      {APPS.map((a, i) => (
        <div
          key={a.id}
          style={{
            position: "relative",
            width: WIN_W,
            height: WIN_H,
            marginBottom: 20,
          }}
        >
          <MacWindow
            app={a}
            winPos={{ x: 0, y: 0 }}
            onClose={() => {}}
            domRef={(el) => {
              refs.current[i] = el;
            }}
          />
        </div>
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function GenieEffect() {
  // `mounted` is the SSR-safety gate. Server renders `mounted=false` →
  // matches the first client render → hydration succeeds. Then this effect
  // fires, mounted flips to true, and the framer-motion-using bits mount.
  // No floating-point divergence, no hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [phase, setPhase] = useState<Phase>("idle");
  const [activeApp, setActiveApp] = useState<number | null>(null);
  const [winPos, setWinPos] = useState<Pt>({ x: 0, y: 0 });
  const [snapshotsReady, setSnapshotsReady] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  // `containerRef` is the source of truth for layout coordinates. All
  // positioning math (window center, dock-center, canvas dimensions) reads
  // from this rect instead of `window.innerWidth/Height`. That way the
  // component drops cleanly into any sized parent (e.g. max-w-4xl h-[600px])
  // and centers correctly within it.
  const containerRef = useRef<HTMLDivElement>(null);
  const dockRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const offRef = useRef<HTMLCanvasElement[]>([]);
  const rafRef = useRef<number>(0);
  const stateRef = useRef<{ phase: Phase; activeApp: number | null }>({
    phase: "idle",
    activeApp: null,
  });

  const mouseX = useMotionValue(Infinity);

  const handleSnapshotsReady = useCallback((canvases: HTMLCanvasElement[]) => {
    offRef.current = canvases;
    setSnapshotsReady(true);
  }, []);

  // All position helpers below resolve against the container's bounding rect.
  // Falls back to viewport dims if the ref isn't ready yet (shouldn't happen
  // post-mount, but keeps the helpers null-safe).
  const getContainerSize = useCallback((): { w: number; h: number } => {
    const el = containerRef.current;
    if (!el) return { w: window.innerWidth, h: window.innerHeight };
    return { w: el.clientWidth, h: el.clientHeight };
  }, []);

  const getWinPos = useCallback((): Pt => {
    const { w, h } = getContainerSize();
    return {
      x: (w - WIN_W) / 2,
      y: (h - WIN_H) / 2 - 20,
    };
  }, [getContainerSize]);

  // Returns dock-button center in CONTAINER-LOCAL coords (not viewport coords).
  // The genie canvas draws in container-local coords too, so these match.
  const getDockCenter = useCallback((idx: number): Pt => {
    const btn = dockRefs.current[idx];
    const cont = containerRef.current;
    if (!btn || !cont) return { x: 0, y: 0 };
    const b = btn.getBoundingClientRect();
    const c = cont.getBoundingClientRect();
    return {
      x: b.left - c.left + b.width / 2,
      y: b.top - c.top + b.height / 2,
    };
  }, []);

  const setupCanvas = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const { w, h } = getContainerSize();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = w * dpr;
    c.height = h * dpr;
    c.getContext("2d")!.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, [getContainerSize]);

  const clearCanvas = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    c.getContext("2d")!.clearRect(0, 0, c.width, c.height);
    c.style.zIndex = "30";
  }, []);

  const startAnim = useCallback(
    (dir: Dir, appIdx: number, onDone: () => void) => {
      cancelAnimationFrame(rafRef.current);
      const dock = getDockCenter(appIdx);
      const win = getWinPos();
      const { w: cw, h: ch } = getContainerSize();
      const off = offRef.current[appIdx];
      let start: number | null = null;
      function frame(ts: number) {
        if (!start) start = ts;
        const rawT = clamp((ts - start) / DUR, 0, 1);
        const c = canvasRef.current;
        if (!c) return;
        renderGenie(
          c.getContext("2d")!,
          off,
          cw,
          ch,
          rawT,
          dir,
          dock,
          win,
        );
        if (rawT < 1) {
          rafRef.current = requestAnimationFrame(frame);
        } else {
          onDone();
        }
      }
      rafRef.current = requestAnimationFrame(frame);
    },
    [getDockCenter, getWinPos, getContainerSize],
  );

  const doOpen = useCallback(
    (idx: number) => {
      if (stateRef.current.phase !== "idle") return;
      const wp = getWinPos();
      setupCanvas();
      stateRef.current = { phase: "opening", activeApp: idx };
      setWinPos(wp);
      setPhase("opening");
      setActiveApp(idx);
      startAnim("open", idx, () => {
        stateRef.current.phase = "open";
        // flushSync forces React to commit the MacWindow into the DOM
        // synchronously, before clearCanvas runs. Without this, setPhase
        // batches and the canvas would clear one frame BEFORE the MacWindow
        // mounts — the page background shows through that gap, producing
        // the white-shutter flash. With flushSync, by the time clearCanvas
        // runs the MacWindow (z-40) is already on top of the canvas (z-30),
        // so the clear is visually invisible.
        flushSync(() => {
          setPhase("open");
        });
        clearCanvas();
      });
    },
    [getWinPos, setupCanvas, startAnim, clearCanvas],
  );

  const doMinimize = useCallback(() => {
    const { phase: p, activeApp: a } = stateRef.current;
    if (p !== "open" || a === null) return;

    const cvs = canvasRef.current;
    if (cvs) cvs.style.zIndex = "50";

    setupCanvas();
    const dock = getDockCenter(a);
    const win = getWinPos();
    const { w: cw, h: ch } = getContainerSize();
    const ctx = cvs?.getContext("2d");
    if (ctx && cvs) {
      renderGenie(ctx, offRef.current[a], cw, ch, 0, "minimize", dock, win);
    }

    if (windowRef.current) {
      windowRef.current.style.opacity = "0";
      windowRef.current.style.pointerEvents = "none";
    }

    stateRef.current.phase = "closing";
    setPhase("closing");

    startAnim("minimize", a, () => {
      stateRef.current = { phase: "idle", activeApp: null };
      setPhase("idle");
      setActiveApp(null);
      clearCanvas();
    });
  }, [setupCanvas, getDockCenter, getWinPos, getContainerSize, startAnim, clearCanvas]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Re-center the open window when the container resizes (browser resize,
  // sidebar collapse, parent flexbox changes, etc.). ResizeObserver fires
  // synchronously with layout so there's no visible jitter.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      if (stateRef.current.phase === "open") {
        setWinPos(getWinPos());
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [getWinPos]);

  const isAnimating = phase === "opening" || phase === "closing";
  const app = activeApp !== null ? APPS[activeApp] : null;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-150 overflow-hidden select-none"
    >
      <img
        src="/macos.jpg"
        alt="macos"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <style>{`@keyframes blink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }`}</style>

      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl opacity-25"
          style={{
            width: 440,
            height: 440,
            left: "8%",
            top: "20%",
            background: "radial-gradient(circle,#2670d2,transparent)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: 360,
            height: 360,
            right: "10%",
            top: "40%",
            background: "radial-gradient(circle,#5a32c8,transparent)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: 400,
            height: 400,
            left: "38%",
            top: "3%",
            background: "radial-gradient(circle,#14a0bd,transparent)",
          }}
        />
      </div>

      {/* Menubar — safe to SSR (no motion values, no client-only state) */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-3"
        style={{
          height: 24,
          zIndex: 50,
          background: "rgba(0,0,0,.3)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <span className="text-white/70 flex items-center text-[11px] gap-1 font-semibold tracking-tight">
         <img src="/macicon.png" alt="macicon" className="w-4 h-4" />{app?.label ?? "Finder"} &nbsp; File &nbsp; Edit &nbsp; View
          &nbsp; Window &nbsp; Help
        </span>
        <span className="text-white/60 text-[11px] font-medium">9:41 AM</span>
      </div>

      {/* Genie canvas — safe to SSR (just an empty <canvas>) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%", zIndex: 30 }}
      />

      {/* Live MacWindow — only renders when phase is open/closing, which can
          only happen post-mount, so no SSR concern. */}
      {(phase === "open" || phase === "closing") && app && (
        <MacWindow
          app={app}
          winPos={winPos}
          onClose={doMinimize}
          domRef={(el) => {
            windowRef.current = el;
          }}
        />
      )}

      {/* Everything below is gated on `mounted` — server skips it entirely,
          client renders it after the first effect fires. */}
      {mounted && (
        <>
          <SnapshotStage onReady={handleSnapshotsReady} />

          <TooltipProvider delayDuration={0}>
            <motion.div
              onMouseMove={(e) => mouseX.set(e.pageX)}
              onMouseLeave={() => mouseX.set(Infinity)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-end gap-2 px-4 pb-2"
              style={{
                paddingTop: 14,
                minWidth: 360,
                borderRadius: 18,
                zIndex: 50,
                background: "rgba(255,255,255,.10)",
                backdropFilter: "blur(28px) saturate(180%)",
                border: "1px solid rgba(255,255,255,.14)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.10)",
              }}
            >
              {APPS.map((a, i) => (
                <MagnifiedDockIcon
                  key={a.id}
                  app={a}
                  isActive={activeApp === i}
                  showDot={phase === "open" && activeApp === i}
                  disabled={isAnimating || !snapshotsReady}
                  btnRef={(el) => {
                    dockRefs.current[i] = el;
                  }}
                  onClick={() => doOpen(i)}
                  mouseX={mouseX}
                />
              ))}
            </motion.div>
          </TooltipProvider>
        </>
      )}
    </div>
  );
}