import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const COOKIE_NAME = "alabs_admin";
const ALG = "HS256";

function getSecret(): Uint8Array {
  const raw = process.env.JWT_SECRET;
  if (!raw || raw.length < 32) {
    throw new Error(
      "JWT_SECRET must be set to a 32+ character string in .env.local",
    );
  }
  return new TextEncoder().encode(raw);
}

export type AdminClaims = JWTPayload & {
  sub: string;
  email: string;
  role: "ADMIN" | "EDITOR";
  name: string;
};

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 12);
}

export async function verifyPassword(
  plain: string,
  hashed: string,
): Promise<boolean> {
  return bcrypt.compare(plain, hashed);
}

export type SessionInput = {
  sub: string;
  email: string;
  role: "ADMIN" | "EDITOR";
  name: string;
};

export async function signSession(claims: SessionInput): Promise<string> {
  return new SignJWT({ ...claims })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function readSession(): Promise<AdminClaims | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      algorithms: [ALG],
    });
    return payload as AdminClaims;
  } catch {
    return null;
  }
}

export async function setSessionCookie(token: string): Promise<void> {
  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export async function requireAdmin(): Promise<AdminClaims> {
  const claims = await readSession();
  if (!claims) {
    throw new Error("UNAUTHORIZED");
  }
  return claims;
}
