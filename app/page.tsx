import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TableOfContents from "./components/TableOfContents";
import Marquee from "./components/Marquee";
import CafeSection, { type CafeSectionData } from "./components/CafeSection";
import WaveDivider from "./components/WaveDivider";
import Footer from "./components/Footer";

const cafeSections: CafeSectionData[] = [
  {
    id: "bluebottle",
    variant: "dark",
    marqueeBg: "#f9f3ec",
    marqueeText: "BLUEBOTTLE",
    marqueeDelay: 0,
    cafeName: "Blue Bottle",
    subtitle: "神戸カフェ",
    description: [
      "青いボトルのマークが象徴の大人気なチェーン点。",
      "コーヒーを淹れてる所をマジかで見れる、ちょっと",
      "リッチな空間になってます！",
    ],
    ambiance: "リッチな空間",
    singleSeat: "あり",
    seats: "63席",
    deskSize: "パソコンおける",
    maxPeople: "MAX 4人",
    access: "元町駅から徒歩7分",
    points: [
      "チェーン店だから数が多い、でもスタバほどはない",
      "他にも作業してる人がめちゃめちゃいっぱいいる！",
    ],
    ratingCups: [
      "https://www.figma.com/api/mcp/asset/cc3d265d-b23b-48f2-af89-43fc2bc04246",
      "https://www.figma.com/api/mcp/asset/cc3d265d-b23b-48f2-af89-43fc2bc04246",
      "https://www.figma.com/api/mcp/asset/cc3d265d-b23b-48f2-af89-43fc2bc04246",
      "https://www.figma.com/api/mcp/asset/74d32991-db0f-4b4d-9cd8-a4553ebdca40",
      "https://www.figma.com/api/mcp/asset/867303fc-cae8-414a-b431-4ce72556d3f7",
    ],
    photo: "https://www.figma.com/api/mcp/asset/7a10c6a7-20b8-419a-b027-af796ec54d94",
    photoAlt: "Blue Bottle 店内",
  },
  {
    id: "keshipearl",
    variant: "light",
    marqueeBg: "#c9b492",
    marqueeText: "KESHIPEARL",
    marqueeDelay: -5,
    cafeName: "Keshipearl",
    description: [
      "めちゃめちゃおしゃれなチーズケーキ専門店！！",
      "店内の落ち着く空間で特別な「ひとときの休憩」を",
      "コンセプトに営業してるカフェです！",
    ],
    ambiance: "一人でいれる空間",
    singleSeat: "あり",
    seats: "21席",
    deskSize: "パソコンおける",
    maxPeople: "MAX 2人",
    access: "高速神戸駅から徒歩5分",
    points: [
      "ある意味推しポイントだけど隠れ家みたいな場所に",
      "お店があるからちょっと見つけにくいかも？",
      "一人用の席があって作業しやすい雰囲気。",
      "ただ人が多いと席に制限時間があります！",
    ],
    ratingCups: [
      "https://www.figma.com/api/mcp/asset/15bc2503-0dc3-4e89-81ba-1638004af336",
      "https://www.figma.com/api/mcp/asset/15bc2503-0dc3-4e89-81ba-1638004af336",
      "https://www.figma.com/api/mcp/asset/15bc2503-0dc3-4e89-81ba-1638004af336",
      "https://www.figma.com/api/mcp/asset/bc3959dd-6300-465a-b83f-88b9f7427362",
      "https://www.figma.com/api/mcp/asset/7db407c9-7c67-4cc2-a73d-8bb432382ce7",
    ],
    photo: "https://www.figma.com/api/mcp/asset/4ad29648-123a-4a9f-89e7-2d8735c652ed",
    photoAlt: "Keshipearl 店内",
  },
  {
    id: "coq1f",
    variant: "dark",
    marqueeBg: "#f9f3ec",
    marqueeText: "CAFECOQ1F",
    marqueeDelay: -10,
    cafeName: "Cafe COQ1F",
    description: [
      "お客さんを魅了する空間とサービスを提供してくれます。",
      "「パティシエが作る洋菓子とスペシャルティコーヒーと",
      "お酒を楽しめるお店」ももう一つのコンセプトです！",
    ],
    ambiance: "バーに近い雰囲気",
    singleSeat: "あり",
    seats: "9席",
    deskSize: "カウンター席",
    maxPeople: "MAX 2人",
    access: "元町駅から徒歩10分",
    points: [
      "雰囲気がバーに近いから作業はおすすめできない！",
      "でも気分転換にはもってこい！のカフェ！",
      "googleMap見ていけば 問題なくいける！",
    ],
    ratingCups: [
      "https://www.figma.com/api/mcp/asset/6a6e48b9-5fc3-4695-a1b7-4ced62f3d707",
      "https://www.figma.com/api/mcp/asset/6a6e48b9-5fc3-4695-a1b7-4ced62f3d707",
      "https://www.figma.com/api/mcp/asset/5758cfa5-2862-4f28-aa34-843310f663c2",
      "https://www.figma.com/api/mcp/asset/5758cfa5-2862-4f28-aa34-843310f663c2",
      "https://www.figma.com/api/mcp/asset/5758cfa5-2862-4f28-aa34-843310f663c2",
    ],
    photo: "https://www.figma.com/api/mcp/asset/ee31873c-9333-448b-9f72-bce58d163fba",
    photoAlt: "Cafe COQ1F 店内",
  },
  {
    id: "zoe",
    variant: "light",
    marqueeBg: "#c9b492",
    marqueeText: "CAFEZOE",
    marqueeDelay: -15,
    cafeName: "Cafe Zoe",
    description: [
      "アンティーク雑貨に囲まれた、海外を思わせる",
      "オシャレな店です。静かにゆったり過ごす時間を",
      "求めに通うお客さんが多いです！",
    ],
    ambiance: "アメリカを感じれる秘密基地みたいなカフェ",
    singleSeat: "あり",
    seats: "16席",
    deskSize: "パソコンおける",
    maxPeople: "MAX 2人",
    access: "三宮駅から徒歩5分",
    points: [
      "一人用席あるけど、結構話したり二人で来てる人が多い",
      "googleMap見ていけば 問題なくいける！",
    ],
    ratingCups: [
      "https://www.figma.com/api/mcp/asset/fe022ff9-db71-48f1-823e-42ca6096b7c0",
      "https://www.figma.com/api/mcp/asset/fe022ff9-db71-48f1-823e-42ca6096b7c0",
      "https://www.figma.com/api/mcp/asset/fe022ff9-db71-48f1-823e-42ca6096b7c0",
      "https://www.figma.com/api/mcp/asset/64185062-1fcb-4476-87dc-6b3689863bc5",
      "https://www.figma.com/api/mcp/asset/64185062-1fcb-4476-87dc-6b3689863bc5",
    ],
    photo: "https://www.figma.com/api/mcp/asset/3cb82a18-afe5-4247-97cd-a4f67f8a77ed",
    photoAlt: "Cafe Zoe 店内",
  },
];

// Wave colors between sections
const waveTransitions = [
  { from: "#4a4634", to: "#c9b492" }, // BlueBottle → Keshipearl
  { from: "#c9b492", to: "#4a4634" }, // Keshipearl → COQ1F
  { from: "#4a4634", to: "#c9b492" }, // COQ1F → Zoe
  { from: "#c9b492", to: "#f9f3ec" }, // Zoe → Footer
];

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TableOfContents />

      {cafeSections.map((section, i) => (
        <div key={section.id}>
          <Marquee
            text={section.marqueeText}
            bgColor={section.marqueeBg}
            delay={section.marqueeDelay}
          />
          <CafeSection data={section} />
          <WaveDivider
            fromColor={waveTransitions[i].from}
            toColor={waveTransitions[i].to}
          />
        </div>
      ))}

      <Footer />
    </>
  );
}
