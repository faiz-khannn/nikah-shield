import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockProfiles, mockMessages } from "@/lib/mockData";
import { Send, Lock, Users, Unlock } from "lucide-react";
import { toast } from "sonner";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(mockProfiles[0].id);
  const [messageText, setMessageText] = useState("");

  const handleSend = () => {
    if (!messageText.trim()) return;
    
    toast.success("Message sent!");
    setMessageText("");
  };

  const handleUnblurRequest = () => {
    toast.success("Photo unblur request sent!");
  };

  const handleInviteWali = () => {
    toast.success("Wali invitation sent!");
  };

  const selectedProfile = mockProfiles.find(p => p.id === selectedChat);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Messages</h1>
          <p className="text-muted-foreground">Connect with your matches</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-16rem)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 overflow-hidden">
            <CardHeader className="border-b">
              <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {mockProfiles.slice(0, 3).map((profile) => (
                  <button
                    key={profile.id}
                    onClick={() => setSelectedChat(profile.id)}
                    className={`w-full p-4 text-left hover:bg-muted/50 transition-colors ${
                      selectedChat === profile.id ? 'bg-muted' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={profile.photos[0]?.thumbUrl} />
                        <AvatarFallback>{profile.firstName[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold truncate">{profile.displayName}</p>
                          {profile.verified && (
                            <Badge className="text-xs">Verified</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {profile.city}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-3 flex flex-col overflow-hidden">
            {selectedProfile ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={selectedProfile.photos[0]?.thumbUrl} />
                        <AvatarFallback>{selectedProfile.firstName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{selectedProfile.displayName}</h3>
                        <p className="text-sm text-muted-foreground">Online</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleUnblurRequest}
                        variant="outline"
                        size="sm"
                      >
                        <Unlock className="w-4 h-4 mr-2" />
                        Request Unblur
                      </Button>
                      <Button
                        onClick={handleInviteWali}
                        variant="outline"
                        size="sm"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Invite Wali
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-muted/20">
                  {/* Privacy Notice */}
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
                    <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium mb-1">
                      Conversation Protected
                    </p>
                    <p className="text-xs text-muted-foreground">
                      This conversation is private and follows Islamic guidelines. 
                      Respect and modesty are expected.
                    </p>
                  </div>

                  {mockMessages.map((msg) => {
                    const isOwn = msg.senderId === 'current-user';
                    return (
                      <div
                        key={msg.id}
                        className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-2xl p-4 ${
                            isOwn
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-card border border-border'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                          <p className={`text-xs mt-2 ${
                            isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'
                          }`}>
                            {new Date(msg.timestamp).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      className="flex-1"
                    />
                    <Button onClick={handleSend}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Please maintain Islamic etiquette and respect in all conversations
                  </p>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground">
                Select a conversation to start messaging
              </div>
            )}
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Messages;
