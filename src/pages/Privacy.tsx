import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p>Your privacy is our top priority. This policy explains how we handle your data.</p>
          <h2 className="text-2xl font-semibold mt-8">Data Collection</h2>
          <p>We collect only essential information needed for matchmaking.</p>
          <h2 className="text-2xl font-semibold mt-8">Photo Protection</h2>
          <p>All photos are blurred by default with your control over unblurring.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
