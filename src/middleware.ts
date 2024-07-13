import { NextRequest, NextResponse } from 'next/server';
import AuthService from './auth/service/authService';

export const config = {
  matcher: '/((?!_next/static|_next/image|_next/assets|favicon.ico).*)',
};

const publicRoutes = ['/', '/portal/cadastro', '/portal/login', '/ops'];

export async function middleware(req: NextRequest) {
  try {
    const pathname = req.nextUrl.pathname;

    const userTypeResult = await AuthService.userType()
    
    if (userTypeResult && userTypeResult.type === 'super' && pathname.startsWith('/dashboard')) {
      return NextResponse.next();
    } else if (userTypeResult && userTypeResult.type === 'client' && (pathname.startsWith('/user') || pathname.startsWith('/dashboard'))) {
      return NextResponse.next();
    } else if (userTypeResult && userTypeResult.type === 'client') {
      return NextResponse.redirect(new URL('/ops', req.url));
    }

    if (publicRoutes.includes(pathname) || pathname.startsWith('/blog')) {
      return NextResponse.next();
    }

    const isAPIRoute = pathname.startsWith('/api');
    if (isAPIRoute) {
      return NextResponse.redirect(new URL('/ops', req.url));
    }

    // Se não for uma rota pública, de blog ou API, permita o acesso à imagem
    return NextResponse.next();
  } catch (err) {
    console.log('erro no middleware', err);
  }
}