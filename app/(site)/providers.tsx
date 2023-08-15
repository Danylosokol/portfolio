"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LeB0qonAAAAAHyZHtgjQ-ukubq3lSr5sebm_ya7"
      container={{
        element: "captcha",
        parameters: {
          badge: "inline",
          theme: "dark",
        },
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
