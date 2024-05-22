import CreateNewHabit from "@/components/create-habit";
import Habits from "@/components/habits";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-2 items-center">
      <CreateNewHabit />
      <Habits />
    </main>
  );
}
