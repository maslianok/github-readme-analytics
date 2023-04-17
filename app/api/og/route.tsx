import { ImageResponse } from '@vercel/og';

import hasuraClient from '@/utils/hasuraClient';
import profileByLoginQuery from '@/gql/profileByLogin';

export const config = {
  runtime: 'edge',
};

export async function GET(request: Request) {
  const { token } = await fetch(`${process.env.DOMAIN}/api/jwt`).then((r) => r.json());
  const result = await hasuraClient.setHeader('authorization', `Bearer ${token}`).request(profileByLoginQuery, {
    login: 'maslianok',
  });

  console.log(result);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
