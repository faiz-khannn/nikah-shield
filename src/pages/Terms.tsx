import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-semibold mt-8">1. Acceptance of Terms</h2>
          <p>By accessing NikahConnect, you agree to be bound by these Terms of Service.</p>
          <h2 className="text-2xl font-semibold mt-8">2. Islamic Guidelines</h2>
          <p>All users must adhere to Islamic principles of modesty and respect.</p>
          <h2 className="text-2xl font-semibold mt-8">3. User Conduct</h2>
          <p>Users are expected to maintain honesty and serious intentions for marriage.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
