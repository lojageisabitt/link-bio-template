"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <body className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <Card className="flex flex-col items-center justify-center h-screen">
        <CardHeader>
          <CardTitle>Desculpe. Algo deu errado.</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="outline" onClick={() => reset()}>
            Tente novamente ou...
          </Button>
        </CardContent>
        <CardFooter>
          <Link href="/">...volte para pagina inicial</Link>
        </CardFooter>
      </Card>
    </body>
  );
}
