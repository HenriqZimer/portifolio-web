import Script from 'next/script';

const Analytics = () => {
  const token = process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN;

  if (!token) {
    return null;
  }

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      defer
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
};

export default Analytics;
