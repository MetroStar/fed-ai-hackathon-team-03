export interface Award {
  agency: string;
  awardeeCity: string;
  awardeeName: string;
  awardeeStateCode: string;
  fundsObligatedAmt: string;
  id: string;
  publicAccessMandate: string;
  date: string;
  startDate: string;
  title: string;
}

export interface AwardItems {
  items: Award[];
  item_count: number;
  page_count: number;
  prev_page: number | null;
  next_page: number | null;
}
