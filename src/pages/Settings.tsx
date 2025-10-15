import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Lock, Users, Bell, User, Trash2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [ghostMode, setGhostMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSaveAccount = () => {
    toast.success("Account settings saved!");
  };

  const handleGhostModeToggle = (checked: boolean) => {
    setGhostMode(checked);
    toast.success(checked ? "Ghost mode activated" : "Ghost mode deactivated");
  };

  const handleDeleteAccount = () => {
    toast.error("To delete your account, please contact support.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account and privacy settings</p>
        </div>

        <Tabs defaultValue="account" className="max-w-4xl">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="account">
              <User className="w-4 h-4 mr-2" />
              Account
            </TabsTrigger>
            <TabsTrigger value="privacy">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="subscription">
              <Lock className="w-4 h-4 mr-2" />
              Subscription
            </TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+44..." />
                </div>
                <Button onClick={handleSaveAccount}>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current Password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New Password</Label>
                  <Input id="new" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm New Password</Label>
                  <Input id="confirm" type="password" />
                </div>
                <Button>Update Password</Button>
              </CardContent>
            </Card>

            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>Irreversible actions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ghost Mode</CardTitle>
                <CardDescription>
                  Make your profile invisible to specific users without them knowing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable Ghost Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Your profile won't appear in their searches or suggestions
                    </p>
                  </div>
                  <Switch
                    checked={ghostMode}
                    onCheckedChange={handleGhostModeToggle}
                  />
                </div>

                {ghostMode && (
                  <div className="space-y-2 pt-4 border-t">
                    <Label htmlFor="ghost-user">Ghost from user</Label>
                    <Input
                      id="ghost-user"
                      placeholder="Search for user to ghost..."
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Photo Vault Settings</CardTitle>
                <CardDescription>
                  Control when and how your photos are revealed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Unblur after messages</Label>
                  <Input
                    type="number"
                    placeholder="5"
                    min="1"
                    max="50"
                  />
                  <p className="text-xs text-muted-foreground">
                    Photos will unblur after this many messages are exchanged
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Require mutual consent</Label>
                    <p className="text-sm text-muted-foreground">
                      Both parties must agree before photos unblur
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Visibility</CardTitle>
                <CardDescription>Control who can see your profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show me in search</Label>
                    <p className="text-sm text-muted-foreground">
                      Appear in discovery and search results
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show last active</Label>
                    <p className="text-sm text-muted-foreground">
                      Let matches see when you were last online
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wali Access</CardTitle>
                <CardDescription>Manage Wali permissions and access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Wali Email</Label>
                  <Input placeholder="wali@example.com" type="email" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Allow Wali to view conversations</Label>
                    <p className="text-sm text-muted-foreground">
                      Your Wali can read your messages
                    </p>
                  </div>
                  <Switch />
                </div>

                <Button variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Send Wali Invitation
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose what you want to be notified about</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={notificationsEnabled}
                    onCheckedChange={setNotificationsEnabled}
                  />
                </div>

                {notificationsEnabled && (
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <Label>New messages</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Interest received</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Profile views</Label>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Matches</Label>
                      <Switch defaultChecked />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscription */}
          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>You're currently on the Free plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">Free Plan</p>
                      <p className="text-sm text-muted-foreground">Basic features</p>
                    </div>
                    <p className="text-2xl font-bold">£0/mo</p>
                  </div>

                  <Button className="w-full" size="lg">
                    Upgrade to Premium
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
