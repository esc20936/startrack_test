import biography from "../BiograpyInterface/BoigraphyInterface";
import stats from "../StatsInterface/HeroStatsInterface";
import images from "../ImagesInterface/ImagesInterface";

export default interface HeroInterface {
    name: string;
    biography: biography;
    powerstats: stats;
    images: images;
    id: string;
    liked?: boolean;
    lastLiked?: boolean;
  }
  