
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Wallet, DollarSign, PiggyBank } from "lucide-react";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("overview");

  const brandSections = {
    overview: "Brand Overview",
    colors: "Color Palette", 
    voice: "Brand Voice",
    logos: "Logo Concepts",
    taglines: "Taglines & Copy",
    memes: "Memes & Content"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-white mb-4 drop-shadow-lg">
            WHO PAYS? 💸
          </h1>
          <p className="text-xl text-white/90 font-medium">
            Brand Identity & Style Guide
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(brandSections).map(([key, label]) => (
            <Button
              key={key}
              onClick={() => setCurrentSection(key)}
              variant={currentSection === key ? "default" : "secondary"}
              className="font-semibold"
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {currentSection === "overview" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-6 h-6 text-purple-600" />
                    Mission Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Who Pays?</strong> turns awkward money moments into hilarious shared experiences. 
                    We're the chaotic good friend who settles debates with random fate and a healthy dose of sarcasm.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="w-6 h-6 text-pink-600" />
                    Target Audience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary">Gen Z (18-26)</Badge>
                    <Badge variant="secondary">College Students</Badge>
                    <Badge variant="secondary">Young Professionals</Badge>
                    <Badge variant="secondary">Friend Groups</Badge>
                    <Badge variant="secondary">Roommates</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur md:col-span-2">
                <CardHeader>
                  <CardTitle>Brand Personality</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-600 mb-2">Sarcastic & Witty</h4>
                      <p className="text-sm text-gray-600">Uses humor to defuse financial tension</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-600 mb-2">Relatable & Honest</h4>
                      <p className="text-sm text-gray-600">Acknowledges everyone's broke but makes it fun</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2">Viral & Shareable</h4>
                      <p className="text-sm text-gray-600">Built for screenshots and TikToks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === "colors" && (
            <Card className="bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Primary Colors</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-purple-500"></div>
                        <div>
                          <p className="font-medium">Chaos Purple</p>
                          <p className="text-sm text-gray-600">#8B5CF6</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-pink-500"></div>
                        <div>
                          <p className="font-medium">Drama Pink</p>
                          <p className="text-sm text-gray-600">#EC4899</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-orange-500"></div>
                        <div>
                          <p className="font-medium">Panic Orange</p>
                          <p className="text-sm text-gray-600">#F97316</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Supporting Colors</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-emerald-500"></div>
                        <div>
                          <p className="font-medium">Lucky Green</p>
                          <p className="text-sm text-gray-600">#10B981</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-red-500"></div>
                        <div>
                          <p className="font-medium">Broke Red</p>
                          <p className="text-sm text-gray-600">#EF4444</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-yellow-400"></div>
                        <div>
                          <p className="font-medium">Anxiety Yellow</p>
                          <p className="text-sm text-gray-600">#FBBF24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentSection === "voice" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle>Voice & Tone</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">✨ We ARE:</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Sarcastically supportive</li>
                        <li>• Brutally honest about money</li>
                        <li>• Your chaotic bestie</li>
                        <li>• Meme-fluent</li>
                        <li>• Relatable & real</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-600">🚫 We're NOT:</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Financial advisors</li>
                        <li>• Overly corporate</li>
                        <li>• Taking ourselves seriously</li>
                        <li>• Judgy about being broke</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle>Sample Voice Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="font-medium text-purple-700">Button Copy:</p>
                      <p>"YEET THE DECISION" instead of "Calculate"</p>
                    </div>
                    <div className="p-3 bg-pink-50 rounded-lg">
                      <p className="font-medium text-pink-700">Error Message:</p>
                      <p>"Bestie, you need at least 2 people to cause financial chaos"</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="font-medium text-orange-700">Loading:</p>
                      <p>"Consulting the chaos gods..."</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === "logos" && (
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/95 backdrop-blur text-center">
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4">💸</div>
                  <h3 className="font-bold text-xl mb-2">Flying Money</h3>
                  <p className="text-sm text-gray-600">Classic money-flying-away vibe</p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur text-center">
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4">🎲</div>
                  <h3 className="font-bold text-xl mb-2">Chaos Dice</h3>
                  <p className="text-sm text-gray-600">Random fate decides everything</p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur text-center">
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4">🤝</div>
                  <h3 className="font-bold text-xl mb-2">Split Decision</h3>
                  <p className="text-sm text-gray-600">Friendship vs. finances</p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur md:col-span-3">
                <CardHeader>
                  <CardTitle>Primary Logo Concept</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="inline-block p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4">
                      <span className="text-4xl font-black text-white">WHO PAYS?</span>
                      <span className="text-3xl ml-2">💸</span>
                    </div>
                    <p className="text-gray-600">Bold, gradient background with flying money emoji as accent</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === "taglines" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle>Primary Taglines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                      <p className="font-bold">"Your wallet's destiny awaits..."</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg">
                      <p className="font-bold">"Let fate decide your financial ruin 💸"</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-orange-100 to-purple-100 rounded-lg">
                      <p className="font-bold">"Democracy for your debt"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle>Alternative Copy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• "Friendship vs. finances: FIGHT!"</p>
                    <p>• "Making poor life choices, together"</p>
                    <p>• "Your broke bestie's favorite app"</p>
                    <p>• "Chaos, but make it organized"</p>
                    <p>• "Split bills, not friendships"</p>
                    <p>• "The only fair way to be unfair"</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === "memes" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle>Viral Content Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold mb-2">TikTok Trends:</p>
                      <p className="text-sm">"POV: The app chose YOU to pay for dinner and your bank account is crying"</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold mb-2">Instagram Stories:</p>
                      <p className="text-sm">"Tag someone who always conveniently 'forgets' their wallet 👀"</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold mb-2">Meme Format:</p>
                      <p className="text-sm">"Me: Opens Who Pays? / Also me: Please don't be me, please don't be me"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle>Shareable Slogans</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                      <p className="font-medium">"Democracy dies in expensive restaurants"</p>
                    </div>
                    <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                      <p className="font-medium">"Equal opportunity financial trauma"</p>
                    </div>
                    <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                      <p className="font-medium">"Turning awkward into awesome since 2024"</p>
                    </div>
                    <div className="p-3 border-l-4 border-emerald-500 bg-emerald-50">
                      <p className="font-medium">"Fair is fair, broke is broke"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-white/80">
          <p className="text-lg font-medium">Ready to build something viral? 🚀</p>
          <p className="text-sm">This brand is designed to go viral and build emotional connections through humor</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
