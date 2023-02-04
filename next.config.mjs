/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /* If trying out the experimental appDir, comment the i18n config out
   * @see https://github.com/vercel/next.js/issues/41980 */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    SUPABASE_URL: "https://rheupcwqqudhdkavfpvd.supabase.co",
    SUPABASE_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoZXVwY3dxcXVkaGRrYXZmcHZkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NTUwOTIxOCwiZXhwIjoxOTkxMDg1MjE4fQ.SYYVffKhRO9pjxPMWn9Tq7JMQY1wNKTj-AJthK9iWec",
  },
};
export default config;
