import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export function GET() {
  const token = jwt.sign(
    {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'github-analytics',
        'x-hasura-allowed-roles': ['github-analytics'],
      },
    },
    process.env.JWT_SECRET as string,
  );

  return NextResponse.json({ token });
}
