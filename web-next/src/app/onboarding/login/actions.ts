'use server';

import { createClient } from '@/lib';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  const server = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { data, error } = await server.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    throw error;
  }

  const { access_token, expires_at, refresh_token, user } = data.session;

  cookies().set('access_token', access_token, {
    expires: expires_at,
    path: '/',
  });

  cookies().set('refresh_token', refresh_token, {
    expires: expires_at,
    path: '/',
  });

  cookies().set('user', JSON.stringify(user), {
    expires: expires_at,
    path: '/',
  });
}
