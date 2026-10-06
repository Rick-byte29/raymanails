/** Server-only D1 REST adapter for Vercel; credentials never enter client bundles. */
export function isStorageConfigured() {
  return Boolean(process.env.CLOUDFLARE_ACCOUNT_ID && process.env.CLOUDFLARE_D1_DATABASE_ID && process.env.CLOUDFLARE_D1_API_TOKEN);
}
export function getDb() {
  if (!isStorageConfigured()) throw new Error('Request storage is not connected.');
  return {
    $client: {
      prepare(sql: string) {
        return {
          bind(...params: unknown[]) {
            return {
              async run() {
                const account = encodeURIComponent(process.env.CLOUDFLARE_ACCOUNT_ID!);
                const database = encodeURIComponent(process.env.CLOUDFLARE_D1_DATABASE_ID!);
                const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${account}/d1/database/${database}/query`, {
                  method: 'POST',
                  headers: { Authorization: `Bearer ${process.env.CLOUDFLARE_D1_API_TOKEN}`, 'Content-Type': 'application/json' },
                  body: JSON.stringify({sql, params}),
                  cache: 'no-store',
                  signal: AbortSignal.timeout(10000),
                });
                const payload = await response.json() as {success?: boolean, result?: {success?: boolean}[]};
                if (!response.ok || !payload.success || payload.result?.some(result => !result.success)) throw new Error('Request storage could not be reached.');
                return payload;
              },
            };
          },
        };
      },
    },
  };
}
