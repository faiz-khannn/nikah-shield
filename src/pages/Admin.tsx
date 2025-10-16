import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Protected Area
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Admin functionality will be implemented with backend integration.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
