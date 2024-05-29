import CreateNewHabit from "@/components/create-habit";
import Habits from "@/components/habits";
import Login from "@/components/login";
import Logout from "@/components/logout";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col gap-2 items-center">
            <Login />
            <Logout />
            {/* <CreateNewHabit />
            <Habits /> */}
        </main>
    );
}
