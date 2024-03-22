import { Metadata } from "next";
import MyMeetingsPage from "./MyMeetingsPage";

export const metadata: Metadata = {
  title: "My meetintgs",
};

export default function Page() {
  return <MyMeetingsPage />;
}
