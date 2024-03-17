import * as React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import CareerQuizBanner from "../components/careerQuiz/careerQuizBanner";
import SectionHeader from "../components/common/sectionHeader";
import CareerCategoryCard from "../components/cards/careerCategoryCard";
import PodcastCard from "../components/cards/podcastCard";
import VideoCard from "../components/cards/videoCard";
import ArticleCard from "../components/cards/articleCard";

const IndexPage: React.FC = () => {
  const ccList: Array<string> = ["a"];
  const podcastList: Array<string> = ["b"];
  const videoList: Array<string> = ["c"];
  const articleList: Array<string> = ["d"];

  return (
    <Layout>
      <Header />
      <CareerQuizBanner />
      {/* Career Categories */}
      <>
        <SectionHeader />{" "}
        {ccList.length > 0 ? (
          <>
            {ccList.map((careerCategory) => {
              return <CareerCategoryCard />;
            })}
          </>
        ) : (
          <>No career categories</>
        )}
      </>

      {/* Podcasts & Videos */}
      <>
        <>
          <SectionHeader />
          {podcastList.length > 0 ? (
            <>
              {podcastList.map((podcast) => {
                return <PodcastCard />;
              })}
            </>
          ) : (
            <>No podcasts</>
          )}
        </>
        <>
          <SectionHeader />
          {videoList.length > 0 ? (
            <>
              {videoList.map((video) => {
                return <VideoCard />;
              })}
            </>
          ) : (
            <>No videos</>
          )}
        </>
      </>

      {/* Articles */}
      <>
        <SectionHeader />{" "}
        {articleList.length > 0 ? (
          <>
            {articleList.map((article) => {
              return <ArticleCard />;
            })}
          </>
        ) : (
          <>No articles</>
        )}
      </>
    </Layout>
  );
};

export default IndexPage;
