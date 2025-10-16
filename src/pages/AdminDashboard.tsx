import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Link as LinkIcon, MessageCircle, Download, Search, Plus } from "lucide-react";
import { mockBiodataSubmissions, generateMockUniqueId } from "@/lib/mockData";
import { toast } from "sonner";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "8839487027";

const AdminDashboard = () => {
  const [biodatas, setBiodatas] = useState(mockBiodataSubmissions);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredBiodatas = biodatas.filter(biodata => {
    const matchesSearch = biodata.data.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         biodata.data.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || biodata.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const updateStatus = (id: string, newStatus: 'pending' | 'completed' | 'shaadi_fixed') => {
    setBiodatas(biodatas.map(b => b.id === id ? { ...b, status: newStatus } : b));
    toast.success("Status updated successfully!");
  };

  const generateNewLink = () => {
    const newId = generateMockUniqueId();
    toast.success(`New link generated: /bio-data/${newId}`);
    navigator.clipboard.writeText(`${window.location.origin}/bio-data/${newId}`);
  };

  const shareViaWhatsApp = (biodata: typeof biodatas[0], includeContact: boolean) => {
    let message = `*Biodata Details*\n\nName: ${biodata.data.fullName}\nAge: ${biodata.data.age}\nCity: ${biodata.data.city}\nQualification: ${biodata.data.qualification}\nProfession: ${biodata.data.profession}`;
    
    if (includeContact) {
      message += `\n\n*Contact*\nEmail: ${biodata.data.email}\nPhone: ${biodata.data.phone}`;
    }
    
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const exportData = (format: 'csv' | 'pdf') => {
    toast.success(`Exporting ${filteredBiodatas.length} records as ${format.toUpperCase()}...`);
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "secondary",
      completed: "default",
      shaadi_fixed: "destructive"
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"}>
        {status.replace('_', ' ').toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                <Shield className="w-10 h-10 font-text-primary" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">Manage biodata submissions and links</p>
            </div>
            <Button onClick={generateNewLink} className="gap-2">
              <Plus className="w-4 h-4" />
              Generate New Link
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{biodatas.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-yellow-600">
                  {biodatas.filter(b => b.status === 'pending').length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">
                  {biodatas.filter(b => b.status === 'completed').length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Shaadi Fixed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">
                  {biodatas.filter(b => b.status === 'shaadi_fixed').length}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Actions */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="shaadi_fixed">Shaadi Fixed</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={() => exportData('csv')} className="gap-2">
                  <Download className="w-4 h-4" />
                  Export CSV
                </Button>
                <Button variant="outline" onClick={() => exportData('pdf')} className="gap-2">
                  <Download className="w-4 h-4" />
                  Export PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Biodatas Table */}
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Profession</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBiodatas.map((biodata) => (
                    <TableRow key={biodata.id}>
                      <TableCell className="font-medium">{biodata.data.fullName}</TableCell>
                      <TableCell>{biodata.data.age}</TableCell>
                      <TableCell>{biodata.data.city}</TableCell>
                      <TableCell>{biodata.data.profession}</TableCell>
                      <TableCell>{getStatusBadge(biodata.status)}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{biodata.submissionType}</Badge>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={`v${biodata.version}`}
                          onValueChange={(value) => toast.info(`Version changed to ${value}`)}
                        >
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="v1">v1</SelectItem>
                            <SelectItem value="v2">v2</SelectItem>
                            <SelectItem value="v3">v3</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Select
                            value={biodata.status}
                            onValueChange={(value) => updateStatus(biodata.id, value as any)}
                          >
                            <SelectTrigger className="w-36">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="shaadi_fixed">Shaadi Fixed</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => shareViaWhatsApp(biodata, false)}
                            title="Share without contact"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="default"
                            onClick={() => shareViaWhatsApp(biodata, true)}
                            title="Share with contact"
                          >
                            <MessageCircle className="w-4 h-4" />+
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
