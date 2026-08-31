import type { Band } from "../types/band";

export const favoriteBands: Band[] = [
  {
    id: 1,
    name: "Safeplanet",
    genre: "Indie Pop / Dream Pop",
    members: ["เอ (ร้องนำ/กีตาร์)", "ดอย (กลอง)", "ยี่ (เบส)"],
    image: "/images/bands/safeplanet.jpg",
    imagePosition: "top",
    description: "วงดนตรีอินดี้ป็อปกับซาวด์กีตาร์และเมโลดี้ชวนล่องลอย",
  },
  {
    id: 2,
    name: "Dept",
    genre: "Indie Pop / Alternative",
    members: ["เบนซ์ (ร้องนำ/กีตาร์)", "ลークหว้า (คีย์บอร์ด/ซินธิไซเซอร์)"],
    image: "/images/bands/dept.jpg",
    imagePosition: "top",
    description: "วงดูโอ้อินดี้ป็อปที่มีเอกลักษณ์ด้านการผสมผสานซาวด์สังเคราะห์",
  },
  {
    id: 3,
    name: "Anatomy Rabbit",
    genre: "Dream Pop / Indie Rock",
    members: ["โอ๊ค (ร้องนำ/กีตาร์)", "ทัช (กลอง)"],
    image: "/images/bands/anatomy_rabbit.jpg",
    imagePosition: "top",
    description: "วงดนตรีดรีมป็อปจากอุดรธานี เจ้าของเพลงขับรถเล่น",
  },
];