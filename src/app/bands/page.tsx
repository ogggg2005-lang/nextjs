import BandExplorer from "../../components/BandExplorer";
import { favoriteBands } from "../../data/bands";

export default function BandsPage() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Favorite Bands
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          วงดนตรีและศิลปินที่ชื่นชอบ
        </p>
      </header>

      <BandExplorer bands={favoriteBands} />
    </main>
  );
}