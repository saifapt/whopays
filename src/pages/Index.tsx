
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Heart, Share2, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [names, setNames] = useState<string[]>([]);
  const [currentName, setCurrentName] = useState("");
  const [billOption, setBillOption] = useState("one-pays");
  const [splitCount, setSplitCount] = useState(2);
  const [excludeSomeone, setExcludeSomeone] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const addName = () => {
    if (currentName.trim() && !names.includes(currentName.trim())) {
      setNames([...names, currentName.trim()]);
      setCurrentName("");
    } else if (names.includes(currentName.trim())) {
      toast({
        title: "Already added!",
        description: "This person is already in the list 👀",
      });
    }
  };

  const removeName = (nameToRemove: string) => {
    setNames(names.filter(name => name !== nameToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addName();
    }
  };

  const generateResult = () => {
    if (names.length < 2) {
      toast({
        title: "Hold up!",
        description: "You need at least 2 people to cause financial chaos 😅",
      });
      return;
    }

    setIsLoading(true);
    setShowConfetti(false);

    // Dramatic pause for suspense
    setTimeout(() => {
      let resultMessage = "";
      
      if (billOption === "one-pays") {
        const randomPerson = names[Math.floor(Math.random() * names.length)];
        resultMessage = `RIP ${randomPerson}. You're paying 💳\n\nBetter luck next time! 🎲`;
      } else if (billOption === "split-all") {
        resultMessage = `You all split it evenly!\n\nFriendship saved 🤝✨`;
      } else if (billOption === "split-some") {
        const shuffled = [...names].sort(() => 0.5 - Math.random());
        const selectedPeople = shuffled.slice(0, Math.min(splitCount, names.length));
        resultMessage = `These lucky folks are splitting:\n${selectedPeople.join(", ")}\n\nThe rest of you are free! 🎉`;
      }

      setResult(resultMessage);
      setIsLoading(false);
      setShowConfetti(true);
      
      // Hide confetti after animation
      setTimeout(() => setShowConfetti(false), 3000);
    }, 2000);
  };

  const resetGame = () => {
    setResult(null);
    setShowConfetti(false);
  };

  const shareResult = () => {
    if (result) {
      navigator.clipboard.writeText(`Who Pays Result: ${result.replace(/\n/g, ' ')}`);
      toast({
        title: "Copied!",
        description: "Result copied to clipboard 📋",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 p-4">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 animate-bounce rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black text-white drop-shadow-lg">
            Who Pays the Bill?
          </h1>
          <p className="text-lg text-white/90 font-medium">
            Let fate decide your financial ruin 💸
          </p>
        </div>

        {/* Name Entry Section */}
        <Card className="bg-white/95 backdrop-blur border-0 shadow-xl">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <Label className="text-lg font-semibold text-gray-800">
                Add People
              </Label>
              <div className="flex gap-2">
                <Input
                  value={currentName}
                  onChange={(e) => setCurrentName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter a name..."
                  className="flex-1 text-lg border-2 border-pink-200 focus:border-pink-400"
                />
                <Button
                  onClick={addName}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4"
                  disabled={!currentName.trim()}
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Names Display */}
            {names.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-600">
                  Current Squad ({names.length})
                </Label>
                <div className="flex flex-wrap gap-2">
                  {names.map((name) => (
                    <Badge
                      key={name}
                      variant="secondary"
                      className="bg-teal-100 text-teal-800 hover:bg-teal-200 px-3 py-1 text-sm font-medium"
                    >
                      {name}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeName(name)}
                        className="ml-1 h-4 w-4 p-0 hover:bg-red-200"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Filter Options */}
        <Card className="bg-white/95 backdrop-blur border-0 shadow-xl">
          <CardContent className="p-6 space-y-4">
            <Label className="text-lg font-semibold text-gray-800">
              How should the bill be handled?
            </Label>
            
            <RadioGroup value={billOption} onValueChange={setBillOption}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-pays" id="one-pays" />
                <Label htmlFor="one-pays" className="font-medium">
                  One person pays (randomly selected) 🎯
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="split-all" id="split-all" />
                <Label htmlFor="split-all" className="font-medium">
                  Split equally between all 🤝
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="split-some" id="split-some" />
                <Label htmlFor="split-some" className="font-medium">
                  Split randomly between some 🎲
                </Label>
              </div>
            </RadioGroup>

            {billOption === "split-some" && (
              <div className="ml-6 space-y-2">
                <Label className="text-sm font-medium text-gray-600">
                  How many people should split? ({splitCount})
                </Label>
                <div className="flex gap-2">
                  {[2, 3, 4].map((count) => (
                    <Button
                      key={count}
                      variant={splitCount === count ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSplitCount(count)}
                      className="w-10 h-10"
                    >
                      {count}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Button */}
        <Button
          onClick={generateResult}
          disabled={names.length < 2 || isLoading}
          className="w-full h-14 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Consulting the chaos gods...
            </div>
          ) : (
            "Let's See! 🎰"
          )}
        </Button>

        {/* Result Section */}
        {result && (
          <Card className="bg-white/95 backdrop-blur border-0 shadow-xl animate-scale-in">
            <CardContent className="p-6 text-center space-y-4">
              <div className="text-2xl">🎉</div>
              <div className="text-lg font-semibold text-gray-800 whitespace-pre-line leading-relaxed">
                {result}
              </div>
              
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={resetGame}
                  variant="outline"
                  className="flex-1 font-semibold"
                >
                  Try Again 🔄
                </Button>
                <Button
                  onClick={shareResult}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center space-y-4 pt-8">
          <p className="text-white/80 text-sm font-medium">
            Made with pain 🥲 so you don't fight over bills again.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Tweet This
            </Button>
            <Button
              variant="ghost"  
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Story This
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
