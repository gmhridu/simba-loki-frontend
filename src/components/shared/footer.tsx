import Link from "next/link";
import { Crown, Flag, Music2 } from "lucide-react";

const SHOP_LINKS = [
  "All Products",
  "Cat Trees",
  "Wall Systems",
  "Cat Beds",
  "Scratching Furniture",
  "Accessories",
];

const COLLECTION_LINKS = [
  "The Crown Collection",
  "The Royal Collection",
  "The Natural Collection",
  "The Modern Collection",
  "The Monochrome Collection",
];

const COMPANY_LINKS = [
  "About Us",
  "Our Materials",
  "Sustainability",
  "Reviews",
  "Contact Us",
];

const SUPPORT_LINKS = [
  "Shipping Information",
  "Returns & Exchanges",
  "Warranty",
  "FAQ",
  "Care Guide",
];

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-heading text-xs tracking-[0.18em] text-[#b88a44]">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-sm text-gray-500 dark:text-[#aaa193] transition-colors hover:text-[#d8b875]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t dark:border-[#2a2118] dark:bg-[#0A0A0A] dark:text-[#e6dfd3]">
      <div className="mx-auto px-6 pt-10 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] sm:mx-24 my-10 ">
          <div className="max-w-70">
            <div className="flex items-center gap-2 text-[#b88a44]">
              <Crown className="h-6 w-6" />
              <span className="font-heading text-xl tracking-widest">
                Simba &amp; Loki
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 dark:text-[#9a9184]">
              Luxury cat furniture designed to complement your home while
              enriching your cat&apos;s life.
            </p>

            <div className="mt-5 flex items-center gap-4 text-[#b88a44]">
              <Link
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-[#d8b875] size-6"
              >
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#b88a44"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <title>{"instagram [#167]"}</title>
                    <desc>{"Created with Sketch."}</desc>
                    <defs />
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-340.000000, -7439.000000)"
                        fill="#b88a44"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                            id="instagram-[#167]"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Pinterest"
                className="transition-colors hover:text-[#d8b875]"
              >
                <Flag className="size-6" />
              </Link>
              <Link
                href="#"
                aria-label="TikTok"
                className="transition-colors hover:text-[#d8b875]"
              >
                <Music2 className="size-6" />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="transition-colors hover:text-[#d8b875] size-6"
              >
                <svg
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z"
                      stroke="#b88a44"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z"
                      stroke="#b88a44"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>

          <FooterColumn title="SHOP" items={SHOP_LINKS} />
          <FooterColumn title="COLLECTIONS" items={COLLECTION_LINKS} />
          <FooterColumn title="COMPANY" items={COMPANY_LINKS} />
          <FooterColumn title="SUPPORT" items={SUPPORT_LINKS} />
        </div>

        <div className="mt-10 sm:mx-24 flex flex-col gap-3 border-t dark:border-[#2a2118] pt-5 text-xs text-[#827a6f] md:flex-row md:items-center md:justify-between">
          <p>© 2025 Simba &amp; Loki. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed in the UK <span aria-hidden="true">🇬🇧</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
