// Type declarations for CSS-only Swiper imports and Instagram embed global

declare module "*.css";
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export {};
