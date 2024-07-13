import  Sidebar  from "@/components/sidebar";
export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
          <Sidebar />
          <main className="ml-64 mt-20">
          {children}
          </main>
      </div>
  )
}
