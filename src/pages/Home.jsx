import Hero from "../components/sections/home/Hero";
import QuizzesSection from "../components/sections/home/Quizzes";
import LeaderboardSection from "../components/sections/home/Leaderboard";
import LessonsSection from "../components/sections/home/Lessons";
import ContactCard from "../components/shared/ContactCard";

const Home = () => {
  return (
    <>
      <Hero />
      <QuizzesSection />
      <LeaderboardSection />
      <LessonsSection />
      <div className="-mt-16 mb-16">
        <ContactCard />
      </div>
    </>
  );
};

export default Home;
