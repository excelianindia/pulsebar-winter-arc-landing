import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Flame, Calendar, Award, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';

interface DailyTask {
  id: string;
  title: string;
  category: 'fitness' | 'nutrition' | 'mindset' | 'recovery';
  completed: boolean;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  streak: number;
  avatar: string;
}

const TheChallenge = () => {
  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>([
    { id: '1', title: 'Complete 45min workout', category: 'fitness', completed: false },
    { id: '2', title: 'Eat 3 clean meals', category: 'nutrition', completed: false },
    { id: '3', title: '10min meditation', category: 'mindset', completed: false },
    { id: '4', title: 'Track macros in app', category: 'nutrition', completed: false },
    { id: '5', title: 'Get 7+ hours sleep', category: 'recovery', completed: false },
    { id: '6', title: 'Journal 5min', category: 'mindset', completed: false },
  ]);

  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Alex Johnson', score: 9850, streak: 28, avatar: '🔥' },
    { rank: 2, name: 'Sarah Chen', score: 9420, streak: 25, avatar: '💪' },
    { rank: 3, name: 'Marcus Riley', score: 8990, streak: 22, avatar: '⚡' },
    { rank: 4, name: 'Emma Davis', score: 8755, streak: 20, avatar: '🌟' },
    { rank: 5, name: 'David Kim', score: 8520, streak: 19, avatar: '🎯' },
  ];

  const toggleTask = (id: string) => {
    setDailyTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = dailyTasks.filter(t => t.completed).length;
  const progressPercentage = (completedCount / dailyTasks.length) * 100;
  const currentStreak = 14; // This would come from backend
  const totalDays = 150;
  const daysCompleted = 32; // This would come from backend

  const categoryColors = {
    fitness: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    nutrition: 'bg-green-500/10 text-green-600 dark:text-green-400',
    mindset: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    recovery: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Flame className="w-4 h-4" />
            <span>150 Days of Transformation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            The Winter Arc Challenge
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            October 1, 2025 – February 28, 2026
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">{daysCompleted}</div>
              <div className="text-sm text-muted-foreground">Days Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">{currentStreak}</div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">{totalDays - daysCompleted}</div>
              <div className="text-sm text-muted-foreground">Days Remaining</div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Daily Tasks Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Target className="w-6 h-6 text-accent" />
                      Today's Tasks
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Complete your daily challenges to maintain your streak
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    {completedCount}/{dailyTasks.length}
                  </Badge>
                </div>
                <div className="mt-4">
                  <Progress value={progressPercentage} className="h-2" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {dailyTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors"
                  >
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="w-5 h-5"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {task.title}
                      </p>
                    </div>
                    <Badge variant="outline" className={categoryColors[task.category]}>
                      {task.category}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Challenge Info */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  About The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The Winter Arc Challenge is a 150-day journey of discipline, growth, and transformation. 
                  From October 1st to February 28th, commit to daily tasks across fitness, nutrition, mindset, and recovery.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-lg bg-accent/5 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">💪 Fitness</h3>
                    <p className="text-sm">Daily workouts and movement tracking</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">🥗 Nutrition</h3>
                    <p className="text-sm">Clean eating and macro tracking</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">🧠 Mindset</h3>
                    <p className="text-sm">Meditation and journaling</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">😴 Recovery</h3>
                    <p className="text-sm">Sleep and rest optimization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard Section */}
          <div className="lg:col-span-1">
            <Card className="border-border bg-card sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-accent" />
                  Leaderboard
                </CardTitle>
                <CardDescription>
                  Top performers this month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      entry.rank <= 3
                        ? 'border-accent/50 bg-accent/5'
                        : 'border-border hover:bg-accent/5'
                    }`}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                      entry.rank === 1 ? 'bg-yellow-500/20 text-yellow-600' :
                      entry.rank === 2 ? 'bg-gray-400/20 text-gray-600' :
                      entry.rank === 3 ? 'bg-orange-500/20 text-orange-600' :
                      'bg-accent/10 text-muted-foreground'
                    }`}>
                      {entry.rank}
                    </div>
                    <div className="text-2xl">{entry.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">{entry.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {entry.score}
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          {entry.streak}d
                        </span>
                      </div>
                    </div>
                    {entry.rank <= 3 && (
                      <Award className="w-5 h-5 text-accent" />
                    )}
                  </div>
                ))}
                
                <Button variant="premium" className="w-full mt-4">
                  View Full Leaderboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TheChallenge;