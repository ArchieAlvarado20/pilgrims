import About from "./features/about/about";
import ChurchHistory from "./features/about/history";
import ChurchHeader from "./features/contact/contact";
import EmailUsSection from "./features/contact/emailUs";
import DevotionalSection from "./features/devotional/devotional";
import SermonSection from "./features/devotional/sermon";
import StatementOfFaith from "./features/devotional/statementOfFaith";
import HeroSection from "./features/home/hero";
import EldersCards from "./features/members/elders";
import ChurchLeadership from "./features/members/member";
import TopLeaders from "./features/members/topLeaders";
import Footer from "./shared/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SermonSection />
      <DevotionalSection />
      <About />
      <TopLeaders />
      <ChurchLeadership />
      <EldersCards />

      <ChurchHistory />
      <StatementOfFaith />
      <ChurchHeader />
      <EmailUsSection />
    </>
  );
}
